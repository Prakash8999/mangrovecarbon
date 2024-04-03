import { useState } from 'react'
import Map from '../features/map/Map'
import Widgets from '../features/widgets/Widgets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deforestation from './pages/Deforestation'
function App() {
  const [selectedLocationData, setSelectedLocationData] = useState()

  return (
    <div>
<Router>
        <Routes>
          <Route path="/deforestation" element={< Deforestation/>} />
        
        </Routes>
      </Router>

      <Map setSelectedLocationData={setSelectedLocationData} />
      <Widgets
        selectedLocationData={selectedLocationData}
        setSelectedLocationData={setSelectedLocationData}
      />
    </div>
  )
}

export default App
