import React from 'react'
import useTitle from '../Hooks/useTitle'
import SectionHeading from '../components/SectionHeading'

const Collection = () => {
  
    useTitle("Collection")

  return (
    <div>
      <SectionHeading heading={"Collection"}></SectionHeading>
    </div>
  )
}

export default Collection
