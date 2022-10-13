import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;



export const getHomeData = async () => {
  const query = gql`
  query getHomeData() {
  postsConnection(where: {featuredPost: true}, orderBy: createdAt_ASC) {
    edges {
      node {
        categories {
          name
          slug
        }
        excerpt
        featuredImage {
          url
          width
          height
        }
        title
        slug
        createdAt
      }
      cursor
    }
  }
  editos {
    title
    createdAt
    featuredImage {
      url
      height
      width
    }
    content {
      raw
    }
  }
}

  `;
  const result = await request(graphqlAPI, query);
  return result
}

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

export const getPostsCount = async() => {
  const query = gql`
    query getPostsCount {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query)
  return result.postsConnection.aggregate.count;
}


export const getPosts = async () => {
  const query = gql`
    query getPosts() {
      postsConnection(orderBy: createdAt_ASC) {
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




//  expérimental
export const getPostsByPage = async (limit, offset) => {
  const query = gql`
    query GetPostsByPage($limit: Int!, $offset: Int!) {
      postsConnection(orderBy: createdAt_ASC, first: $limit, skip: $offset) {
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
        aggregate {
          count
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
          endCursor
          startCursor
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, {limit, offset});

  return result.postsConnection;
};


export const getPostDetails = async (slug) => {
  const query = gql`
    query getPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        categories {
          name
          slug
        }
        title
        slug
        publishedAt
        
        author {
          name
          photo {
            url
          }
          bio
        }
        content {
          raw
        }
        featuredImage {
          url
          width
          height
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
    return result.post
}

export const submitComment = async (obj) => {
  const result = await fetch("/api/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};


export const getPostsByCategory = async (slug) => {
  const query = gql`
    query getPostsByCategory($slug: String!) {
      postsConnection(orderBy: createdAt_ASC, where: {categories_some: {slug: $slug}}) {
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

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getPostsByCategoryByPage = async (slug, limit, offset) => {
  const query = gql`
    query getPostsByCategoryByPage(
      $slug: String!
      $limit: Int!
      $offset: Int!
    ) {
      postsConnection(
        orderBy: createdAt_ASC
        first: $limit
        skip: $offset
        where: { categories_some: { slug: $slug } }
      ) {
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
        aggregate {
          count
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
          endCursor
          startCursor
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, limit, offset });

  return result.postsConnection;
};


export const getCategoryName = async (slug) => {
  const query = gql`
    query getCategoryName($slug: String!) {
      categories(where: { slug: $slug }) {
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.categories[0].name
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetSimilarPosts($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
      ) {
        featuredImage {
          url
          width
          height
        }
        slug
        title
        createdAt
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });
  return result.posts
}


export const getBlogTitle = async () => {
  const query = gql`
    query GetBlogTitle {
      blogTitles {
        name
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.blogTitles[0].name;
};

export const getPostShared = async (slug) => {
  const query = gql`
    query GetPostShared($slug: String!) {
      post(where: { slug: $slug }) {
        title
        slug
        excerpt
        featuredImage {
          url(
            transformation: {
              image: { resize: { width: 640, height: 480, fit: clip } }
            }
          )
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};

export const getNumberOfPosts = async() =>{
const query = gql`
query GetNumberOfPosts {
  postsConnection {
    aggregate {
      count
    }
  }
}`
const result = await request(graphqlAPI, query)
return result.postsConnection.aggregate.count
}

export const getNumberOfPostsByCategory = async (category) => {
  const query = gql`
    query GetNumberOfPostsByCategory($category: String!) {
      postsConnection(
        orderBy: createdAt_ASC
        where: { categories_some: { slug: $category } }
      ) {
        aggregate {
          count
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, {category});
  return result.postsConnection.aggregate.count;
};