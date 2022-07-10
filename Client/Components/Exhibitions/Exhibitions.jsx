import React, { useEffect, useState } from 'react'


import Exhiibition from './Exhibition'
import { getShows } from '../../api/showApi'


function Exhibitions() {
  const [shows, setShows] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true)
      getShows()
        .then((data) => {
          setShows(data.body)
        })
        .finally(() => {
          setLoading(false)
        })
        .catch((err) => console.error(err.message))
  }, [])

  return (
  <>
    <div className="welcome">
      <p>
          Welcome! These are my past shows
      </p>
    </div>
      {loading ? (
        <p>...</p>
      ) : (
      shows.map((show) => {
        return (
          <Exhiibition
            key={show.id}
            show={show}
          />
        )
      })
      )
    }
   </>
  )
}

export default Exhibitions