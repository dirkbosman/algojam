import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const StateContext = createContext({});

function StateContextProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);
  // const [favourites, setFavourites] = useLocalStorage("favourites", [])

  // const handleFavourites = (uid) => {
  //   const storedBookmarks = JSON.parse(
  //     window.localStorage.getItem("bookmarks") || "[]"
  //   );
  //   // check whether bookmark id is in local storage
  //   if (storedBookmarks.indexOf(uid) === -1) {
  //     return setBookmarks([uid, ...storedBookmarks]);
  //   }
  //   setBookmarks(storedBookmarks.filter((item) => item !== uid));
  // };

  const handleBookmarks = (uid) => {
    const storedBookmarks = JSON.parse(
      window.localStorage.getItem("bookmarks") || "[]"
    );
    // check whether bookmark id is in local storage
    if (storedBookmarks.indexOf(uid) === -1) {
      return setBookmarks([uid, ...storedBookmarks]);
    }
    setBookmarks(storedBookmarks.filter((item) => item !== uid));
  };

  return (
    <StateContext.Provider
      value={{
        bookmarks,
        handleBookmarks,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContextProvider;
