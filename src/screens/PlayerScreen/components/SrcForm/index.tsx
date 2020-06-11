import React, { useState } from 'react'
import { SrcInput } from './components/SrcInput'
import { Button } from '@material-ui/core'

interface Props {
  setState: (arg: { videoSrc: string; subtitlesSrc: string }) => void
}

export const SrcForm = (props: Props) => {
  const [videoSrc, setvideoSrc] = useState('')
  const [subtitlesSrc, setsubtitlesSrc] = useState('')

  const handleWatchButtonClick = () => {
    props.setState({ videoSrc, subtitlesSrc })
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
