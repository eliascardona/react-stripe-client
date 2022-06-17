import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Header } from "./components/utils/Header"
import { Login } from "./components/vitals/Login"
import { Courses } from "./components/pages/Courses"
import { BuyPage } from "./components/pages/BuyPage"

export const MainActivity = () => {
  return (
    <Router>
      <Header />
      <Login />
      <Switch>
        <Route path="/" exact component={BuyPage} />
        <Route path="/app" component={Courses} />
      </Switch>
    </Router>
  )
}