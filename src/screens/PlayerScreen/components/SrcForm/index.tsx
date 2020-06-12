import React, { useState } from 'react'
import { SrcInput } from './components/SrcInput'
import { Button } from '@material-ui/core'
import defaultVideoSrc from './testFiles/adventureTime.mp4'
import defaultSubtitlesSrc from './testFiles/adventureTime.vtt'
import { makeStyles } from '@material-ui/styles'

interface Props {
  setState: (arg: { videoSrc: string; subtitlesSrc: string }) => void
}

const useStyles = makeStyles(() => ({
  submitButton: {
    width: 240,
    height: 56,
  },
}))

export const SrcForm = (props: Props) => {
  const [videoSrc, setvideoSrc] = useState(defaultVideoSrc)
  const [subtitlesSrc, setsubtitlesSrc] = useState(defaultSubtitlesSrc)

  const classes = useStyles()

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
      <Button
        variant="contained"
        className={classes.submitButton}
        onClick={handleWatchButtonClick}
      >
        Watch
      </Button>
    </>
  )
}
