interface ToolbarProps {
  /** Список подписей кнопок, включая «All». */
  filters: string[];
  /** Активный фильтр — приходит из состояния Portfolio. */
  selected: string;
  /** Callback наверх: вызывается с подписью нажатой кнопки. */
  onSelectFilter: (filter: string) => void;
}

/** Панель фильтров. Собственного состояния не имеет. */
function Toolbar({ filters, selected, onSelectFilter }: ToolbarProps) {
  return (
    <div className="toolbar" role="group" aria-label="Фильтр проектов по категориям">
      {filters.map((filter) => {
        const isActive = filter === selected;

        return (
          <button
            key={filter}
            type="button"
            className={`toolbar__btn${isActive ? ' toolbar__btn_active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onSelectFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default Toolbar;
