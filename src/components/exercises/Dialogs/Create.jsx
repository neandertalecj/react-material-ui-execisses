import React, { Fragment, Component } from 'react'

import Dialog from '@material-ui/core/Dialog';

import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';

import Add from '@material-ui/icons/Add'

import Form from '../Form'


export default class extends Component {
    state = {
        open: false,
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { open } = this.state,
              { muscles, onCreate } = this.props
              
        return <Fragment>
            <Fab onClick={this.handleToggle} size="small">
                <Add />
            </Fab>
            <Dialog
                open={open}
                onClose={this.handleToggle}
                // aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Create a new Exercise
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please fill out the form below.
                    </DialogContentText>
                    <Form 
                        muscles={muscles}
                        onSubmit={onCreate}
                    />
                </DialogContent>
            </Dialog>
        </Fragment>
    }
}
    