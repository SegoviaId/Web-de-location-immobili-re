import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import RentDescription from '../pages/RentDescription';
import Error from '../pages/Error';

function Router() {
    return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/rentDescription/:id" element={<RentDescription />} /> 
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}
  export default Router