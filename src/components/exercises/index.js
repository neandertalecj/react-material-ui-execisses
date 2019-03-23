import React from 'react';
import { Grid } from '@material-ui/core'
import LeftPanel from './LeftPane'
import RightPanel from './RightPane'

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
}

export default props => 
    <Grid container>
        <Grid item sm>
            <LeftPanel styles={styles} />
        </Grid>
        <Grid item sm>
            <RightPanel styles={styles} />   
        </Grid>
    </Grid>