import { useLocalStore } from 'mobx-react-lite'

export const useScreenStore = () => {
  const store = useLocalStore(() => ({
    videoSrc: '',
    subtitlesSrc: '',
  }))

  return store
}
