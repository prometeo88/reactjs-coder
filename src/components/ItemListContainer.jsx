import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Heading } from "@chakra-ui/react";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [data, setProds] = useState([]);

  useEffect(() => {
    const base = getFirestore();
    const prodsCollection = collection(base, "vehiculos");
    getDocs(prodsCollection).then((QuerySnapshot) => {
      const data = QuerySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProds(data);
    });
  }, []);

  const categoriaFilter = data.filter((prod) => prod.categoria === categoria);

  return (
    <div>
      <div>
        <Heading as="h1" className="titulos">Catalogo</Heading>
      </div>
      <div>
        {categoria ? (
          <ItemList prod={categoriaFilter} />
        ) : (
          <ItemList prod={data} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
