import React from 'react'
import { Switch, Route } from 'react-router'

import { Main } from 'screens/Main'
import { Header } from 'components/Header'

export const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </>
  )
}
