import data from "../data.json";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const itemDetailContainer = () => {
  const {id} = useParams();

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
  return (
    <ItemDetail/>
  )
}



export default itemDetailContainer