
import { Link } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
      <div>

        <ul>
          <li><a href="/" ></a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/home">home</a></li>
          
          <Link to={'/about'} > About us </Link>
        </ul>
      </div>
   
    </>
  )
}

export default App
