import React from "react";
import "bulma/css/bulma.css";
import "./Footer.css";


function Footer() {
  return (
    <footer className="footer mt-0 mb-0 pb-0 pt-0">
      <div className="content has-text-centered mt-0 mb-0 pb-0 pt-0">
        <p >
          <strong>Copyright © 2020 </strong>
          <a className="has-text-danger" href="https://github.com/Sophietic">
            Sophie Tichelaar.
          </a>{" "}
          <strong>All Rights Reserved</strong>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
