import { createContext, useContext } from 'react'
import { Container } from 'inversify'

export const iocContext = createContext<Container | null>(null)

export const useInject = <T>(name: symbol): T => {
  const container = useContext(iocContext)

  if (!container) {
    throw new Error('You have forgotten to wrap app to iocContext.Provider')
  }

  return container.get<T>(name)
}
