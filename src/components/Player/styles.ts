import styled from '@emotion/styled'

interface Fullscreen {
  isFullscreen: boolean
}
export const PlayerWrapper = styled.div`
  cursor: pointer;
  width: 853px;
  height: 480px;
  &:fullscreen {
    width: 100vw;
    height: 100vh;
  }
  position: relative;
  background-color: black;
`

export const PlayIcon = styled.img`
  cursor: pointer;
  max-width: 200px;
  max-height: 200px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
`

export const FullscreenIcon = styled.img`
  cursor: pointer;
  max-width: 32px;
  max-height: 32px;
  position: absolute;
  top: 8px;
  right: 8px;

  &:fullscreen {
    max-width: 64px;
    max-height: 64px;
    top: 64px;
    right: 16px;
  }
  z-index: 11;
`

export const Video = styled.video<Fullscreen>`
  width: 100%;
  height: 100%;
`
