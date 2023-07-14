import "./styles/components.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { Box  } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import Cart from "./components/Cart";
import ShoppingCartContextProvider from "../src/context/ShoppingCartContext";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <ChakraProvider>
      <ShoppingCartContextProvider>
        <BrowserRouter>
        <Box className="background" >
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/categoria" element={<ItemListContainer />} />
            <Route exact path="/categoria" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              exact
              path="/categoria/:categoria"
              element={<ItemListContainer />}
            />
          </Routes>
<Footer/>
          </Box>
        </BrowserRouter>
      </ShoppingCartContextProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
