import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: '64px',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    cursor: 'pointer',
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  container: {
    width: 960,
    margin: 'auto',
  },
}))

export const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const linkToMain = () => history.push('/')
  const linkToPlayer = () => history.push('/player')

  return (
    <AppBar position="static">
      <Toolbar className={classes.container}>
        <div className={classes.link} onClick={linkToMain}>
          <Typography variant="h6">Lang-beta</Typography>
        </div>
        <div className={classes.link}>
          <Typography variant="h6" onClick={linkToPlayer}>
            Player
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}
