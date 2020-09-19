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
                title
                date(formatString: "YYYY-MM-DD ")
                author
                path
                audio_url
                tags
              }
              excerpt
              html
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark.edges;
};
