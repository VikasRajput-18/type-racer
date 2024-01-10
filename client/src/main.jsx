import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SocketContextProvider } from "./SocketContext.jsx";
import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <SocketContextProvider>
      <App />
      <Toaster />
    </SocketContextProvider>
  </BrowserRouter>
);
