/** Один проект в портфолио. */
export interface Project {
  /** Стабильный идентификатор — нужен как key при рендере списка. */
  id: number;
  img: string;
  category: string;
}
