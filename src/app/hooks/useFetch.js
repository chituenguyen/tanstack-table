import axios from "axios";
import { useQuery } from "react-query";


const API_URL = "https://apisf.p2pcdn.xyz/api/v1/unique-tournament/17/season/41886/statistics"

const fetchTournamentStatistics = (page,orderGoal) => {
  return axios.get(
    `${API_URL}?limit=20&order=${orderGoal}&accumulation=total&group=attack&offset=${
      20 * (page - 1)
    }`
  );
};

const useTournamentStatistics = (page,orderGoal) => {
  return useQuery({
    queryKey:['tournamentStatistics',page,orderGoal],
    queryFn:()=>fetchTournamentStatistics(page,orderGoal)
  }); // Wrap the fetch call in a function
};

export default useTournamentStatistics;
