import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Player } from 'components/Player'
import { SrcForm } from './components/SrcForm'
import { Header } from 'components/Header'

const useStyles = makeStyles(() => ({
  container: {
    width: 960,
    margin: 'auto',
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
          <Player videoSrc={state.videoSrc} subtitlesSrc={state.subtitlesSrc} />
        )}
        <SrcForm setState={setState} />
      </div>
    </div>
  )
}
