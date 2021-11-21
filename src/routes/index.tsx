import Dashboard from '../pages/Dashboard';
import { RouteProps } from 'react-router-dom';
import CategoryList from '../pages/category/PageList';
import GenreList from '../pages/genre/PageList';
import CategoryForm from '../pages/category/PageForm';

interface MyRouteProps extends RouteProps {
  name: string;
  label: string;
}

const routes: MyRouteProps[] = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    path: '/',
    component: Dashboard,
    exact: true,
  },
  {
    name: 'categories.list',
    label: 'Listar Categorias',
    path: '/categories',
    component: CategoryList,
    exact: true,
  },
  {
    name: 'genres.list',
    label: 'Listar Gêneros',
    path: '/genres',
    component: GenreList,
    exact: true,
  },
  {
    name: 'categories.create',
    label: 'Criar Categorias',
    path: '/categories/create',
    component: CategoryForm,
    exact: true,
  },
];
export default routes;