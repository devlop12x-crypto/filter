import type { Project } from '../models';

const IMG_BASE =
  'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img';

/** Набор данных из задания. id добавлен, потому что img в наборе повторяется. */
export const projects: Project[] = [
  { id: 1, img: `${IMG_BASE}/mon.jpg`, category: 'Business Cards' },
  { id: 2, img: `${IMG_BASE}/200.jpg`, category: 'Websites' },
  { id: 3, img: `${IMG_BASE}/emi_haze.jpg`, category: 'Websites' },
  { id: 4, img: `${IMG_BASE}/codystretch.jpg`, category: 'Websites' },
  { id: 5, img: `${IMG_BASE}/Triangle_003.jpg`, category: 'Business Cards' },
  { id: 6, img: `${IMG_BASE}/place200x290.png`, category: 'Websites' },
  { id: 7, img: `${IMG_BASE}/200.jpg`, category: 'Websites' },
  { id: 8, img: `${IMG_BASE}/transmission.jpg`, category: 'Business Cards' },
  { id: 9, img: `${IMG_BASE}/place200x290_1.png`, category: 'Websites' },
  { id: 10, img: `${IMG_BASE}/place200x290_2.png`, category: 'Flayers' },
  { id: 11, img: `${IMG_BASE}/the_ninetys_brand.jpg`, category: 'Websites' },
  { id: 12, img: `${IMG_BASE}/dia.jpg`, category: 'Business Cards' },
  { id: 13, img: `${IMG_BASE}/Triangle_350x197.jpg`, category: 'Websites' },
  { id: 14, img: `${IMG_BASE}/emi_haze.jpg`, category: 'Websites' },
  { id: 15, img: `${IMG_BASE}/transmission.jpg`, category: 'Business Cards' },
  { id: 16, img: `${IMG_BASE}/Triangle_350x197_1.jpg`, category: 'Websites' },
  { id: 17, img: `${IMG_BASE}/place200x290_3.png`, category: 'Flayers' },
];

/** Фильтр, который показывает все проекты. Не является категорией. */
export const ALL_FILTER = 'All';

/**
 * Порядок кнопок задан явно — он взят из макета и не должен зависеть
 * от того, проект какой категории окажется в данных первым.
 */
const CATEGORY_ORDER = ['Websites', 'Flayers', 'Business Cards'];

/** Категории из макета, реально присутствующие в данных, плюс «All». */
export const filters: string[] = [
  ALL_FILTER,
  ...CATEGORY_ORDER.filter((category) =>
    projects.some((project) => project.category === category),
  ),
];
