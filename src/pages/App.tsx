import React, { useState } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
const App: React.FC = () => {
  return (
    <div className="wrapper" style={{ width: '100%', height: '100%' }}>
      <Outlet />
    </div>
  )
}

export default App
