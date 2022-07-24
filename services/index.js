import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categories;
};

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: publishedAt_ASC) {
        edges {
          cursor
          node {
            createdAt
            excerpt
            slug
            title
            featuredImage {
              url
              width
              height
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.postsConnection.edges;
};