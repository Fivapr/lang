import { History } from 'history'
import { useInject } from './useInject'
import { iocNames } from 'iocNames'

export const useHistory = () => {
  return useInject<History>(iocNames.history)
}
