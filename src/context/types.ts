export interface DetailObject {
  color: string;
  captureRate: number;
  id: number;
  isBaby: boolean;
  isLegendary: boolean;
  name: string;
  happiness: number;
  habitat?: string;
}

export interface DetailContextState {
  data: DetailObject;
  changeData: (key: string, newValue: string) => void;
  changeAll: (detailObj: DetailObject) => void;
}
