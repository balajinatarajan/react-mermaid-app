import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import React, { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import LivePreview from '../LivePreview';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Badge } from 'react-bootstrap'

function Editor(props) {
    const [text, updateText] = useState('')

    return (
        <div>
            <h2>Live Editor <Badge variant="secondary">using mermaid js</Badge></h2>
            <br></br>
            <Row>
                <Col md={5}>
                    <CodeMirror
                        value=''
                        options={{
                            mode: 'java',
                            theme: 'darcula',
                            lineNumbers: true
                        }}
                        onChange={(editor, data, value) => {
                            updateText(editor.getValue());
                        }}
                    />
                </Col>
                <Col md={7}>
                    <LivePreview id="graph1" value={text} />
                </Col>
            </Row>
        </div>
    );
}

export default Editor;