import 'mobx-react-lite/batchingForReactDom'
import { createIOC } from '../bindings'
import React from 'react'
import { Router } from 'react-router-dom'
import { Root } from 'screens/Root'
import { hot } from 'react-hot-loader/root'
import { iocContext } from 'hooks/useInject'
import { config } from 'config'
import { createBrowserHistory } from 'history'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: '#1c1c1c', light: '#111111', dark: '#282828' },
  },
})

const Component = (): JSX.Element => {
  const history = createBrowserHistory()
  const ioc = createIOC({
    window,
    history,
    localStorage,
    config,
    navigator,
  })

  return (
    <iocContext.Provider value={ioc}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Root />
        </ThemeProvider>
      </Router>
    </iocContext.Provider>
  )
}

export const App = hot(Component)
