import { useInject } from './useInject'
import { iocNames } from 'iocNames'
import { LingualeoApi } from 'services/lingualeo'

export const useLingualeoApi = () => {
  return useInject<LingualeoApi>(iocNames.lingualeo)
}
