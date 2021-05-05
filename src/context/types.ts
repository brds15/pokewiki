export interface DetailContextState {
  data: {
    color: string;
    captureRate: number;
    id: number;
    isBaby: boolean;
    isLegendary: boolean;
    name: string;
    happiness: number;
    habitat?: string;
  };
  changeData: (key: string, newValue: string) => void;
}
