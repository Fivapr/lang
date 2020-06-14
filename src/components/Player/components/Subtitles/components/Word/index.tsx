import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { StyledWord } from './styles'
import Popper from '@material-ui/core/Popper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { setCORS } from 'google-translate-api-browser'
const translate = setCORS('http://cors-anywhere.herokuapp.com/')

interface Props {
  sub: string
  word: string
  context?: string
}

const useStyles = makeStyles((theme) => ({
  paper: {
    minHeight: 80,
    minWidth: 460,

    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(1),

    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

export const Word = (props: Props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null)
  const [translation, setTranslation] = useState('')
  const [phrase, setPhrase] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(anchorEl ? null : e.currentTarget)
    translate(props.word, { to: 'ru' })
      .then((res: any) => {
        setTranslation(res.text)
      })
      .catch((err) => {
        console.error(err)
      })
    translate(props.sub, { to: 'ru' })
      .then((res: any) => {
        setPhrase(res.text)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const open = Boolean(anchorEl)

  const handleClickAway = () => setAnchorEl(null)

  return (
    <>
      <StyledWord onClick={handleClick}>{props.word}</StyledWord>
      <Popper open={open} anchorEl={anchorEl} placement="top">
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.paper}>
            <div>
              {props.word} - {translation}
            </div>
            <div>{phrase}</div>
          </div>
        </ClickAwayListener>
      </Popper>
    </>
  )
}
