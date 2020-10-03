import React, { useContext, useState, useEffect } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { useJamsData } from "../hooks/jams";
import { StateContext } from "../components/stateContext";
import StateContextProvider from "../components/stateContext";
import axios from "axios";

const TagsPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const { bookmarks } = useContext(StateContext);
  const originalData = useJamsData();
  const [copylog, setCopyLog] = useState([]);

  const retty = originalData.map(({ node }) => {
    if (bookmarks.find((item) => item.uid === node.frontmatter.uid)) {
      // return <div>{node.frontmatter.title}</div>;
      return <div>{node.frontmatter.tags}</div>;
    }
  });

  const tagsCount = bookmarks.reduce((acc, bookmark) => {
    const tags = bookmark.tags;
    tags.map((tag) => {
      if (tag in acc) {
        acc[tag] = acc[tag] + 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});

  console.log(tagsCount);

  // const uniqueTags2 = Object.keys(tagsCount).map((tag) => tag);

  const uniqueTags6 = Object.keys(tagsCount).map((v, i) => (
    <div key={i}>{v}</div>
  ));

  const tagsCount2 = Object.keys(tagsCount).map((tagc, index) => (
    <ul className="quicklist-content">
      <li className="quicklist-item" key={index}>
        {tagc}
      </li>
    </ul>
  ));

  const uniqueTags = bookmarks.reduce((acc, bookmark) => {
    const tags = bookmark.tags;
    tags.map((tag) => {
      if (!acc.includes(tag)) acc = [...acc, tag];
    });
    return acc;
  }, []);

  const uniqueTags2 = Object.keys(uniqueTags).map((vibe, index) => (
    <ul className="quicklist-content">
      <li className="quicklist-item" key={index}>
        {vibe}
      </li>
    </ul>
  ));

  // https://stackoverflow.com/questions/58345210/get-data-from-react-to-flask-via-post
  useEffect(() => {
    axios
      .get("http://dojoyo.pythonanywhere.com/bookmarks")
      .then(function (response) {
        // console.log(response);
        setCopyLog(response.data);
      })
      .catch(function (error) {
        // console.log("Request failed");
      });
  }, []);

  return (
    <StateContextProvider>
      <Layout>
        <>
          {uniqueTags6}
          <hr />
          {tagsCount2}
          <hr />
          {uniqueTags2}
          <hr />
          {retty}
          <hr />
          <div className="CopylogContainer">
            {copylog.map(({ item_id }, index) => (
              <div className="LatestCopylog" key={index}>
                <div className="CopylogItem">{item_id}</div>
              </div>
            ))}
          </div>
        </>
      </Layout>
    </StateContextProvider>
  );

  //   return (
  //     // <StateContextProvider>
  //     //   <Layout>
  //         <>
  //           {/* <SEO title="Home" /> */}
  //           <h1>Tags</h1>
  //           <h4>All Tags</h4>
  //           <h4>Bookmarked Tags</h4>
  //           <div>
  //             {originalData.map(({ node }) => {
  //               if(node.frontmatter.uid === bookmarks.uid) {
  //                 return <li>{node.frontmatter.tags}</li>;
  //               }
  //             })
  //             }
  //           </div>
  //         <>
  //       {/* </Layout>
  //     </StateContextProvider> */}
  //   );
  // };
};

export default TagsPage;
