import React from 'react'
import StarRatings from 'react-star-ratings'

export default function Reviewitem(props) {
    const {review}=props
  return (
    <>
    <div className='col-md-3'>
     <div className="card border-warning" style={{width: "25rem"}}>
  <div className="card-body">
    <h5 class="card-title">Name:{review.name}</h5>
  
    <p class="card-text">Comment:{review.comment}</p>
    <StarRatings
    rating= {review.rating}
    numberOfStars={5}
    starRatedColor="yellow"
    starDimension="18px"
    starSpacing="8px"
    >

    </StarRatings>
    
  </div>
  </div>
</div>
    </>
  )
}
