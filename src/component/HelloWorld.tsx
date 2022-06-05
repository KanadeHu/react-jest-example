import React, { useCallback, useState } from 'react'

interface HelloWorldProps {
  onClick: () => void
}

const HelloWorld: React.FC<HelloWorldProps> = ({ onClick }) => {
  return <div>
    <div>hello world</div>
    <button onClick={onClick}>增加</button>
  </div>
}

export default HelloWorld
