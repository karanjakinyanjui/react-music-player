import { gql } from "apollo-boost";

export const ADD_SONG = gql`
  mutation AddSong(
    $title: String!
    $artist: String!
    $duration: Float!
    $thumbnail: String!
    $url: String!
  ) {
    insert_songs_songs_one(
      object: {
        title: $title
        artist: $artist
        duration: $duration
        thumbnail: $thumbnail
        url: $url
      }
    ) {
      id
    }
  }
`;
