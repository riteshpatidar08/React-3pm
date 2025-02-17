import React from 'react'
import { useParams } from 'react-router-dom'
function Usersdetail({usersData}) {
    const {id} = useParams()
    console.log(id)
    const filteredData = usersData.find((user)=> user.id === parseInt(id))
    console.log(filteredData)
  return (
    <div>
      {filteredData.address}
    </div>
  )
}

export default Usersdetail
 

// google.com?name="ritesh"&email="ritesh"
// goole.com/:id => google.com/1 /2 /3


