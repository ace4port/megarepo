import React from 'react'
import Tree from 'react-d3-tree'
import PureSvgNodeElement from './components/PureSvgNode'

import dataJSON from './megarepodata.json'

const customNodeFnMapping = {
  description: 'Default - Pure SVG node & label (IE11 compatible)',
  fn: (rd3tProps, appState = 'horizontal') => (
    <PureSvgNodeElement
      nodeDatum={rd3tProps.nodeDatum}
      toggleNode={rd3tProps.toggleNode}
      // orientation={appState.orientation}
      orientation={appState}
    />
  ),
}

export default function OrgChartTree() {
  const [chartState, setChartState] = React.useState({
    data: dataJSON,
    renderCustomNodeElement: customNodeFnMapping.fn,
  })

  false && setChartState({})

  return (
    <div id="treeWrapper">
      <Tree
        // hasInteractiveNodes
        data={chartState.data}
        //
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        pathClassFunc={() => 'custom-link'}
        //
        renderCustomNodeElement={
          chartState.renderCustomNodeElement
            ? (rd3tProps) =>
                chartState.renderCustomNodeElement(rd3tProps, 'horizontal')
            : undefined
        }
        collapsible={true}
        initialDepth={1}
        zoomable={true}
        enableLegacyTransitions
        //
        centeringTransitionDuration={200}
        shouldCollapseNeighborNodes={true}
        translate={{ x: 200, y: 250 }}
        //
        scaleExtent={{ min: 0.7, max: 2 }}
        nodeSize={{ x: 200, y: 150 }}
        transitionDuration={200}
        //
        // onUpdate={(...args) => {
        //   console.log(args)
        // }}
        onNodeClick={(node, evt) => {
          console.log('onNodeClick', node, evt)
        }}
        onNodeMouseOver={(...args) => {
          console.log('onNodeMouseOver', args)
        }}
        // onNodeMouseOut={(...args) => {
        //   console.log('onNodeMouseOut', args)
        // }}
        // onLinkClick={(...args) => {
        //   console.log('onLinkClick')
        //   console.log(args)
        // }}
        // onLinkMouseOver={(...args) => {
        //   console.log('onLinkMouseOver', args)
        // }}
        // onLinkMouseOut={(...args) => {
        //   console.log('onLinkMouseOut', args)
        // }}
      />
    </div>
  )
}
