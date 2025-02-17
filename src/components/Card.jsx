import React, { Children } from 'react'

function Card({children}) {
    console.log(children)
  return (
    <div style={{height:'300px' , border : '1px solid red'}}>
      {children}
    </div>
  )
}

export default Card
