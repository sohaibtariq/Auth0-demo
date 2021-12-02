import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"
import { Payments } from "./balance-api"

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}!</p>
}
const Settings = () => <p>Settings</p>
const Billing = () => <p>Billing</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  const apimaticScript = require("./apimatic.js")
  return (
    <>
      <nav>
        <Link to="/account">Home</Link>{" "}
        <Link to="/account/settings">Settings</Link>{" "}
        <Link to="/account/billing">Billing</Link>{" "}
        <Link
          to="/balance-api"
          className="w-1/2 h-48 max-w-lg px-5 py-4 mt-16 bg-white border rounded-lg cursor-pointer hover:shadow-lg border-gray"
        >
          <div className="text-4xl font-medium text-gray-700">volume-api</div>
          {/* <p className="h-48 mt-4 text-base leading-tight text-gray-700">
            Some text about the api
          </p> */}
        </Link>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>

      <Router>
        <Home path="/account" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </>
  )
}

export default Account
