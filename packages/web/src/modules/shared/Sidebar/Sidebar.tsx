import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import React from 'react'
import { Brand, IBrand } from './Brand'

export interface ISidebar extends IBrand {
  image: any
}

const useStyles = makeStyles({
  drawerPaper: {
    border: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: 1,
    boxShadow:
      '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    width: 260,
  },
  sidebarWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: 4,
    overflowScrolling: 'touch',
  },
  background: {
    position: 'absolute',
    zIndex: 1,
    height: '100%',
    width: '100%',
    display: 'block',
    top: '0',
    left: '0',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    '&:after': {
      position: 'absolute',
      zIndex: 3,
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      background: '#000',
      opacity: 0.8,
    },
  },
})

export const Sidebar = ({ logo, logoText, image }: ISidebar) => {
  const classes = useStyles()

  return (
    <div>
      <Drawer
        variant="permanent"
        open={true}
        classes={{
          paper: classNames(classes.drawerPaper),
        }}
      >
        <Brand logo={logo} logoText={logoText} />
        <div className={classes.sidebarWrapper}>{}</div>
        {image !== undefined ? (
          <div
            className={classes.background}
            style={{ backgroundImage: 'url(' + image + ')' }}
          />
        ) : null}
      </Drawer>
    </div>
  )
}
