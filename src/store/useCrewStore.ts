import { create } from 'zustand';
import { Crew, CrewRequest } from '@/lib/firebase/services';

interface CrewState {
  crews: Crew[];
  requests: CrewRequest[];
  setCrews: (crews: Crew[]) => void;
  setRequests: (requests: CrewRequest[]) => void;
  addCrew: (crew: Crew) => void;
  removeCrew: (id: string) => void;
}

export const useCrewStore = create<CrewState>((set) => ({
  crews: [],
  requests: [],
  setCrews: (crews) => set({ crews }),
  setRequests: (requests) => set({ requests }),
  addCrew: (crew) => set((state) => ({ crews: [...state.crews, crew] })),
  removeCrew: (id) =>
    set((state) => ({
      crews: state.crews.filter((c) => c.id !== id),
    })),
}));
