import React, { useContext, useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "gatsby";
import { StateContext } from "../stateContext";
import StateContextProvider from "../../components/stateContext";
import { makePostRequest } from "../../utils/common";
import axios from "axios";

const Bookmarks = ({ data, limit, title, isLocal }) => {
  const [commBookmarks, setCommBookmarks] = useState([]);
  const [searchableList, setSearchableList] = useState({});
  const { bookmarks, handleBookmarks } = useContext(StateContext);

  useEffect(() => {
    const dictionary = createDictionary(data);
    setSearchableList(dictionary);
    const tempData = [];
    if (isLocal || typeof isLocal === "undefined") return true;

    axios
      .get("https://dojoyo.pythonanywhere.com/bookmarks")
      // .get("http://dojoyo.pythonanywhere.com/bookmarks")
      .then(function (response) {
        const data = [];
        response.data.forEach(({ item_id }) => {
          tempData.push(dictionary[item_id]);
        });
        setCommBookmarks(tempData);
      })
      .catch(function (error) {
        // console.log("Request failed");
      });
  }, [data.length, isLocal]);
  // }, [data && data.length, isLocal]);

  if (Object.keys(searchableList).length === 0) {
    return <div>...</div>;
  }

  let bookmarksCopy = [...bookmarks];
  if (limit) {
    bookmarksCopy = bookmarksCopy.slice(0, limit);
  }

  if (isLocal === false) {
    bookmarksCopy = commBookmarks;
  }
  return (
    <StateContextProvider>
      <div>
        <h5>{title}</h5>
        <div className="cardTags">
          <ul className="">
            {bookmarksCopy.map((bookmark) => {
              const item = searchableList[bookmark.uid];
              return (
                <li key={bookmark.uid}>
                  <Link to={`/${bookmark.uid}`} tabIndex={0}>
                    {item.title}
                  </Link>
                  &nbsp;&nbsp;
                  <Button
                    color="primary"
                    size="sm"
                    onClick={() => {
                      handleBookmarks(item.uid, item.title, item.tags);
                      makePostRequest(
                        "https://dojoyo.pythonanywhere.com/mark",
                        {
                          item_id: item.uid,
                          item_type: true ? "unbookmark" : "bookmark",
                        }
                      );
                    }}
                    style={{
                      display: isLocal ? "inline-block" : "none",
                      marginBottom: "1rem",
                      backgroundColor:
                        item.uid === bookmark.uid ? "blue" : "#8CFACA",
                      color: "black",
                      border: "1px solid grey",
                      margin: "6px 0px",
                    }}
                  >
                    {item.uid === bookmark.uid ? "💾" : "🔖"}
                  </Button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </StateContextProvider>
  );
};

export default Bookmarks;

// Utility functions
const createDictionary = (data) => {
  const items = {};
  data.forEach((item) => {
    items[item.node.frontmatter.uid] = item.node.frontmatter;
  });
  return items;
};
