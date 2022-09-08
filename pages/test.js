import React, { useState, useEffect }from 'react'
import {getPostsCount} from "../services"

function test() {

  const [skip, setSkip] = useState(0);
  console.log(skip)

  return (
    <div>test</div>
  )
}

export default test
