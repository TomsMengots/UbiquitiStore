export enum ActiveViewType {
  LIST,
  GRID,
}

export interface IFilters {
  search: string;
  types: string[];
  view: ActiveViewType;
}
