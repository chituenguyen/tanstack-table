// src/hooks/useTournamentStatistics.js
import { useQuery } from 'react-query';

const API_URL = 'https://apisf.p2pcdn.xyz/api/v1/unique-tournament/17/season/41886/statistics';

const useTournamentStatistics = () => {
  return useQuery('tournamentStatistics', async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch tournament statistics.');
    }
    return response.json();
  });
};

export default useTournamentStatistics;
