import { create } from "zustand";

interface scores {
  medicina: number;
  sociales: number;
  innovacion: number;
}

interface Store {
  view: string;
  setView: (value: string) => void;
  winner: string;
  setWinner: (value: string) => void;
  scores: scores;
  setScores: (obj: scores) => void;
  resetScores: () => void;
}

const zustandStore = create<Store>()((set) => ({
  view: "welcome",
  setView: (value: string) => set(() => ({ view: value })),
  winner: "",
  setWinner: (value: string) => set(() => ({ winner: value })),
  scores: {
    medicina: 0,
    sociales: 0,
    innovacion: 0,
  },
  setScores: (obj: scores) => set(() => ({ scores: obj })),
  resetScores: () =>
    set(() => ({
      scores: {
        medicina: 0,
        sociales: 0,
        innovacion: 0,
      },
    })),
}));

export default zustandStore;
