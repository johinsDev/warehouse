import pathOr from 'ramda/es/pathOr'
import * as React from 'react'
import useRouter from 'use-react-router'

export default function ShowOrdersConnector() {
  const { match } = useRouter()

  return <h1>ORder {pathOr('Sin id', ['params', 'id'], match)}</h1>
}
