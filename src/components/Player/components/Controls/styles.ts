import styled from '@emotion/styled'

export const ControlsWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 24px;
  bottom: 0px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: auto;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Time = styled.div`
  width: 50px;
  padding-left: 8px;
  padding-right: 8px;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #666666;
`

export const Timeline = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: #666666;
  cursor: pointer;
`

interface Percent {
  percent: number
}

export const ElapsedTime = styled.div<Percent>`
  height: 100%;
  width: ${(props) => props.percent}%;

  background-color: #87cefa;
`

export const BufferedTime = styled.div<Percent>`
  height: 100%;
  width: ${(props) => props.percent}%;

  background-color: #ffffff;
`

export const Volume = styled.div`
  width: 100px;
  height: 100%;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const VolumeIconWrapper = styled.div`
  width: 24px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const VolumeIcon = styled.img`
  height: 18px;
  width: 18px;
`

export const VolumeSliderWrapper = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const VolumeSlider = styled.input`
  width: 70px;
  margin-right: 6px;
  height: 3px;

  background-color: #000000;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  cursor: col-resize;
`
