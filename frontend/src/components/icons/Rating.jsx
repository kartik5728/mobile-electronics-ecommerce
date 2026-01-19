import React from 'react'
import { StarIcon } from "./exports"

const Rating = ({ rating }) => {
  return (
    <span className='flex gap-1'>
        {
            [1, 2, 3, 4, 5].map((i) => (
                <StarIcon key={i} 
                fillPercent={Math.max(0, Math.min(100, (rating + 1 - i) * 100))}  />
            ))
        }
    </span>
  );
}

export default Rating
