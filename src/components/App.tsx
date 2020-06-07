import { createIOC } from '../bindings'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Root } from 'screens/Root'
import { hot } from 'react-hot-loader/root'
import { iocContext } from 'hooks/useInject'
import { config } from 'config'
import { createBrowserHistory } from 'history'
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'

const Component = (): JSX.Element => {
  const history = createBrowserHistory()
  const ioc = createIOC({ window, history, localStorage, config, navigator })

  return (
    <iocContext.Provider value={ioc}>
      <BrowserRouter>
        <ThemeProvider
          theme={createMuiTheme({
            palette: {
              type: 'dark',
              primary: { main: '#1c1c1c', light: '#111111', dark: '#282828' },
            },
          })}
        >
          <CssBaseline />
          <Root />
        </ThemeProvider>
      </BrowserRouter>
    </iocContext.Provider>
  )
}

export const App = hot(Component)
