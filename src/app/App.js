import { useState } from 'react'
import Map from '../features/map/Map'
import Widgets from '../features/widgets/Widgets'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Deforestation from './pages/Deforestation'
import Restore from './pages/Restore'
function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path="/restore" element={<Restore/>} />
          <Route path="/deforestation" element={<Deforestation/>} />
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
