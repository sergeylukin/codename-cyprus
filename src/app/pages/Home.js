import React, { useState, useEffect } from 'react'
import { useQuery } from 'graphql-hooks'

const GET_PROGRAMMER_QUERY = `
  query ProgrammerQuery($name: String) {
    programmer(name: $name) {
      name
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
    <div>
      {data.programmer.name}
    </div>
  )
}
