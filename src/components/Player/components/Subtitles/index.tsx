import React from 'react'
import { SubtitlesWrapper, SubtitlesText } from './styles'

interface Props {
  sub: string
  play: () => void
  pause: () => void
  isFullscreen: boolean
}

export const Subtitles = (props: Props) => {
  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  // const words = props.sub.split(' ')

  return (
    <SubtitlesWrapper
      isFullscreen={props.isFullscreen}
      onClick={stopPropagation}
      onMouseEnter={props.pause}
      onMouseLeave={props.play}
    >
      <SubtitlesText isFullscreen={props.isFullscreen}>
        {props.sub}
      </SubtitlesText>
    </SubtitlesWrapper>
  )
}

// {words.map((word, index) => (
//   <Fragment key={index}>
//     {word}
//     <span>&nbsp;</span>
//   </Fragment>
// ))}
