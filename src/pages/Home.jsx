import { Link } from 'react-router-dom'
import Fallback from '../components/Fallback'

function Home() {
  return (
    <div className="App-header">
      {navigator.onLine ? (
        <>
          <h1>Home</h1>
          <Link to="/about">Go to About</Link>
        </>
      ) : (
        <Fallback />
      )}
    </div>
  )
}

export default Home
