import data from "../data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

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

  const { categoria } = useParams();
  const categoriaFilter = data.filter((prod) => prod.categoria === categoria);
  console.log(categoriaFilter)

  return (
    <div className="catalogo">
      <div>
        <h1 className="titulos">Catalogo por Categoria</h1>
      </div>
      
      {categoria ? <ItemList prod={categoriaFilter} /> : <ItemList prod={data} />}
    </div>
  );
};

export default ItemListContainer;