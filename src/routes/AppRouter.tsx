import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '.';

const AppRouter: FC = () => {
  return (
    <Switch>
      {
        routes.map((route, key) => {
          return <Route
            key={key}
            path={route.path}
            component={route.component}
            exact={route.exact === true}
          />
        })
      }
    </Switch>
  );
};

export default AppRouter;