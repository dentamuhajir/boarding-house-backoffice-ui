export interface Paginated<T> {
  totalItems: number
  currentPage: number
  totalPages: number
  users: T
}