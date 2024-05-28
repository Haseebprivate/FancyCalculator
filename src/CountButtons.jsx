import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import React from 'react'

function CountButtons({setCount, locked}) {
  const handleMinusCount = (event) => {
    setCount(count => {
      if (count < 1) {
         return count = 0
      }
      else {
         return count - 1
      }
    })

    event.currentTarget.blur()
  }

  const handlePlusCount = (event) => {
    setCount(count => {
      if (count === 5) {
        return 5
      } else {
        return count + 1  
      }
    })

    event.currentTarget.blur()
  }

  return (
    <div className='button-container'>
    <CountButton handleCount={handleMinusCount} type="minus" locked={locked} />
    <CountButton handleCount={handlePlusCount} type="plus" locked={locked} />
  </div>
  )
}

export default CountButtons


function CountButton({handleCount, type, locked}) {
  console.log(locked)
  return (
    <button disabled={locked} className='count-btn' onClick={handleCount}>
      {type === 'minus' ? <MinusIcon className='count-btn-icon'  /> : <PlusIcon className='count-btn-icon'  />}
      
    </button>
  )
}