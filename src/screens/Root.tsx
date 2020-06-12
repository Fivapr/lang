import React from 'react'
import { Switch, Route } from 'react-router'

import { MainScreen } from 'screens/MainScreen'
import { PlayerScreen } from './PlayerScreen'

export const Root = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={MainScreen} />
      <Route path="/player" component={PlayerScreen} />
    </Switch>
  )
}
