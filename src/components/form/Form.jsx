import { useState } from "react"
import TextField from '@mui/material/TextField';
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore"
import { db } from "../../firebaseConfig"
import swal from "sweetalert"

const Form = ({ cart, getTotalPrice, setOrderId, clearCart }) => {

  const [userData, setUserData] = useState({ name: "", phone: "", email: "", ReEmail : "" })

  const total = getTotalPrice()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (userData.name === "" || userData.phone === "" || userData.email === "") {
      swal({title:"Los campos no pueden estar vacios.",
            text: "Por favor complete todos los campos."});
      return;
    }
    if(userData.email!==userData.ReEmail){
      swal({title: "Los email son diferentes.",
    text: "Por favor ingrese los email correctamente."});
      return;
    }
    const order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    }

    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then((res) => setOrderId(res.id))

    cart.map((product) => (
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    ))

    clearCart()
  }

  return (
    <div>
      
      <form className="flex flex-col" action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre y apellido</label>
        
        <TextField
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          value={userData.name}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
        />
        
        <label htmlFor="phone">Telefono</label>
        <TextField
          type="text"
          placeholder="Ingrese su telefono"
          name="phone"
          onChange={(event) =>
            setUserData({ ...userData, phone: event.target.value })
          }
          value={userData.phone}
        />
        <label htmlFor="email">Email</label>
        <TextField
          type="email"
          placeholder="Ingrese su email"
          name="email"
          onChange={(event) =>
            setUserData({ ...userData, email: event.target.value })
          }
          value={userData.email}
        />
        <label htmlFor="ReEmail">Reingrese Email</label>
        <TextField
          type="email"
          placeholder="Reingrese su email"
          name="ReEmail"
          onChange={(event) =>
            setUserData({ ...userData, ReEmail: event.target.value })
          }
          value={userData.ReEmail}
        />
        <button className="w-full  bg-slate-200 border border-slate-300 hover:bg-slate-300 py-2 px-2 rounded-md" type="submit">Finalizar Compra</button>
      </form>
    </div>
  )
}

export default Form

