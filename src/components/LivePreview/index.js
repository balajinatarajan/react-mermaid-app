import React, { useEffect, useState } from 'react'
import mermaid from 'mermaid'

function LivePreview(props) {
    const [svg, updateSvg] = useState({})
    useEffect(() => {
            const diagramText = (props.value !== '') ? props.value : `classDiagram
            class Animal
            class Dog`
            try {
                mermaid.mermaidAPI.parse(diagramText)
                mermaid.mermaidAPI.render(props.id, diagramText, svg => {
                    updateSvg(svg)
                })   
            } catch (error) {
                // view fail
            }

    }, [props.value])

    return (
        <div dangerouslySetInnerHTML={{ __html: svg }} />
    )
}
export default LivePreview