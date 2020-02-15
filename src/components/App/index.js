import React from 'react'
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'
import Viewer from '../Viewer'
import Jumbotron from 'react-bootstrap/Jumbotron'


function App() {
    return (
      <Router>
        <Route key="viewer" path="/viewer/" render={(props) => <Viewer {...props}/>}/>

        <Route exact path="/" render={() => (
                <Jumbotron>
                  <h1>Welcome to the Visualizer!</h1>
                  <p>
                    Click on the tabs on the sidebar to begin viewing the diagrams here
                  </p>
              </Jumbotron>)}/>
      </Router>  
    );
}
export default App;