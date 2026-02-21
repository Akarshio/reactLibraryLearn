import App from './App.jsx';
import Client  from './Client.jsx';
import React  from "react";
import ReactDom from "react-dom/client";


ReactDom.createRoot(document.getElementById('root'))
    .render(
      <>
      <App />
          <Client />
      </>
)
