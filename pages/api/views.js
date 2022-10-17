import { GraphQLClient, gql } from "graphql-request";

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a default function for API route to work

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default async function views(req, res) {
  const graphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
  });

  const query = gql`
    mutation UpdatePost($slug: String!, $newViews: Int!) {
      updatePost(where: { slug: $slug }, data: { views: $newViews }) {
        id
        slug
        views
      }
      publishPost(where: { slug: $slug }) {
        views
      }
    }
  `;

  const result = await graphQLClient.request(query, {
        slug: req.body.slug,
        newViews: req.body.newViews,
  });

  return res.status(200).send(result);
}
