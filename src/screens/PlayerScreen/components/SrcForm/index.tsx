import React, { useState } from 'react'
import { SrcInput } from './components/SrcInput'
import { Button } from '@material-ui/core'
import { useScreenStore } from 'screens/PlayerScreen/hooks'

export const SrcForm = () => {
  const [videoSrc, setvideoSrc] = useState('')
  const [subtitlesSrc, setsubtitlesSrc] = useState('')
  const screenStore = useScreenStore()

  const handleWatchButtonClick = () => {
    screenStore.videoSrc = videoSrc
    screenStore.subtitlesSrc = subtitlesSrc
  }

  return (
    <>
      <SrcInput
        value={videoSrc}
        onChange={setvideoSrc}
        text={'Video'}
        buttonText={'Open local file'}
      />
      <SrcInput
        value={subtitlesSrc}
        onChange={setsubtitlesSrc}
        text={'Subtitles file'}
        buttonText={'Load'}
      />
      <br />
      <br />
      <Button variant="contained" onClick={handleWatchButtonClick}>
        Watch
      </Button>
    </>
  )
}
