import { Component } from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { ALL_FILTER, filters, projects } from '../data/projects';
import type { Project } from '../models';

interface PortfolioState {
  /**
   * В состоянии лежит только активный фильтр — единственное, что меняется
   * по действию пользователя. Список проектов неизменяем, поэтому копировать
   * его в state незачем: это создало бы второй источник правды.
   */
  selected: string;
}

class Portfolio extends Component<Record<string, never>, PortfolioState> {
  state: PortfolioState = {
    selected: ALL_FILTER,
  };

  /** Стрелочная функция — уходит в Toolbar как callback, this должен быть связан. */
  handleSelectFilter = (filter: string) => {
    this.setState({ selected: filter });
  };

  /** Отфильтрованный список вычисляется при рендере, а не хранится в state. */
  getVisibleProjects(): Project[] {
    const { selected } = this.state;

    if (selected === ALL_FILTER) {
      return projects;
    }

    return projects.filter((project) => project.category === selected);
  }

  render() {
    const { selected } = this.state;

    return (
      <main className="portfolio">
        <h1 className="visually-hidden">Портфолио с фильтрами</h1>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={this.getVisibleProjects()} />
      </main>
    );
  }
}

export default Portfolio;
