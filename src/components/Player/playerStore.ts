import { observable, action } from 'mobx'

interface Args {
  video: HTMLVideoElement
  wrapper: HTMLDivElement
}

export class PlayerStore {
  private video?: HTMLVideoElement
  private wrapper?: HTMLDivElement

  @observable
  isFullscreen = false

  @observable
  canSubtitleTriggerPlay = false

  @observable
  started = false

  @observable
  duration = 0

  @observable
  currentTime = 0

  @observable
  bufferedTime = 0

  @observable
  currentSub = ''

  init(args: Args) {
    this.video = args.video
    this.wrapper = args.wrapper
  }

  @action
  start = async () => {
    await this.video!.play()

    this.started = true
    this.duration = this.video!.duration

    this.video!.ontimeupdate = () => {
      this.currentTime = this.video!.currentTime

      if (this.video!.buffered.length) {
        this.bufferedTime = this.video!.buffered.end(
          this.video!.buffered.length - 1
        )
      }
    }

    this.showSubtitles()
  }

  showSubtitles = () => {
    if (!this.video!.textTracks.length) {
      return
    }

    const subtitles = this.video!.textTracks[0]
    subtitles.mode = 'hidden'
    subtitles.oncuechange = () => {
      if (subtitles.activeCues.length) {
        this.setSubtitles(subtitles.activeCues[0].text)
      }
    }
  }

  @action
  setSubtitles = (sub: string) => {
    this.currentSub = sub
  }

  @action
  play = () => {
    this.video!.play()
    this.canSubtitleTriggerPlay = true
  }

  @action
  pause = () => {
    this.video!.pause()
    this.canSubtitleTriggerPlay = false
  }

  togglePlay = () => {
    if (this.video!.paused) {
      this.play()
    } else {
      this.pause()
    }
  }

  @action
  subtitleEnterPause = () => {
    if (this.canSubtitleTriggerPlay) {
      this.video!.pause()
    }
  }

  @action
  subtitleLeavePlay = () => {
    if (this.canSubtitleTriggerPlay) {
      this.video!.play()
    }
  }

  @action
  setVolume = (volume: number) => {
    this.video!.volume = volume
  }

  @action
  setTime = (time: number) => {
    this.video!.currentTime = time
  }

  @action
  setFullscreen = (value: boolean) => {
    this.isFullscreen = value
  }

  @action
  toggleFullscreen = () => {
    if (this.isFullscreen) {
      // eslint-disable-next-line
      document.exitFullscreen().catch(() => { })
      this.setFullscreen(false)
    } else {
      this.wrapper!.requestFullscreen()
      this.setFullscreen(true)
    }
  }
}
