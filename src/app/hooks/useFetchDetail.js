import axios from "axios";
import { useQuery } from "react-query";

const API_URL =
  "https://apisf.p2pcdn.xyz/api/v1/unique-tournament/17/season/41886/statistics";

const fetchTournamentStatistics = (page,fields,filter,accumulation) => {
  return axios.get(
    `${API_URL}?limit=20&order=rating&accumulation=${accumulation}&offset=${
      20 * (page - 1)
    }&fields=${fields}&filters=${filter}`
  );
};

const useTournamentStatisticsDetail = (page,fields, filter,accumulation) => {
  return useQuery({
    queryKey: ["tournamentStatisticsDetail", page,fields, filter,accumulation],
    queryFn: () => fetchTournamentStatistics(page,fields, filter,accumulation),
  }); // Wrap the fetch call in a function
};

export default useTournamentStatisticsDetail;
