import React, { Fragment } from 'react'
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

  const words = props.sub.split(' ')

  return (
    <SubtitlesWrapper
      isFullscreen={props.isFullscreen}
      onClick={stopPropagation}
      onMouseEnter={props.pause}
      onMouseLeave={props.play}
    >
      <SubtitlesText isFullscreen={props.isFullscreen}>
        {words.map((word, index) => (
          <Fragment key={index}>
            {props.sub}
            <span>&nbsp;</span>
          </Fragment>
        ))}
      </SubtitlesText>
    </SubtitlesWrapper>
  )
}
