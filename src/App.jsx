import "./styles/components.css";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";
import data from "./data.json";
import Catalogo from "./components/Catalogo"

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
        
      </div>
      <Box>
        
      </Box>
    </>
  );
}

//async
const getData = () => {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error("No hay datos"));
    }
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

async function fetchingData() {
  try {
    const datosFetched = await getData();
    console.log(datosFetched);
  } catch (err) {
    console.log(err);
  }
}

fetchingData();

export default App;
