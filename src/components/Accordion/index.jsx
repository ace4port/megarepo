import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './Accordion.scss'

const Accordion = ({ data, loading }) => {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <div className="faq--collapse">
      <button
        className={`faq--collapse--btn ${collapsed ? 'active' : ''}`}
        onClick={() => setCollapsed(!collapsed)}
      >
        {loading ? (
          <span>
            {/* <Loader width={6} /> */}
            <span className="loader-text">Loading...</span>
          </span>
        ) : (
          <span>
            {data.question}
            {!collapsed ? <PlusIcon /> : <MinusIcon />}
          </span>
        )}
      </button>
      <CSSTransition
        in={collapsed}
        timeout={300}
        unmountOnExit
        classNames="faq--content"
      >
        <div className={`faq--content`}>
          {/* <p className="d9">{loading ? <Loader width="8" /> : data.answer}</p> */}
          <p className="d9">{data.answer ?? data.detail()}</p>
        </div>
      </CSSTransition>
    </div>
  )
}

export default Accordion

const PlusIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.37988 13.5469V7.54688M7.37988 7.54688V1.54688M7.37988 7.54688H13.3799M7.37988 7.54688H1.37988"
      stroke="#2514E4"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 7.5 7.5"
        to="90 7.5 7.5"
        dur="0.3s"
        repeatCount="1"
      />
    </path>
  </svg>
)

const MinusIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.37988 7.54688H13.3799M7.37988 7.54688H1.37988"
      stroke="#2514E4"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 7.5 7.5"
        to="180 7.5 7.5"
        dur="0.3s"
        repeatCount="1"
      />
    </path>
  </svg>
)
