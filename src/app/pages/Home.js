import React, { useState, useEffect } from 'react'
import { useQuery } from 'graphql-hooks'

const GET_PROGRAMMER_QUERY = `
  query ProgrammerQuery($name: String) {
    programmer(name: $name) {
      name
      hasSmile
      selfDescription
      INTEL
    }
  }
`

export default () => {
  const {
    loading, error, 
    data = { programmer: '' }
  } = useQuery(GET_PROGRAMMER_QUERY, {
    variables: {
      name: 'serge'
    }
  })

  if (loading) return <div>{'Loading...'}</div>
  if (error) return <div>{'Something bad happened'}</div>

  return (
    <dl>
      <dt>Name</dt>
      <dd>{data.programmer.name}</dd>
      <dt>Has Smile with him</dt>
      <dd>{data.programmer.hasSmile ? 'Yes' : 'No'}</dd>
      <dt>Name</dt>
      <dd>{data.programmer.selfDescription}</dd>
      <dt>...LINK...INTEL data incoming...</dt>
      <dd>{data.programmer.INTEL}</dd>
    </dl>
  )
}
