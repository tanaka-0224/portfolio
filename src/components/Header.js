import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>portfolio</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
            <a href="#"></a>
          </li>
          <li>
            <Link to="/blog">ブログ</Link>
            <a href="#"></a>
          </li>
          <li>
            <a href="#">SNS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
