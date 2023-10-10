'use client'

import { useState } from 'react'
import { Rating } from '@mui/material'
import { Star } from '@phosphor-icons/react'

export function StarRating() {
  const [numberStars, setNumberStars] = useState<number | null>(0)

  function handleToEvaluate(selectedStars: number | null) {
    selectedStars && setNumberStars(selectedStars)
  }

  return (
    <Rating
      name="customized-color"
      value={numberStars}
      icon={<Star weight="fill" size={'2.07rem'} className="text-orange-500" />}
      emptyIcon={
        <Star
          weight="bold"
          size={'2.07rem'}
          className="text-gray-500 opacity-50"
        />
      }
      onChange={(_, selectedStars) => handleToEvaluate(selectedStars)}
      className="left-1/2 -mt-7 mb-12 flex -translate-x-1/2"
    />
  )
}
