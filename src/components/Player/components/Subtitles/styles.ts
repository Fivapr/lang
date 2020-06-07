import styled from '@emotion/styled'

interface Fullscreen {
  isFullscreen: boolean
}

export const SubtitlesWrapper = styled.div<Fullscreen>`
  position: absolute;
  width: 100%;
  height: ${(props) => (props.isFullscreen ? '64px' : '32px')};
  bottom: ${(props) => (props.isFullscreen ? '64px' : '32px')};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: auto;
`

export const SubtitlesText = styled.div<Fullscreen>`
  width: ${(props) => (props.isFullscreen ? '95%' : '90%')};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.isFullscreen ? '16px' : '8px')};

  background-color: rgba(0, 0, 0, 0.5);
  color: orange;
  font-size: ${(props) => (props.isFullscreen ? '30px' : '20px')};
`
