import "./styles/components.css";
import NavBar from "./components/NavBar";
import { Box } from '@chakra-ui/react'
import data from "./data.json"

function App() {
  return (
    <Box>
    <div className="Navbar">
      <h1>Santiago Automotores</h1>
      <NavBar/>
    </div></Box>

  );
}

console.log(data)

export default App;
