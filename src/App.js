
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Containers/Register/Register';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Routes>
            <Route path="/" element={<Register title={"New Work"}/>}/>

        </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
