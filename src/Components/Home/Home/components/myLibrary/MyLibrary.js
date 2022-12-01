import React from 'react'
import LibraryCard from './LibraryCard/LibraryCard'

function MyLibrary() {
  return (
      <>
          <LibraryCard/>
      </>
  )
}

export default React.memo(MyLibrary)