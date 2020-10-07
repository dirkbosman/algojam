import React, { useState, useEffect, useContext } from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import {
  Button,
  Badge,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";
import Img from "gatsby-image";
import { slugify } from "../utils/utilityFunctions";
import { StateContext } from "../components/stateContext";
import { makePostRequest } from "../utils/common";
import { DiscussionEmbed } from "disqus-react";
import Sidebar from "../components/Sidebar";

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter;

  const { bookmarks, handleBookmarks } = useContext(StateContext);

  // let { bookmarks, handleBookmarks } = useContext(StateContext);
  // if (!bookmarks) {
  //   bookmarks = [];
  // }

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  const baseUrl = "https://www.algojam.com/";

  const disqusShortname = "algojam";
  const disqusConfig = {
    identifier: data.markdownRemark.id,
    title: post.title,
    url: baseUrl + pageContext.slug,
  };

  return (
    <Layout pageTitle={post.title} authorImageFluid={data.file}>
      <SEO
        author={post.author}
        title={post.title}
        keywords={post.tags}
        description={post.description}
        pathname={location.pathname}
      />
      <Row>
        <Col md="8">
          <Card>
            <CardBody>
              <div className="cardOverallContent">
                <div className="cardTopContent">
                  <Img
                    className="card-image-top"
                    fluid={post.image.childImageSharp.fluid}
                    style={{
                      width: "60px",
                      height: "60px",
                      marginRight: "10px",
                    }}
                  />
                  <div className="cardTitleContent">
                    <CardTitle className="cardTitleText">
                      <Link>{post.title}</Link>
                    </CardTitle>
                    <CardSubtitle className="cardSubtitleText">
                      On <span className="text-info">{post.date}</span> by{" "}
                      <span className="text-info">{post.author}</span>
                    </CardSubtitle>
                  </div>
                </div>

                <Button
                  color="primary"
                  style={{
                    marginBottom: "1rem",
                    backgroundColor: "mediumslateblue",
                    color: "white",
                    border: "1px solid grey",
                    margin: "6px 0px",
                    borderRadius: "50%",
                    height: "40px",
                    width: "40px",
                  }}
                  size="sm"
                  onClick={() => {
                    handleBookmarks(post.uid, post.title, post.tags);
                    makePostRequest("https://dojoyo.pythonanywhere.com/mark", {
                      item_id: post.uid,
                      item_type:
                        bookmarks &&
                        bookmarks.find((item) => item.uid === post.uid)
                          ? "unbookmark"
                          : "bookmark",
                    });
                  }}
                >
                  {bookmarks &&
                  bookmarks.find((item) => item.uid === post.uid) ? (
                    <i className="fas fa-bookmark"></i>
                  ) : (
                    <i className="far fa-bookmark"></i>
                  )}
                </Button>
              </div>

              <div className="cardTags">
                <ul className="postTags">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <Link to={`/tag/${slugify(tag)}`}>
                        <Badge className="postTagsBadge">{tag}</Badge>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="code-block">
                <Card
                  className="inner-code-block"
                  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                ></Card>
              </div>
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
  );
};

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
