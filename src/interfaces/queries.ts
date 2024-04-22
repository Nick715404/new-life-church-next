import { ILastSermon } from "./last-sermons"

export interface IQueryFromStrapi<T> {
  data: IDataFromStrapi<T>[],
  meta: {
    pagination: {
      page: number
      pageCount: number
      pageSize: number
      total: number
    }
  }
}

export interface IDataFromStrapi<I> {
  id: number;
  attributes: I;
}