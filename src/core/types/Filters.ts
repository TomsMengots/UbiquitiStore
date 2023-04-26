export enum ActiveViewType {
  LIST = "list",
  GRID = "grid",
}

export interface IFilters {
  search: string;
  types: string[];
  view: ActiveViewType;
}
