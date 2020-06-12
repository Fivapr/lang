import React, { useRef, useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import { PlayerStore } from './playerStore'

import { PlayerWrapper, PlayIcon, FullscreenIcon, Video } from './styles'
import { Controls } from './components/Controls'
import { Subtitles } from './components/Subtitles'
import playIcon from './static/playIcon.svg'
import fullscreenIcon from './static/fullscreenIcon.svg'
import loaderIcon from './static/loaderIcon.svg'

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
        {!store.loaded && <PlayIcon src={loaderIcon} alt="Load" />}

        {store.loaded && !store.started && (
          <PlayIcon src={playIcon} alt="Play" />
        )}

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
            duration={store.duration}
            elapsedTime={store.currentTime}
            bufferedTime={store.bufferedTime}
            setTime={store.setTime}
            setVolume={store.setVolume}
          />
        )}
      </PlayerWrapper>
    )
  })
}
