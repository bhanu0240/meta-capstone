import "./index.css";

import React from "react";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <div className="container page-not-found">
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFound;
