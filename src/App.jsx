import "./styles/components.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { Box, CardFooter } from "@chakra-ui/react";
import ItemDetail from "./components/ItemDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <BrowserRouter>
        <Box>
          <NavBar />
        </Box>
        <div>
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/categoria" element={<ItemListContainer />} />
            <Route exact path="/categoria" element={<ItemDetail />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Box></Box>
      </BrowserRouter>
    </>
  );
}

export default App;
