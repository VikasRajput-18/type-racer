import { createContext, useContext } from "react";
import io from "socket.io-client";

let backend_url = import.meta.env.VITE_BACKEND_URL;
const socket = io(backend_url);

const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = () => {
  const socket = useContext(SocketContext);
  return socket;
};
