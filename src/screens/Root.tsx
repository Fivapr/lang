import React from 'react'
import { Switch, Route } from 'react-router'

import { Main } from 'screens/Main'

export const Root = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  )
}
