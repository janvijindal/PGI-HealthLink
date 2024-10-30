import React from 'react'

const layout = ({ children }) => {
  return (
    <div>
    <main className="bg-gray-100">
      {children}
    </main>
  </div>
  )
}

export default layout