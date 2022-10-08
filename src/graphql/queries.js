import { gql } from "apollo-boost";

export const GET_SONGS = gql`
  query GetSongs {
    songs_songs(order_by: { created_at: desc }) {
      artist
      created_at
      duration
      id
      thumbnail
      title
      url
    }
  }
`;

export const GET_SONGS_SUB = gql`
  subscription GetSongs {
    songs_songs(order_by: { created_at: desc }) {
      artist
      created_at
      duration
      id
      thumbnail
      title
      url
    }
  }
`;
