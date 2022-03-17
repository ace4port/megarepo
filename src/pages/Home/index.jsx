import React from 'react'
import OrgChartTree from '../../D3Tree'

import './Home.scss'

const Home = () => {
  return (
    <div className="page home">
      <OrgChartTree />
      <Aside />
    </div>
  )
}

export default Home

const Aside = () => {
  return (
    <div className="aside">
      <h4>Actions ... </h4>
    </div>
  )
}
