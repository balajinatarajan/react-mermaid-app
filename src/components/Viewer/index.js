import React, { useState, useEffect } from 'react'
import Mermaid from '../Mermaid'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from '../Navigation'
import { Badge } from 'react-bootstrap'
import { PROPERTIES } from '../../constants'
import yaml from 'js-yaml'

function Viewer(props) {
  const [data, updateData] = useState({})
  const baseURL = (process.env.REACT_APP_REPO_URL !== undefined) ? process.env.REACT_APP_REPO_URL : PROPERTIES.BASE_CONFIG_URL

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(baseURL + 'category.yml')
      const text = await response.text()
      updateData(yaml.safeLoad(text))
    }
    fetchData()
  }, [])

    return (
      <Container>
        <h2>Visualizer <Badge variant="secondary">using mermaid js</Badge></h2>
        <br></br>
        <Row>
          <Col md={3}>
            <Navigation data={data}></Navigation>
          </Col>
          <Col md={9}>
              <Mermaid id="graph1" diagramID={props.location.pathname} />
          </Col>
        </Row>
      </Container>
    );
}
export default Viewer;