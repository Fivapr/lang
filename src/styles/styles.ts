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

  html {
    font-size: 10px;
  }

  body {
    min-width: 32rem;
    font-family: 'Inter', 'Arial', sans-serif;
    font-feature-settings: 'tnum', 'ss01', 'cv05', 'cv08';
    font-size: 1.4rem;
    color: #fff;
    background-color: #1d2328;
  }

  a,
  button {
    transition: color 0.2s, background-color 0.2s;
  }
`
