import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Player } from 'components/Player'
import { SrcForm } from './components/SrcForm'
import { Header } from 'components/Header'

const useStyles = makeStyles(() => ({
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

export const PlayerScreen = () => {
  const classes = useStyles()
  const [state, setState] = useState({ videoSrc: '', subtitlesSrc: '' })

  return (
    <div>
      <Header />
      <div className={classes.container}>
        {state.videoSrc && (
          <>
            <Player
              videoSrc={state.videoSrc}
              subtitlesSrc={state.subtitlesSrc}
            />
            <br />
          </>
        )}
        <SrcForm setState={setState} />
      </div>
    </div>
  )
}
