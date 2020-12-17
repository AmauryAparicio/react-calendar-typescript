import React, { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

const NotFound: FunctionComponent = () => {
  const location = useLocation();
  return (
    <main className="not-found">
      <h1 className="heading heading--display">
        Error 404 - Page &ldquo;{location.pathname}&rdquo; not found...
      </h1>
    </main>
  );
};

export default NotFound;
