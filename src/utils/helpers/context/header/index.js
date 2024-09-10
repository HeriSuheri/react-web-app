import React, { createContext } from "react";

const HeaderContext = createContext({
  isRefreshed: false,
});

export default HeaderContext;