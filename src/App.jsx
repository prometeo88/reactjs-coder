import "./styles/components.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import Cart from "./components/Cart"
import ItemDetail from "./components/itemDetail";



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
            <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
            <Route exact path="/categoria/:categoria" element={<ItemListContainer /> }/>
          </Routes>
        </div>
        <Box></Box>
      </BrowserRouter>
    </>
  );
}

export default App;
