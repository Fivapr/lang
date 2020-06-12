import React from 'react'
import { StyledWord } from './styles'
import { useLingualeoApi } from 'hooks/useLingualeoApi'

interface Props {
  word: string
  context?: string
}

export const Word = (props: Props) => {
  // const notEnglishChars = /[^a-zA-Z0-9 !?'"-.]+/
  const lettersOnly = /[^a-zA-Z]+/
  const lingualeoApi = useLingualeoApi()

  return (
    <StyledWord
      onClick={() => {
        lingualeoApi.addWord(props.word.replace(lettersOnly, ''))
      }}
    >
      {props.word}
    </StyledWord>
  )
}
