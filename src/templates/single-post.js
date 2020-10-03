import React, { useContext } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import { Button, Badge, Card, CardBody, CardSubtitle } from "reactstrap";
import Img from "gatsby-image";
import { slugify } from "../utils/utilityFunctions";
import { StateContext } from "../components/stateContext";
import StateContextProvider from "../components/stateContext";
import { makePostRequest } from "../utils/common";
// import { useJamsData } from "../hooks/jams";

const SinglePost = ({ data, location }) => {
  const post = data.markdownRemark.frontmatter;
  const { bookmarks, handleBookmarks } = useContext(StateContext);

  console.log(post);
  console.log({ bookmarks });

  return (
    <StateContextProvider>
      <Layout pageTitle={post.title}>
        <SEO
          title={post.title}
          keywords={post.tags}
          description={post.description}
          // url={baseUrl}
          pathname={location.pathname}
        />
        <Card>
          <Img
            className="card-image-top"
            fluid={post.image.childImageSharp.fluid}
          />
          <CardBody>
            <CardSubtitle>
              <span className="text-info">{post.date}</span> by{" "}
              <span className="text-info">{post.author}</span>
            </CardSubtitle>

            {/* //// Start of Bookmark //// */}
            <Button
              color="primary"
              style={{
                marginBottom: "1rem",
                // backgroundColor: bookmarks.find((item) => item.uid === post.uid)
                backgroundColor: bookmarks.includes(
                  (item) => item.uid === post.uid
                )
                  ? "blue"
                  : "#8CFACA",
                color: "black",
                border: "1px solid grey",
                margin: "6px 0px",
              }}
              size="sm"
              onClick={() => {
                handleBookmarks(post.uid, post.title, post.tags);
                makePostRequest("http://dojoyo.pythonanywhere.com/mark", {
                  item_id: post.uid,
                  // item_type: bookmarks.find((item) => item.uid === post.uid)
                  item_type: bookmarks.includes((item) => item.uid === post.uid)
                    ? "unbookmark"
                    : "bookmark",
                });
              }}
            >
              {bookmarks.find((item) => item.uid === post.uid) ? "🔖" : "💾"}
            </Button>

            {/* <Button
              color="primary"
              size="sm"
              onClick={() => {
                handleBookmarks(uid, title, tags);
                makePostRequest("http://dojoyo.pythonanywhere.com/mark", {
                  item_id: uid,
                  item_type: bookmarks.find((item) => item.uid === uid)
                    ? "unbookmark"
                    : "bookmark",
                });
              }}
              style={{
                marginBottom: "1rem",
                backgroundColor: bookmarks.find((item) => item.uid === uid)
                  ? "blue"
                  : "#8CFACA",
                color: "black",
                border: "1px solid grey",
                margin: "6px 0px",
              }}
            >
              {bookmarks.find((item) => item.uid === uid) ? "🔖" : "💾"}
            </Button> */}

            {/* //// End of Bookmark //// */}

            <div
              // Use alternative syntax for dangerouslySetInnerHTML ????
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <ul className="post-tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <Badge color="primary">{tag}</Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
        <h3 className="text-center">Share this post</h3>
      </Layout>
    </StateContextProvider>
  );
};

// query blogPostBySlug($slug: String!, $imageUrl: String!) {
export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        uid
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        palette
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default SinglePost;
