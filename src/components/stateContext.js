import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const StateContext = createContext({});

function StateContextProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  const handleBookmarks = (uid, title, tags) => {
    // const storedBookmarks = JSON.parse(
    //   window.localStorage.getItem("bookmarks") || "[]"
    // );
    const isServer = typeof localStorage === "undefined";
    const localStorageBookmarks = isServer ? "[]" : localStorage.bookmarks;
    const storedBookmarks = JSON.parse(localStorageBookmarks);

    const bookmarkedItem = storedBookmarks.find((item) => item.uid === uid);

    if (!bookmarkedItem) {
      return setBookmarks([{ uid, title, tags }, ...storedBookmarks]);
    }
    setBookmarks(storedBookmarks.filter((item) => item.uid !== uid));
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
