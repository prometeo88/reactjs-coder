import data from "../data.json"

 console.log(data)
const itemDetail = ({data}) => {
    //const dataFiltro = data.filter((data) => data.id == id)
    return(

data.map((prod)=>(
        <div key={data.id}>
<h5>hola</h5>
        </div>
    ) )
    


    )}