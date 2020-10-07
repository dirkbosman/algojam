import React from "react";
import StateContextProvider from "./src/components/stateContext";

require("prismjs/themes/prism-okaidia.css");

export const wrapRootElement = ({ element }) => (
  <StateContextProvider>{element}</StateContextProvider>
);
