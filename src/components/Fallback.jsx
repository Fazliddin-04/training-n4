import React, { useState } from 'react'

function Fallback() {
  const [count, setCount] = useState(0)
  const handleReload = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div className="fallback">
      You are currently offline
      <button onClick={handleReload}>RETRY</button>
      {count ? <p>{count} refetching request</p> : null}
    </div>
  )
}

export default Fallback
