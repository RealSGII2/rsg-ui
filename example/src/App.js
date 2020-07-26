import React, { useState } from 'react'
import { Appbar, Button, Layout, List, Divider, Spacer, Typography } from 'rsg-ui'
import 'rsg-ui/dist/index.css'

const App = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <>
            <Appbar title="Hello World" showMenu onMenuClick={() => { setDrawerOpen(!drawerOpen) }} />
            <Layout drawerOpen={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
                <Layout.Drawer>
                    <List look="rounded">
                        <List.Item active>
                            Home
                        </List.Item>
                        <List.Item>
                            Stuff
                        </List.Item>
                        <List.Item>
                            Other stuffs
                        </List.Item>
                    </List>
                    <Spacer />
                    <Divider />
                    <Typography type="sh2" style={{margin:10,textAlign:"center"}}>
                        rsg-ui
                    </Typography>
                </Layout.Drawer>
                <Layout.Content>
                ContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContentContent
                </Layout.Content>
            </Layout>
        </>
    )
}

export default App
