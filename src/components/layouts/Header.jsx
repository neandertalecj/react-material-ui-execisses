import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../exercises/Dialogs/Create'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    flex: {
        flex: 1
    }
}

export default withStyles(styles) ( 
({ classes, muscles, onExerciseCreate }) =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" className={classes.flex}>
                Exercises Database
            </Typography>
            <CreateDialog 
                muscles={muscles}
                onCreate={onExerciseCreate}
            />
        </Toolbar>
    </AppBar>
)
