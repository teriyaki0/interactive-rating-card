import './scss/index.scss';
import Rating from './components/Rating/Rating';
import Thanks from './components/Thanks/Thanks';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="root">
      <div className="content">
        <Routes >
          <Route path='/' element={<Rating />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;