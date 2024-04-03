import React from 'react'
import { useState } from 'react'
// import Map from '../../features/map/Map'
import Map from '../../features/map/Map'
import Widgets from '../../features/widgets/Widgets'
import { Link } from 'react-router-dom'
const Deforestation = () => {
  const [selectedLocationData, setSelectedLocationData] = useState()
  return (
    <>
      <div>
      <div style={{ position: 'fixed', top: '10px', width: '100%', textAlign: 'center',  zIndex: 999 }}>
          <Link to={'/restore'} style={linkStyle}>
            Restoration
          </Link>
        </div>
        <Map setSelectedLocationData={setSelectedLocationData} />
        <Widgets
          selectedLocationData={selectedLocationData}
          setSelectedLocationData={setSelectedLocationData}
        />
      </div>
    </>
  )
}

// Define the styles for the link
const linkStyle = {
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '5px',
  padding: '10px 20px',
  textDecoration: 'none', // remove underline
  display: 'inline-block' // to center horizontally
}
export default Deforestation