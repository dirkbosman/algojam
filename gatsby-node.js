const path = require("path");
const { slugify } = require("./src/utils/utilityFunctions");
const authors = require("./src/utils/authors");
// const _ = require('lodash')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    // const slugFromTitle = slugify(node.frontmatter.title);
    const slugFromUid = slugify(node.frontmatter.uid);
    createNodeField({
      node,
      name: "slug",
      value: slugFromUid,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // Page templates
  const templates = {
    post: path.resolve("src/templates/single-post.js"),
    // postList: path.resolve('src/templates/post-list.js'),
    // tag: path.resolve("src/templates/tag-posts.js"),
    // tagsPage: path.resolve("src/templates/tags-page.js"),
    // authorPosts: path.resolve("src/templates/author-posts.js"),
  };

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (res.errors) return Promise.reject(res.errors);

  // Extracting all posts from res
  const posts = res.data.allMarkdownRemark.edges;

  // Create single post pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: templates.post,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
        // Find author imageUrl from author array and pass it to template
        imageUrl: authors.find((x) => x.name === node.frontmatter.author)
          .imageUrl,
      },
    });
  });
};
