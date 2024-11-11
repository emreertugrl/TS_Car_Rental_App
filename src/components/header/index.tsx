import { Link } from "react-router-dom";
import Button from "../button";

const Header = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>
          <img src="/bmw.png" />
        </Link>
        <Button title={"Prop"} />
      </div>
    </div>
  );
};

export default Header;
