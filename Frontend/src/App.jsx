import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom';
import AddBook from './component/AddBook'
import DeleteBook from './component/DeleteBook'
import SearchBook from './component/SearchBook'
import UpdateBook from './component/UpdateBook'
import ViewBook from './component/ViewBook'
import './app.css'

function App() {
  return(
    <div>
      <Router>
        <nav>
          <Link to="/add">Add Book</Link>
          <Link to="/view">View Book</Link>
          <Link to="/search">Search Book</Link>
          <Link to="/update">Update Book</Link>
          <Link to="/delete">Delete Book</Link>
        </nav>
        <Routes>
          <Route path="/add" element={<AddBook />} />
          <Route path="/delete" element={<DeleteBook />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/update" element={<UpdateBook />} />
          <Route path="/view" element={<ViewBook />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
