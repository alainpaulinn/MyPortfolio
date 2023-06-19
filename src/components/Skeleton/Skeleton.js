import './Skeleton.css'

import React from 'react'

function Skeleton(properties) {
    const {height, width} = properties
    return (<p style={{height, width}} className='skeleton'/>)
}

export default Skeleton