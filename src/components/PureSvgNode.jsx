import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const textLayout = {
  horizontal: {
    title: {
      textAnchor: 'start',
      y: -70,
      x: -80,
    },
    attributes: {
      x: 10,
      y: 25,
      style: { fill: '#666' },
    },
    attribute: {
      x: 0,
      dy: '1.2em',
    },
  },
}

const PureSvgNodeElement = ({
  nodeData,
  orientation,
  toggleNode,
  // onNodeClick,
  foreignObjectProps = {},
}) => {
  const [descVisible, setdescVisible] = React.useState(false)

  const toggle = () => {
    // if (!nodeData.children) {
    //   openModal()
    // }
    toggleNode()
  }

  const location = useLocation()

  return (
    <>
      <circle
        r={20}
        onClick={toggle}
        onMouseOver={() => setdescVisible(true)}
        onMouseOut={() => setdescVisible(false)}
      ></circle>

      <g className="rd3t-label">
        {/* 
        <Filter bg="#4169e1" id="title" />
        <text
          className="rd3t-label__title"
          {...textLayout[orientation].title}
          onClick={handleNodeClick}
          filter={`url(#title)`}
          onMouseOver={() => setdescVisible(true)}
          onMouseOut={() => setdescVisible(false)}
        >
          {nodeData.name}
        </text> */}

        <foreignObject
          {...foreignObjectProps}
          {...textLayout[orientation].title}
        >
          <div>
            <Link
              to={`/details/${nodeData.name}`}
              state={{ backgroundLocation: location }}
              className="rd3t-link"
              onMouseOver={() => setdescVisible(true)}
              onMouseOut={() => setdescVisible(false)}
            >
              {nodeData.name}
            </Link>
          </div>
        </foreignObject>

        {descVisible && (
          <>
            <Filter bg="#a5bdff" />
            <text
              className="rd3t-label__attributes"
              {...textLayout[orientation].attributes}
              filter="url(#solid)"
            >
              {nodeData.attributes &&
                Object.entries(nodeData.attributes).map(
                  ([labelKey, labelValue], i) => (
                    <tspan
                      key={`${labelKey}-${i}`}
                      {...textLayout[orientation].attribute}
                    >
                      {labelKey}
                      <tspan fontWeight={'normal'} fill={'darkblue'}>
                        : {labelValue}
                      </tspan>
                    </tspan>
                  )
                )}
            </text>
          </>
        )}
      </g>
    </>
  )
}

export default PureSvgNodeElement

const Filter = ({ bg, id }) => (
  <defs>
    <filter x="-0.01" y="-0.04" width="1.02" height="1.08" id={id ?? 'solid'}>
      <feFlood floodColor={bg} result="bg" />
      <feMerge>
        <feMergeNode in="bg" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
)
