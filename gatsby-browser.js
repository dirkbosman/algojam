import React from "react";
import StateContextProvider from "./src/components/stateContext";
// import { StateContext } from "../components/stateContext";
// import { ThemeProvider } from "./src/context/ThemeContext"

require("prismjs/themes/prism-okaidia.css");
// require("prismjs/themes/prism-solarizedlight.css”);

export const wrapRootElement = ({ element }) => (
  <StateContextProvider>{element}</StateContextProvider>

  //   <StateContext.Provider
  //     value={{
  //       bookmarks,
  //       handleBookmarks,
  //     }}
  //   >
  //     {element}
  //   </StateContext.Provider>
);
