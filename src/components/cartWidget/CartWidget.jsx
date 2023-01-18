
import { useContext } from "react"
import "./CartWidget.css"
import {FaShoppingCart} from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const CartWidget = () => {
  const { cart } = useContext(CartContext)

  return (
    <div className="container-cart my-3 text-white">
      <Link to="/cart">
        <FaShoppingCart
          style={{
            fontSize: "2rem",
            color: "#211617",
          }}
        />
        <div className="bubble-counter">
          <span style={{color: "#7F669D"}}>{cart.length}</span>
        </div>
      </Link>
    </div>
  )
}
