import React, { Fragment } from 'react'
import { SubtitlesWrapper, SubtitlesText } from './styles'
import { Word } from './components/Word'

interface Props {
  sub?: string
  play: () => void
  pause: () => void
  isFullscreen: boolean
}

export const Subtitles = (props: Props) => {
  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  if (!props.sub) {
    return null
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
            <Word word={word} context={props.sub} />
            <span>&nbsp;</span>
          </Fragment>
        ))}
      </SubtitlesText>
    </SubtitlesWrapper>
  )
}
