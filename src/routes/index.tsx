import Dashboard from '../pages/Dashboard';
import { RouteProps } from 'react-router-dom';
import CategoryList from '../pages/category/PageList';
import GenreList from '../pages/genre/PageList';
import CategoryForm from '../pages/category/PageForm';
import GenreForm from '../pages/genre/PageForm';

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
    label: 'Categorias',
    path: '/categories',
    component: CategoryList,
    exact: true,
  },
  {
    name: 'categories.create',
    label: 'Criar Categorias',
    path: '/categories/create',
    component: CategoryForm,
    exact: true,
  },
  {
    name: 'categories.edit',
    label: 'Editar Categorias',
    path: '/categories/:id/edit',
    component: CategoryForm,
    exact: true,
  },
  {
    name: 'genres.list',
    label: 'Gêneros',
    path: '/genres',
    component: GenreList,
    exact: true,
  },
  {
    name: 'genres.create',
    label: 'Criar Gêneros',
    path: '/genres/create',
    component: GenreForm,
    exact: true,
  },
];
export default routes;