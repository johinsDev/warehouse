import map from "ramda/es/map";
import * as React from "react";
import { Route, Switch } from "react-router-dom";
// @material-ui/icons
import useReactRouter from 'use-react-router';

const rootRoutes = [
  {
    path: "",
    name: "Root",
    layout: "/",
    component: () => <h1>Probando</h1>
  },
];

interface IRoute {
  path: string
  name: string
  icon?: React.ReactNode
  component?: React.ComponentType<any>
  layout: string
}

const switchRoutes = (
  <Switch>
    {map((route: IRoute) => (
      <Route
        path={`${route.layout}${route.path}`}
        component={route.component}
        key={route.name}
        exact={true}
      />
    ), rootRoutes)}
  </Switch>
);


export default function Root() {
  const { location: { pathname, search } } = useReactRouter();

  React.useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return (
    <div>
      {switchRoutes}
    </div>
  )
}
