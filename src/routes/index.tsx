import Dashboard from '../pages/Dashboard';
import { RouteProps } from 'react-router-dom';
import CategoryList from '../pages/category/List';

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
];
export default routes;
// const Routes = () => {
//   return (
//     <>
//       <Route path="/" exact component={Home} />
//       <Route path="/about" component={About} />
//       <Route path="/users" component={Users} />
//     </>
//   );
// }