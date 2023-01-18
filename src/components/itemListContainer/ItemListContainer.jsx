import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import ItemList from "../itemList/ItemList"

import { useParams } from "react-router-dom"
import DotLoader from "react-spinners/DotLoader"

import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
}

const ItemListContainer = () => {
  const { categoryName } = useParams()

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    // guarda en la constante la coleccion con los productos, de la base de datos db, 
    // y la coleccion es "products"
    const itemCollection = collection(db, "products")

    if (categoryName) {
      //la constante sirve para filtrar la busqueda por categoria
      const q = query(itemCollection, where("category", "==", categoryName))

      //trae la coleccion como promesa
      getDocs(q)
        .then((res) => {
          //guarda los productos como arreglo y lo envia a traves de setItems
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    } else {
      //trae todos los productos sin filtrar, osea todos los productos
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            }
          })

          setItems(products)
        })
        .catch((err) => console.log(err))
    }

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [categoryName])

  return (
    <div className="light container flex mt-11">
      {isLoading ? (
        <DotLoader
          color={"#e92c88"}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}

    </div>
  )
}

export default ItemListContainer
