import Home from './pages/Home'
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'

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

          <Route path="/details/:slug" element={<DetailsView />} />

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

const DetailsView = () => {
  return (
    <div className="contents">
      <div className="header">
        <h6>Web dev &gt; Frontend &gt; React</h6>

        <div>
          <button>Go to full page</button>
          <button>X</button>
        </div>
      </div>

      <h4>Intro</h4>
      <p>
        React is a front-end library for building user interfaces. It is
        maintained by Facebook and a community of individual developers and
        companies. React can be used as a base in the development of single page
        or mobile applications, as it is optimal for fetching data efficiently
        and rendering it on the web.
        <br />
        As of writing this, React is the most popular JavaScript library. It is
        used by over 1.5 million websites and apps, and is used by over 20% of
        the top 50 Fortune 500 companies.
      </p>
    </div>
  )
}

const ModalView = () => {
  const naviate = useNavigate()
  const closeModal = () => naviate(-1)

  return (
    <div className="modal" onClick={closeModal}>
      <div className="contents">
        <div className="header">
          <h6>Web dev &gt; Frontend &gt; React</h6>

          <div>
            <button>Go to full page</button>
            <button>X</button>
          </div>
        </div>

        <h4>Intro</h4>
        <p>
          React is a front-end library for building user interfaces. It is
          maintained by Facebook and a community of individual developers and
          companies. React can be used as a base in the development of single
          page or mobile applications, as it is optimal for fetching data
          efficiently and rendering it on the web.
          <br />
          As of writing this, React is the most popular JavaScript library. It
          is used by over 1.5 million websites and apps, and is used by over 20%
          of the top 50 Fortune 500 companies.
        </p>

        <h4>What you'll be working doing daily:</h4>
        <p>
          <li>Designing user interfaces</li>
          <li>
            Building components that are reusable and composable from given
            Design file
          </li>
          <li>
            Building components that are accessible and performant and supported
            across browsers and devices
          </li>
          <li>
            Make data fetching from backend and rendering data on the frontend
          </li>
          <li>
            In one sentence- you stand between designer and backend developers.
            You integrate and fetch data from backend and make components
            according to design specifications
          </li>
        </p>

        <h4>Roles / Job titles</h4>
        <p>
          <li>
            <b>Associate Frontend developer</b>
          </li>
          <li>
            <b>Senior Frontend developer</b>
          </li>
          <li>
            <b>Full stack developer</b>
          </li>
        </p>

        <h4>Roadmap</h4>

        <h4>Prerequisites</h4>

        <h4>Start learning</h4>

        <h4>Resources</h4>

        <h4>Alternative roles</h4>

        <h4>Next steps</h4>

        <h4>What to expect</h4>

        <h4>What to learn</h4>

        <h4>What to do next</h4>

        <h4>What to do before</h4>

        <div>
          <button onClick={closeModal}>Got it!</button>
          <button onClick={closeModal}>Start learning! </button>
        </div>
      </div>
    </div>
  )
}
