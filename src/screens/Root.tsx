import React from 'react'
import { Switch, Route } from 'react-router'

import { MainScreen } from 'screens/Main'
import { Header } from 'components/Header'
import { PlayerScreen } from './Player'

export const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route path="/player" component={PlayerScreen} />
      </Switch>
    </>
  )
}
