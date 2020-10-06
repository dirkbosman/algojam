import React, { useContext } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import {
  Button,
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import Img from "gatsby-image";
import { slugify } from "../utils/utilityFunctions";
// import { StateContext } from "../../components/stateContext";
// import { makePostRequest } from "../../utils/common";
import { StateContext } from "../components/stateContext";
import StateContextProvider from "../components/stateContext";
import { makePostRequest } from "../utils/common";
// import authors from "../utils/authors";
import { DiscussionEmbed } from "disqus-react";
import Sidebar from "../components/Sidebar";

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter;

  const { bookmarks, handleBookmarks } = useContext(StateContext);
  // let { bookmarks, handleBookmarks } = useContext(StateContext);
  // if (!bookmarks) {
  //   bookmarks = [];
  // }

  const baseUrl = "https://www.algojam.com/";

  const disqusShortname = "algojam";
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug,
    // url: baseUrl + post.uid,
  };

  return (
    // <StateContextProvider>
    <Layout
      pageTitle={post.title}
      // postAuthor={author}
      authorImageFluid={data.file} //data.file.childImageSharp.fluid
    >
      <SEO
        author={post.author}
        title={post.title}
        keywords={post.tags}
        description={post.description}
        // url={baseUrl}
        pathname={location.pathname}
      />
      <Row>
        <Col md="8">
          <Card>
            {/* <Img
            className="card-image-top"
            fluid={post.image.childImageSharp.fluid}
          /> */}
            <CardBody>
              <CardSubtitle>
                <span className="text-info">{post.date}</span> by{" "}
                <span className="text-info">{post.author}</span>
              </CardSubtitle>
              <ul className="post-tags">
                {post.tags.map((tag) => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <Badge color="primary">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
              {/* //// Start of Bookmark //// */}
              <Button
                color="primary"
                style={{
                  marginBottom: "1rem",
                  backgroundColor:
                    // bookmarks && bookmarks.find((item) => item.uid === post.uid)
                    bookmarks && bookmarks.find((item) => item.uid === post.uid)
                      ? "blue"
                      : "#8CFACA",
                  color: "black",
                  border: "1px solid grey",
                  margin: "6px 0px",
                }}
                size="sm"
                onClick={() => {
                  /////////////////////////////////////////////////////////////////
                  // console.log(bookmarks);
                  /////////////////////////////////////////////////////////////////
                  handleBookmarks(post.uid, post.title, post.tags);
                  makePostRequest("https://dojoyo.pythonanywhere.com/mark", {
                    item_id: post.uid,
                    // item_type: bookmarks && bookmarks.find((item) => item.uid === post.uid)
                    item_type:
                      bookmarks &&
                      bookmarks.find((item) => item.uid === post.uid)
                        ? "unbookmark"
                        : "bookmark",
                  });
                }}
              >
                {/* {bookmarks && bookmarks.find((item) => item.uid === post.uid) ? "🔖": "💾"} */}
                {bookmarks && bookmarks.find((item) => item.uid === post.uid)
                  ? "🔖"
                  : "💾"}
              </Button>

              {/* //// End of Bookmark //// */}

              <div
                // Use alternative syntax for dangerouslySetInnerHTML ????
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </CardBody>
          </Card>
          <h3 className="text-center">We Wuf Feedback!</h3>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </Col>
        <Col md="4">
          <Sidebar />
        </Col>
      </Row>
    </Layout>
    // </StateContextProvider>
  );
};

// query blogPostBySlug($slug: String!, $imageUrl: String!) {
export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        uid
        title
        date(formatString: "MMM Do YYYY")
        author
        audio_url
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
