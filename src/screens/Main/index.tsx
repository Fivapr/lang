import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

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

export const MainScreen = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.container}>
        <Typography variant="h2">lang-beta.now.sh</Typography>
        <Typography variant="h6">
          это онлайн-плеер для просмотра фильмов на английском языке. Ключевая
          особенность плеера — Перевод субтитров по клику мыши!
        </Typography>
        <br />
        <Typography variant="h6">
          Пример. Кликните на любое слово в субтитрах, чтобы увидеть перевод.
        </Typography>
      </div>
    </>
  )
}
