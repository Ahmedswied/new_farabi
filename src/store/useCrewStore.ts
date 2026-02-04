import { create } from 'zustand';
import { Crew, CrewRequest } from '@/lib/firebase/services';

interface CrewState {
  crews: Crew[];
  requests: CrewRequest[];
  setCrews: (crews: Crew[]) => void;
  setRequests: (requests: CrewRequest[]) => void;
  addCrew: (crew: Crew) => void;
  removeCrew: (id: string) => void;
  addCrewRequest: (request: Omit<CrewRequest, 'id' | 'createdAt'>) => void;
  updateRequest: (id: string, request: Partial<CrewRequest>) => void;
  updateCrew: (id: string, crew: Partial<Crew>) => void;
  deleteCrew: (id: string) => void;
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
  addCrewRequest: (request) => set((state) => ({ requests: [...state.requests, request as CrewRequest] })),
  updateRequest: (id, request) => set((state) => ({
    requests: state.requests.map(r => r.id === id ? { ...r, ...request } : r)
  })),
  updateCrew: (id, crew) => set((state) => ({
    crews: state.crews.map(c => c.id === id ? { ...c, ...crew } : c)
  })),
  deleteCrew: (id) => set((state) => ({
    crews: state.crews.filter((c) => c.id !== id),
  })),
}));
