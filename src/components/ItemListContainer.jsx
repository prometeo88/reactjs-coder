import data from "../data.json";
import ItemList from "./ItemList";

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
    <>
    <div className="catalogo">
      <div >
        <h1 className="titulos">Catalogo</h1>
      </div>
      <ItemList> </ItemList>
      </div>
    </>
  );
};



export default ItemListContainer