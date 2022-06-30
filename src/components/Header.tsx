import { Fragment } from "react";
import "./Header.css";

function Header() {
  return (
    <Fragment>
      <div className="wrap">
        <div>afolabi4luv98@gmail.com</div>
        <div>
          <a href="#"></a>
        </div>
      </div>
      <header className="header">
        <h1 className="content">Vacation Rental</h1>
        <button>Menu</button>
      </header>
    </Fragment>
  );
}

export default Header;
