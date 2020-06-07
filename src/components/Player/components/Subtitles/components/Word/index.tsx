import React from 'react'
import { StyledWord } from './styles'
import { addWord } from '../../../../../../services/lingualeo'

interface Props {
  word: string
  context?: string
}

export const Word = (props: Props) => {
  // const notEnglishChars = /[^a-zA-Z0-9 !?'"-.]+/
  const lettersOnly = /[^a-zA-Z]+/

  return (
    <StyledWord
      onClick={() => {
        addWord(props.word.replace(lettersOnly, ''))
      }}
    >
      {props.word}
    </StyledWord>
  )
}
