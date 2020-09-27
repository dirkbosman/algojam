import { graphql, useStaticQuery } from "gatsby";

export const useJamsData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                uid
                title
                date(formatString: "YYYY-MM-DD ")
                author
                audio_url
                tags
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                      ...GatsbyImageSharpFluidLimitPresentationSize
                    }
                  }
                }
              }
              fields {
                slug
              }
              html
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark.edges;
};
