import React from 'react'
import { Global } from '@emotion/core'
import emotionNormalize from 'emotion-normalize'
import { styles } from './styles'

export function GlobalStyles() {
  return <Global styles={[emotionNormalize, styles]} />
}
