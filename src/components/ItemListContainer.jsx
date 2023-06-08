import data from "../data.json";
import itemList from "../components/itemList";

const ItemListContainer = () => {
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
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer