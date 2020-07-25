import React from 'react'
import { Textbox, Typography } from 'rsg-ui'
import 'rsg-ui/dist/index.css'

const App = () => {
    return (
        <div style={{ padding: 20 }}>
            <Textbox label="small textbox" size="small" />
            <Textbox label="medium textbox" size="medium" />
            <Textbox label="large textbox" />
        </div>
    )
}

export default App
