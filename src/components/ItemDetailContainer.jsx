import data from "../data.json";
import itemDetail from "./ItemDetail";

const itemDetailContainer = () => {
  
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
    <div>ItemDetail</div>
  )
}



export default itemDetailContainer