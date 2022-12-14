import React from 'react'
import LibraryCard from './LibraryCard/LibraryCard'
import LibraryCardNe from './LibraryCard/LibraryCard Ne';

function MyLibrary() {
  return (
    <>
      {/* <LibraryCard /> */}
      <LibraryCardNe/>
    </>
  );
}

export default React.memo(MyLibrary)