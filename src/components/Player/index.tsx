import React, { useRef } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import playIcon from './static/playIcon.svg'
import fullscreenIcon from './static/fullscreenIcon.svg'
import { Controls } from './components/Controls'
import { usePlayerStore } from './hooks'

interface Props {
  videoSrc: string
  subtitlesSrc: string
}

export const Player = (props: Props) => {
  const ref = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const store = usePlayerStore({
    video: ref.current!,
    wrapper: wrapperRef.current!,
  })

  return (
    <PlayerWrapper
      isFullscreen={store.isFullscreen}
      onClick={store.togglePlay}
      ref={wrapperRef}
    >
      {!store.started && <PlayIcon src={playIcon} alt="Play" />}

      {store.started && (
        <FullscreenIcon
          src={fullscreenIcon}
          alt="Fullscreen"
          isFullscreen={store.isFullscreen}
          onClick={store.toggleFullscreen}
        />
      )}
      <Video src={props.videoSrc} isFullscreen={store.isFullscreen} ref={ref}>
        {props.subtitlesSrc && <track src={props.subtitlesSrc}></track>}
      </Video>
      {store.currentSub && (
        <Subtitles
          isFullscreen={store.isFullscreen}
          sub={store.currentSub}
          pause={store.subtitleEnterPause}
          play={store.subtitleLeavePlay}
        />
      )}
      {store.started && (
        <Controls
          elapsedTime={store.currentTime}
          setTime={store.setTime}
          duration={store.duration}
          isFullscreen={store.isFullscreen}
          setVolume={store.setVolume}
          bufferedTime={store.bufferedTime}
        />
      )}
    </PlayerWrapper>
  )
}
