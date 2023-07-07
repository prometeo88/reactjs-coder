import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id)

  const [dataIndividual, setProds] = useState([null]);

   useEffect(() => {
    const base= getFirestore ();
    const prodsIndividual = doc(base,"vehiculos", `${id}`);
    getDoc(prodsIndividual).then((snapshot) => {
      if (snapshot.exists()){
        setProds({id:snapshot.id,...snapshot.data()});
      }else{
        console.log("No existe ese producto")
      }
    });
   },[id]);

 
  return (
    <div>
    {id ? <ItemDetail prod={dataIndividual} id={id} /> : <ItemDetail car={dataIndividual} />}
  </div>
  );
};

export default ItemDetailContainer;
