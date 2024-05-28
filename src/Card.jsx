import React, { useEffect, useState } from 'react'
import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import CountButtons from './CountButtons'

function Card() {
  const [count, setCount] = useState(0)
  const locked = count === 5 ? true : false

  useEffect(()=>{
    const handleSpaceDown = (event) => {
      if (event.code === 'Space') {
        setCount(() => {
          if (count === 5) {
            return 5
          } else {
            return count + 1
          }
        })
      }
    }

    window.addEventListener('keydown', handleSpaceDown)

    return () => {
      window.removeEventListener('keydown', handleSpaceDown)
    }
  },[count])
  return (
    <div className={`card ${locked ? 'card--limit': ''}`}>
          <Title locked={locked}/>
          <Count count={count} />
          <ResetButton setCount={setCount} />
         <CountButtons setCount={setCount} locked={locked} />
        </div>
  )
}

export default Card 