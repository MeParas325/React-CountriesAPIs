import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)

  return (
  <p>Something went wrong! {error.status}</p>
  )
}

export default ErrorPage