import { useQuery } from "@apollo/client";
import GET_LAUNCHES from "../utils/fetchLaunches";

interface Props {
  searchQuery: string;
  numberOfResults: number;
}

interface Launch {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_success: boolean;
  launch_site: {
    site_name: string;
  };
}

const ResultsCard = ({ searchQuery, numberOfResults }: Props): JSX.Element => {
  const { loading, error, data } = useQuery(GET_LAUNCHES, {
    variables: {
      missionName: searchQuery,
      limit: numberOfResults,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const resultsItems = data.launches.map((l: Launch) => (
    <li key={l.id}>
      <p>{l.mission_name}</p>
      <p>{l.launch_date_local}</p>
      <p>{l.launch_success ? "Success!" : ":("}</p>
      <p>{l.launch_site.site_name}</p>
    </li>
  ));

  return <ul>{resultsItems}</ul>;
};

export default ResultsCard;
