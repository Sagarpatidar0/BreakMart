import { Routes, Route } from 'react-router-dom';
import './styles/app.scss';
import Singlework from './pages/singlework/Singlework';
import Work from './pages/work/Work';
import { WorkDetail } from './pages/workdetail/WorkDetail';
import {CategoryDetail} from './pages/categorydetail/CategoryDetail'


function App() {
  return (
      <Routes>
        <Route path="/" Component={Work} /> 
        <Route path="/works/:cate" Component={Singlework} /> 
        <Route path="/work" Component={WorkDetail} /> 
        <Route path="/category" Component={CategoryDetail} />
      </Routes>
  )
}

export default App
