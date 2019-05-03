import React, { Component } from 'react';
import { Tabs, Tab, AppBar } from '@material-ui/core'
import withWidth from '@material-ui/core/withWidth'
import { withContext } from '../../context'

class Footer extends Component {
// ({ muscles, category, onSelect, width }) => {
    // console.log('withWidth', width)
    // const index = category
    //     ? muscles.findIndex(group => group === category) + 1
    //     : 0

    onIndexSelect = (e, index) => {
        const { onCategorySelect, muscles } = this.props
        onCategorySelect(index === 0 ? '' : muscles[index - 1])
    }

    getIndex = () => {
        const { category, muscles } = this.props
        return category
          ? muscles.findIndex(group => group === category) + 1
          : 0
    }

    render(){
        const { width, muscles } = this.props
        return <AppBar position="static">
            <Tabs
                 value={this.getIndex()}
                 onChange={this.onIndexSelect}
                indicatorColor="secondary"
                textColor="secondary"
                centered ={width !== 'xs'}
                variant={width === "xs" ? "scrollable" : "standard"}
            >
            <Tab label="All" />
                {muscles.map(group =>
                    <Tab key={group} label={group} />
                )}
            </Tabs>
        </AppBar>
    }
}

export default withContext(withWidth()(Footer))
    