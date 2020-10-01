import React, { useContext, useState, useEffect } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { useJamsData } from "../hooks/jams";
import { StateContext } from "../components/stateContext";
import StateContextProvider from "../components/stateContext";

// import { Button, Badge, Card, CardBody, CardSubtitle } from "reactstrap";
// import Img from "gatsby-image";
// import { slugify } from "../utils/utilityFunctions";
// import { StateContext } from "../components/stateContext";
// import StateContextProvider from "../components/stateContext";
// import Post from "../components/Post";
// import { Row, Col } from "reactstrap";
// import Sidebar from "../components/Sidebar";
// import Fuse from "fuse.js";
// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import Post from "../components/Post";
// import { Row, Col } from "reactstrap";
// import Sidebar from "../components/Sidebar";
// import { useJamsData } from "../hooks/jams";
// import StateContextProvider from "../components/stateContext";

// const TagsPage = () => (
// const originalData = useJamsData();
// <Layout>
//   <SEO title="Tags" />
//   <h1>Tags</h1>
// </Layout>
// );
// export default TagsPage;

const TagsPage = () => {
  // const { bookmarks, handleBookmarks } = useContext(StateContext);
  const { bookmarks } = useContext(StateContext);
  const originalData = useJamsData();

  console.log(originalData);
  console.log(bookmarks.uid);

  const retty = originalData.map(({ node }) => {
    if (bookmarks.find((item) => item.uid === node.frontmatter.uid)) {
      return <div>{node.frontmatter.title}</div>;
      // return <div>{node.frontmatter.tags}</div>;
    }
  });

  console.log(retty);

  return (
    <StateContextProvider>
      <>{retty}</>
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
