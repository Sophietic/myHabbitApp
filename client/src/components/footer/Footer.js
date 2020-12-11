import React from "react";
import "bulma/css/bulma.css";

function Footer() {
  return (
    <footer className="footer">
      <div class="content has-text-centered">
        <p>
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
