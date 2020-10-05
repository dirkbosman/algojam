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
          // .imag // Get all tags
          // .img // Get all tags
          let tags = []
          _.each(posts, edge => {
            if (_.get(edge, 'node.frontmatter.tags')) {
              tags = tags.concat(edge.node.frontmatter.tags)
            }
          })

//////////////////////////////
////  Add Pagination Here ////
//////////////////////////////


//   // Get all tags
//   let tags = []
//   _.each(posts, edge => {
//     if (_.get(edge, 'node.frontmatter.tags')) {
//       tags = tags.concat(edge.node.frontmatter.tags)
//     }
//   })

//   let tagPostCounts = {} // { tutorial: 2, design: 1}
//   tags.forEach(tag => {
//     // Or 0 cause it might not exist yet
//     tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
//   })

//   // Remove duplicates
//   tags = _.uniq(tags)

//   // Tags page (all tags)
//   createPage({
//     path: '/tags',
//     component: templates.tagsPage,
//     context: {
//       tags,
//       tagPostCounts,
//     },
//   })

//   // Tag posts pages
//   tags.forEach(tag => {
//     createPage({
//       path: `/tag/${_.kebabCase(tag)}`,
//       component: templates.tag,
//       context: {
//         tag,
//       },
//     })
//   })

//   // Create author posts pages
//   authors.forEach(author => {
//     createPage({
//       path: `/author/${slugify(author.name)}`,
//       component: templates.authorPosts,
//       context: {
//         authorName: author.name,
//         imageUrl: author.imageUrl,
//       },
//     })
//   })
// }