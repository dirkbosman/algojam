import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap";
import Img from "gatsby-image";
import { slugify } from "../utils/utilityFunctions";

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter;

  return (
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

          {/* Use alternative syntax for dangerouslySetInnerHTML ???? */}
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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
  );
};

// query blogPostBySlug($slug: String!, $imageUrl: String!) {
export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
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
