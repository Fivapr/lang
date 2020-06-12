import React, { useRef, useEffect } from 'react'
import { Subtitles } from './components/Subtitles'
import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import playIcon from './static/playIcon.svg'
import fullscreenIcon from './static/fullscreenIcon.svg'
import { Controls } from './components/Controls'
import { useObserver } from 'mobx-react-lite'
import { PlayerStore } from './playerStore'

interface Props {
  videoSrc: string
  subtitlesSrc: string
}

export const Player = (props: Props) => {
  const video = useRef<HTMLVideoElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)
  const store = React.useRef(new PlayerStore()).current
  useEffect(() => {
    store.init({ video: video.current!, wrapper: wrapper.current! })
  }, [])

  return useObserver(() => {
    return (
      <PlayerWrapper onClick={store.togglePlay} ref={wrapper}>
        {!store.started && <PlayIcon src={playIcon} alt="Play" />}

        {store.started && (
          <FullscreenIcon
            src={fullscreenIcon}
            alt="Fullscreen"
            onClick={store.toggleFullscreen}
          />
        )}

        <Video
          src={props.videoSrc}
          isFullscreen={store.isFullscreen}
          ref={video}
        >
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
  })
}
