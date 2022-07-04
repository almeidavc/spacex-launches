import { gql } from "@apollo/client";

const GET_LAUNCHES = gql`
  query GetLaunches($missionName: String!, $limit: Int = 5) {
    launches(find: { mission_name: $missionName }, limit: $limit) {
      id
      mission_name
      launch_date_local
      launch_success
      launch_site {
        site_name
      }
    }
  }
`;

export default GET_LAUNCHES;
