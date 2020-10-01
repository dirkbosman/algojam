import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const StateContext = createContext({});

function StateContextProvider({ children }) {
  const [bookmarks, setBookmarks] = useLocalStorage("bookmarks", []);

  const handleBookmarks = (uid, title, tags) => {
    const storedBookmarks = JSON.parse(
      window.localStorage.getItem("bookmarks") || "[]"
    );
    // check whether bookmark id is in local storage

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

// if (storedBookmarks.indexOf(uid) === -1) {
// return setBookmarks([uid, ...storedBookmarks]);

// i.e. bookmarks = [{uid: 16383389398379873 , title: "kjebkebekjbeek"},{uid: 1638338939837898798 , title: "kjebkebekjbeek"}, ]
