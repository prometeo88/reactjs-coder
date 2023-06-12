import data from "../data.json";
import {useParams} from "react-router-dom";
import ItemDetail from "./itemDetail";


const ItemDetailContainer = () => {
  const { id } = useParams();

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

  const carFilter = data.filter((prod) => prod.id === id);

  return (
    <div>{id ? <ItemDetail prod={carFilter} /> : <ItemDetail car={data} />}</div>
  );
};

export default ItemDetailContainer;
