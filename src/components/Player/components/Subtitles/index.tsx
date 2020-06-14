import React, { Fragment } from 'react'
import { SubtitlesWrapper, SubtitlesText } from './styles'
import { Word } from './components/Word'

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

  const spaces = /[ \n]+/
  const words = props.sub.trim().split(spaces)

  return (
    <SubtitlesWrapper
      isFullscreen={props.isFullscreen}
      onClick={stopPropagation}
      onMouseEnter={props.pause}
      onMouseLeave={props.play}
    >
      <SubtitlesText isFullscreen={props.isFullscreen}>
        {words.map((rawWord, index) => {
          const separators = /[ !?".,\n\[\]]+/
          const letters = /[^ !?".,\n]+/

          const word = rawWord.replace(separators, '')
          const separator = rawWord.replace(letters, '')

          return (
            <Fragment key={index}>
              <Word word={word} sub={props.sub} />
              {separator}
              <span>&nbsp;</span>
            </Fragment>
          )
        })}
      </SubtitlesText>
    </SubtitlesWrapper>
  )
}
