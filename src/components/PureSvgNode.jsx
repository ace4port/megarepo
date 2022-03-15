import React from 'react'

const textLayout = {
  horizontal: {
    title: {
      textAnchor: 'start',
      y: -30,
      x: '-1%',
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
  nodeDatum,
  orientation,
  toggleNode,
  onNodeClick,
}) => {
  return (
    <>
      <circle r={20} onClick={toggleNode}></circle>
      <g className="rd3t-label">
        <text
          className="rd3t-label__title"
          {...textLayout[orientation].title}
          onClick={onNodeClick}
        >
          {nodeDatum.name}
        </text>

        <defs>
          <filter x="-0.01" y="-0.04" width="1.02" height="1.08" id="solid">
            <feFlood floodColor="#a5bdff" result="bg" />
            <feMerge>
              <feMergeNode in="bg" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <text
          className="rd3t-label__attributes"
          {...textLayout[orientation].attributes}
          filter="url(#solid)"
        >
          {nodeDatum.attributes &&
            Object.entries(nodeDatum.attributes).map(
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
      </g>
    </>
  )
}

export default PureSvgNodeElement
