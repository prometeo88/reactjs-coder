import "./styles/components.css";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";
import Catalogo from "./components/Catalogo"
import ItemDetail from "./components/ItemDetail"

function App() {
  return (
    <>
      <Box>
        <div className="Navbar">
          <h1>Santiago Automotores</h1>
          <NavBar />
        </div>
      </Box>
      <div>
        <Catalogo />
        <ItemDetail />
      </div>
      <Box>
        
      </Box>
    </>
  );
}



export default App;
