import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../itemCount/ItemCount"
import swal from "sweetalert"
import styles from "./ItemDetail.module.css"

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityBiId } = useContext(CartContext)

  const onAdd = (quantity) => {
    addToCart({
      ...product,
      quantity: quantity,
    })

    swal({
      title: "¡Operación Exitosa!",
      text: "¡Agregaste un producto al carrito!",
      icon: "success",
      button: "Ok",
    })
  }

  const quantity = getQuantityBiId(product.id)

  return (
    <div className={styles.containerItemDetail}>
      <div className={styles.containerImage}>
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetail}>
        <h2>
          <span style={{ fontSize: "20px" }}>Nombre:</span> {product.name}
        </h2>
        <h2>
          <span style={{ fontSize: "20px" }}>Descripcion:</span>{" "}
          {product.description}
        </h2>
        <h2>
          <span style={{ fontSize: "20px" }}>Precio:</span> ${product.price}
        </h2>
        
      
        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  )
}

export default ItemDetail
