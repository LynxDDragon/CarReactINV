import Cars from './views/Car';
import ProfileView from './views/Profile';
import Home from './views/Home'
import SingleListing from './views/SingleListing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';

function App() {
  const { login, logout, user} = useContext(AuthContext)

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
        <a className='navbar-brand' href="#">
          CarInv
        </a>
        <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/inventory">Car Inventory</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
          </div>
          <div className="Navbar-nav ml-auto"> 
            {
              (user.loggedIn) ?
              <button onClick={logout} className="btn btn-primary">Logout</button>
              :
              <button onClick={login} className="btn btn-primary">Login</button>
            }          
          </div>
        </div>
      </nav>

      <div className="Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing">
            <Route path=":id" element={<SingleListing />} />
          </Route>
          <Route path="/inventory" element={<Cars />} />
          <Route path="/profile" element={<ProfileView />} />
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}

export default App;