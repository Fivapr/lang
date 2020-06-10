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
      started: false,
      duration: 0,
      currentTime: 0,
      bufferedTime: 0,
      currentSub: '',

      start: async () => {
        await store.video.play()

        store.started = true
        store.duration = store.video.duration

        store.video.ontimeupdate = function () {
          store.currentTime = store.video.currentTime

          if (store.video.buffered.length) {
            store.bufferedTime = store.video.buffered.end(
              store.video.buffered.length - 1
            )
          }
        }

        store.showSubtitles()
      },

      showSubtitles: () => {
        if (!store.video.textTracks.length) {
          return
        }

        const subtitles = store.video.textTracks[0]

        subtitles.mode = 'hidden'

        subtitles.oncuechange = function (this: TextTrack): void {
          if (this.activeCues.length) {
            store.currentSub = this.activeCues[0].text
          }
        }
      },

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

      subtitleEnterPause: () => {
        if (store.canSubtitleTriggerPlay) {
          store.video.pause()
        }
      },

      subtitleLeavePlay: () => {
        if (store.canSubtitleTriggerPlay) {
          store.video.play()
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
          // eslint-disable-next-line
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
