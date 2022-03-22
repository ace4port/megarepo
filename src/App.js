import Home from './pages/Home'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import DetailsPage from './pages/Details'
import ModalView from './pages/Details/ModalView'

const Incomplete = () => <p>This page is under development</p>
const NoMatch = () => (
  <h2>
    Nothing to see here! Go to the<Link to="/"> home page</Link>
  </h2>
)

function App() {
  const location = useLocation()

  // for dual mode of router modal
  let state = location.state

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="/details/:slug" element={<DetailsPage />} />

          <Route path="guides" element={<Incomplete />} />
          <Route path="contribute" element={<Incomplete />} />
          <Route path="thanks" element={<Incomplete />} />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/details/:slug" element={<ModalView />} />
        </Routes>
      )}
    </div>
  )
}

export default App
