import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../exercises/Dialogs/Create'

export default ({ muscles, onExerciseCreate }) =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                Exercises Database
            </Typography>
            <CreateDialog 
                muscles={muscles}
                onCreate={onExerciseCreate}
            />
        </Toolbar>
    </AppBar>

