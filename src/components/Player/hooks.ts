import { useLocalStore } from 'mobx-react-lite'

interface Args {
  video: HTMLVideoElement
  wrapper: HTMLDivElement
}

export const usePlayerStore = (args: Args) => {
  const store = useLocalStore(
    (source) => ({
      video: source.video,
      wrapper: source.wrapper,
      isFullscreen: false,
      canSubtitleTriggerPlay: false,
      play: () => {
        store.video.play()
        store.canSubtitleTriggerPlay = true
      },
      pause: () => {
        store.video.pause()
        store.canSubtitleTriggerPlay = false
      },
      togglePlay: () => {
        if (store.video.paused) {
          store.play()
        } else {
          store.pause()
        }
      },
      setVolume: (volume: number) => {
        store.video.volume = volume
      },
      setTime: (time: number) => {
        store.video.currentTime = time
      },
      setFullscreen: (value: boolean) => {
        store.isFullscreen = value
      },
      toggleFullscreen: () => {
        if (store.isFullscreen) {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          document.exitFullscreen().catch(() => { })
          store.setFullscreen(false)
        } else {
          store.wrapper.requestFullscreen()
          store.setFullscreen(true)
        }
      },
    }),
    args
  )

  return store
}
