import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useObserver } from 'mobx-react'

import { Player } from 'components/Player'
import { SrcForm } from './components/SrcForm'
import { useScreenStore } from './hooks'

const useStyles = makeStyles(() => ({
  container: {
    width: 960,
    margin: 'auto',
  },
}))

export const PlayerScreen = () => {
  const classes = useStyles()
  const screenStore = useScreenStore()

  return useObserver(() => (
    <div className={classes.container}>
      {screenStore.videoSrc && (
        <Player
          videoSrc={screenStore.videoSrc}
          subtitlesSrc={screenStore.subtitlesSrc}
        />
      )}
      <SrcForm />
    </div>
  ))
}
