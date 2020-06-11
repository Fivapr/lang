import styled from '@emotion/styled'

interface Fullscreen {
  isFullscreen: boolean
}

// width: ${(props) => (props.isFullscreen ? '100vw' : '640px')};
// height: ${(props) => (props.isFullscreen ? '100vh' : '360px')};
export const PlayerWrapper = styled.div<Fullscreen>`
  cursor: pointer;
  &:fullscreen {
    width: 100vw;
    height: 100vh;
  }
  position: relative;
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

export const FullscreenIcon = styled.img<Fullscreen>`
  cursor: pointer;
  max-width: ${(props) => (props.isFullscreen ? '64px' : '32px')};
  max-height: ${(props) => (props.isFullscreen ? '64px' : '32px')};
  position: absolute;
  top: ${(props) => (props.isFullscreen ? '64px' : '8px')};
  right: ${(props) => (props.isFullscreen ? '16px' : '8px')};
  z-index: 11;
`

export const Video = styled.video<Fullscreen>`
  width: ${(props) => (props.isFullscreen ? '100vw' : '640px')};
  height: ${(props) => (props.isFullscreen ? '100vh' : '360px')};
`
