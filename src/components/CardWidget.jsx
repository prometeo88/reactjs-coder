import { Link } from "react-router-dom";

const CardWidget = () => {
  return (
    <>
      <Link to={"/Cart"}><div>
        <span className="textoFlotante">0</span>
      </div>
      </Link>
    </>
  );
};

export default CardWidget;
