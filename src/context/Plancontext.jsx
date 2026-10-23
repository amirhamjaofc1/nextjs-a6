"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function PlanProvider({ children }) {
  // const [read, setPlanlist] = useState([]);
  const [planlist, setPlanlist] = useState([]);
  const [savelist, setsavelist] = useState([]);

  const value = {
    planlist,
    setPlanlist,
    savelist,
    setsavelist,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function usePlanContext(){
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("error");
        
    }
    return context;
}
