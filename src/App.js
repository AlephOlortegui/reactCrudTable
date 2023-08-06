import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// you can import the whole pack.
import 'bootstrap-icons/font/bootstrap-icons.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Comp/Header';
import Table from './Comp/Table';
import NotFound from './Utilities/NotFound';
import Detail from './Crud/Detail';
import Create from './Crud/Create';
import Edit from './Crud/Edit';

function App() {
  return (
    <BrowserRouter>
    <div className="bg-theme py-3">
      <div className="crud-container text-center mx-auto">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Table />}/>
            <Route path='/create' element={<Create />} />
            <Route path='/details/:id' element={<Detail />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
