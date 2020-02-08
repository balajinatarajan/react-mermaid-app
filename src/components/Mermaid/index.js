import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import mermaid from 'mermaid'
import { PROPERTIES } from '../../constants'

function Mermaid(props) {

    const [svg, updateSvg] = useState({})

    const baseURL = (process.env.REACT_APP_REPO_URL !== undefined) ? process.env.REACT_APP_REPO_URL : PROPERTIES.BASE_CONFIG_URL

    useEffect(() => {
      async function featchData() {
        mermaid.mermaidAPI.initialize({
          startOnLoad: false,
          theme: 'dark',
        })
        const categoryResponse = await fetch(`${baseURL}${props.diagramKey}.txt`)
        let categoryText = await categoryResponse.text()
        mermaid.mermaidAPI.render(props.id, categoryText, svg => {
          updateSvg(svg)
        })
    }
    featchData()
  },[props.id, props.diagramKey])
  
    return(
      <div dangerouslySetInnerHTML={{ __html: svg }} />
    )
  }
  
  Mermaid.propTypes = {
    id: PropTypes.string.isRequired,
    diagramKey: PropTypes.string.isRequired,
  }
  
  export default Mermaid