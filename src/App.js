import NxtSlides from './components/NxtSlides'
import './App.css'

// This is the list used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <>
    <div className="mobile-container">
      <h1>Only desktop are visible the screen</h1>
    </div>
    <div className="app-container">
      <nav className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
          alt="nxt slides logo"
          className="logo"
        />
        <h1 className="brand-text">Nxt Slides</h1>
      </nav>
      <NxtSlides />
    </div>
  </>
)
export default App
