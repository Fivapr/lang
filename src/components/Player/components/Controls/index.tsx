import React, { useState, useRef } from 'react'
import {
  ControlsWrapper,
  Time,
  Timeline,
  Volume,
  ElapsedTime,
  BufferedTime,
  VolumeIconWrapper,
  VolumeIcon,
  VolumeSliderWrapper,
  VolumeSlider,
} from './styles'

import volumeIcon from './static/volumeIcon.svg'
import { formatTime } from 'utils/formatTime'

interface Props {
  isFullscreen: boolean
  setVolume: (volume: number) => void
  setTime: (time: number) => void // seconds
  elapsedTime: number // seconds
  duration: number // seconds
  bufferedTime: number // seconds
}

export const Controls = (props: Props) => {
  const [volume, setVolume] = useState()
  const timelineRef = useRef<HTMLDivElement>(null)

  const stopPropagation = (e: any) => {
    e.stopPropagation()
  }

  let elapsedPercent = 0
  let bufferedPercent = 0

  if (props.elapsedTime && props.duration && props.bufferedTime) {
    elapsedPercent = (props?.elapsedTime / props?.duration) * 100
    bufferedPercent =
      (props?.bufferedTime / props?.duration) * 100 - elapsedPercent
  }

  const handleVolumeChange = (e: any) => {
    setVolume(e.target.value)
    props.setVolume(e.target.value / 100)
  }

  const handleTimelineClick = (e: any) => {
    if (props.duration && timelineRef && timelineRef.current) {
      props.setTime(
        ((e.nativeEvent.clientX - timelineRef.current.offsetLeft) /
          timelineRef.current.clientWidth) *
          props.duration
      )
    }
  }

  return (
    <ControlsWrapper
      onClick={stopPropagation}
      isFullscreen={props.isFullscreen}
    >
      <Time isFullscreen={props.isFullscreen}>
        {formatTime(props.elapsedTime)}
      </Time>
      <Timeline ref={timelineRef} onClick={handleTimelineClick}>
        <ElapsedTime percent={elapsedPercent} />
        <BufferedTime percent={bufferedPercent} />
      </Timeline>
      <Time isFullscreen={props.isFullscreen}>
        {formatTime(props.duration)}
      </Time>
      <Volume>
        <VolumeIconWrapper>
          <VolumeIcon src={volumeIcon} />
        </VolumeIconWrapper>

        <VolumeSliderWrapper>
          <VolumeSlider
            min="0"
            max="100"
            type="range"
            onChange={handleVolumeChange}
            value={volume}
          ></VolumeSlider>
        </VolumeSliderWrapper>
      </Volume>
    </ControlsWrapper>
  )
}
