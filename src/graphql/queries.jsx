import { gql } from "@apollo/client";

const GET_BLOG_INFO = gql`
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
  author(where: {slug: $slug}) {
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
}`;

export { GET_BLOG_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO };
