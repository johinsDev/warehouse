import { makeStyles } from '@material-ui/styles'
import map from 'ramda/es/map'
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
// @material-ui/icons
import useReactRouter from 'use-react-router'

import ListOrderConnector from '../modules/admin/orders/list/ListOrdersConnector'
import ShowOrdersConnector from '../modules/admin/orders/show/ShowOrdersConnector'

const adminRoutes = [
  {
    path: '/orders',
    name: 'Root',
    layout: '/admin',
    component: ListOrderConnector,
  },
  {
    path: '/orders/:id',
    name: 'Root',
    layout: '/admin',
    component: ShowOrdersConnector,
  },
]

interface IRoute {
  path: string
  name: string
  icon?: React.ReactNode
  component?: React.ComponentType<any>
  layout: string
}

const switchRoutes = (
  <Switch>
    {map(
      (route: IRoute) => (
        <Route
          path={`${route.layout}${route.path}`}
          component={route.component}
          key={route.name}
          exact={true}
        />
      ),
      adminRoutes
    )}
  </Switch>
)

const useStyles = makeStyles({
  root: {
    top: 0,
    height: '100vh',
    position: 'relative',
  },
})

export default function Admin() {
  const {
    location: { pathname, search },
  } = useReactRouter()

  React.useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [pathname, search])

  const classes = useStyles()

  return <div className={classes.root}>{switchRoutes}</div>
}
