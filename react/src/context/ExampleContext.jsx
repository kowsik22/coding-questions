import { createContext, useState, useContext } from "react";

let GiftContext = createContext();

export let GiftProvider = ({ children }) => {
  let [gift, setGift] = useState("");

  return (
    <GiftContext.Provider value={{ gift, setGift }}>
      {children}
    </GiftContext.Provider>
  );
};

export let useData = () => useContext(GiftContext);
