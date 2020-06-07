import { css } from '@emotion/core'

export const styles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    min-width: 32rem;
    font-feature-settings: 'tnum', 'ss01', 'cv05', 'cv08';
    font-size: 1.4rem;
    color: #000000;
    background-color: #ffffff;
  }

  a,
  button {
    transition: color 0.2s, background-color 0.2s;
  }
`
