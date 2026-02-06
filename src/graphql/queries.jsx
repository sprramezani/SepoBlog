import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      coverPhoto {
        url
      }
      title
      slug
      id
      content {
        text
      }
    }
  }
`;

const GET_BLOG_INFO = gql`
  query getBlogInfo($slug: String!) {
    post(where: { slug: $slug }) {
      title
      coverPhoto {
        url
      }
      author {
        ... on Author {
          name
          field
          slug
          avatar {
            url
          }
        }
      }
      content {
        html
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      avatar {
        url
      }
      name
      id
      slug
      field
      description {
        text
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      avatar {
        url
      }
      field
      id
      name
      description {
        text
      }
      post {
        coverPhoto {
          url
        }
        id
        slug
        content {
          text
        }
        title
      }
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_BLOG_INFO };
