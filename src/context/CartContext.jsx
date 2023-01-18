import { createContext, useState } from "react"
import swal from "sweetalert"

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (element) => {
    if (isInCart(element)) {
      let newArray = cart.map((product) => {
        if (product.id === element.id) {
          let newProduct = {
            ...product,
            quantity: element.quantity,
          }
          return newProduct
        } else {
          return product
        }
      })

      setCart(newArray)
    } else {
      setCart([...cart, element])
    }
  }

  const isInCart = (item) => {
    return cart.some((elemento) => elemento.id === item.id)
  }

  const clearCart = () => {
    setCart([])
  }

  const getQuantityBiId = (id) => {
    const product = cart.find((elemento) => elemento.id === id)

    return product?.quantity
  }

  const getTotalQuantity = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.quantity
    }, 0)

    return total
  }
  
  const getTotalPrice = () => {
    const total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity
    }, 0)

    return total
  }

  const deleteProductById = (id) => {
    const newArray = cart.filter((product) => product.id !== id)
    swal({
      title: "¿Estas seguro de eliminar el producto?",
      
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("El producto ha sido eliminado!", {
          icon: "success",
        })
        setCart(newArray)
      }
    });
     // []

    
  }

  const data = {
    cart,
    addToCart,
    clearCart,
    getQuantityBiId,
    getTotalPrice,
    getTotalQuantity,
    deleteProductById,
  }

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider
