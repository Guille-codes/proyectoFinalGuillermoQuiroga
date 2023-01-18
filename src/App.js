import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Header from "./components/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";

import CartContextProvider from "./context/CartContext";
import Form from "./components/form/Form";
import FormikFormulario from "./components/formik/FormikFormulario";

function App() {
  // CREAR EL ENRUTADO

  return (
    <div className=" bg-slate-100 h-screen">
      <div className="container mx-auto  ">
        <BrowserRouter>
          <CartContextProvider>
            
            <Header/>

            <Routes>
              <Route path="/" element={<ItemListContainer />} />

              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />

              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />

              <Route path="/checkout" element={<Form />} />

              <Route path="/cart" element={<Cart />} />

              <Route path="/formik" element={<FormikFormulario />} />

              <Route path="*" element={<h2>Esta url no existe.</h2>} />
            </Routes>
          </CartContextProvider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
