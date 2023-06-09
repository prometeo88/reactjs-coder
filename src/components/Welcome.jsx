import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <Link to={"/"}><div className="welcome"><img src="src/assets/img/carsellwelcome.jpg"  /></div></Link>
  )
}


export default Welcome