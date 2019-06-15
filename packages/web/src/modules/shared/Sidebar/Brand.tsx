import { makeStyles } from '@material-ui/styles'
import React from 'react'

const whiteColor = '#FFF'

const useStyles = makeStyles({
  logo: {
    position: 'relative',
    padding: '15px 15px',
    zIndex: 4,
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'rgba(180, 180, 180, 0.3)',
    },
  },
  logoLink: {
    textTransform: 'uppercase',
    padding: '5px 0',
    display: 'block',
    fontSize: '18px',
    textAlign: 'left',
    fontWeight: 400,
    lineHeight: '30px',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    '&,&:hover': {
      color: whiteColor,
    },
  },
  logoImage: {
    width: '30px',
    display: 'inline-block',
    maxHeight: '30px',
    marginLeft: '10px',
    marginRight: '15px',
  },
  img: {
    width: '35px',
    top: '22px',
    position: 'absolute',
    verticalAlign: 'middle',
    border: '0',
  },
})

export interface IBrand {
  logo: string
  logoText: string
}

export function Brand({ logo, logoText }: IBrand) {
  const classes = useStyles()

  return (
    <div className={classes.logo}>
      <a href="https://www.frubana.com/" className={classes.logoLink}>
        <div className={classes.logoImage}>
          <img src={logo} alt="logo" className={classes.img} />
        </div>
        {logoText}
      </a>
    </div>
  )
}
