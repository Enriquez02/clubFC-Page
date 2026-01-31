// LLAMADO A LA API DE PARTIDOS

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useMatches() {
  return useQuery({
    queryKey: ['matches'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:7000/matches');
      return res.data;
    },
  });
}
