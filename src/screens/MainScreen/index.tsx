import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Player } from 'components/Player'
import subtitlesSrc from './files/shrek.vtt'
import videoSrc from './files/shrek.webm'
import { Header } from 'components/Header'

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
    padding: 24,
    margin: 'auto',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    textAlign: 'center',
  },
}))

export const MainScreen = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Typography variant="h2">lang-beta.now.sh</Typography>
        <br />
        <Typography variant="h6">
          это онлайн-плеер для просмотра фильмов на английском языке. Ключевая
          особенность плеера — Перевод субтитров по клику мыши!
        </Typography>
        <br />
        <Typography variant="h6">
          Пример. Кликните на любое слово в субтитрах, чтобы увидеть перевод.
        </Typography>
        <br />
        <Player videoSrc={videoSrc} subtitlesSrc={subtitlesSrc} />
      </div>
    </div>
  )
}
