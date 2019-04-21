import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'

export default withWidth()(({ muscles, category, onSelect, width }) => {
    console.log('withWidth', width)
    const index = category
        ? muscles.findIndex(group => group === category) + 1
        : 0

    const onIndexSelected = (e, index) =>
        onSelect(index === 0 ? '' : muscles[index - 1])

    return <Paper>
        <Tabs
            value={index}
            onChange={onIndexSelected}
            indicatorColor="primary"
            textColor="primary"
            centered ={width !== 'xs'}
            variant={width === "xs" ? "scrollable" : "standard"}
        >
        <Tab label="All" />
            {muscles.map(group =>
                <Tab key={group} label={group} />
            )}
        </Tabs>
    </Paper>
})
    