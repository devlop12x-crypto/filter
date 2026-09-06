import type { Project } from '../models';

interface ProjectListProps {
  /** Уже отфильтрованный список — компонент ничего не отбирает сам. */
  projects: Project[];
}

/** Сетка карточек проектов. Собственного состояния не имеет. */
function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return <p className="project-list__empty">В этой категории пока нет проектов.</p>;
  }

  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li className="project-list__item" key={project.id}>
          {/* Превью декоративные: подпись дублировала бы категорию из Toolbar. */}
          <img src={project.img} alt="" loading="lazy" />
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
