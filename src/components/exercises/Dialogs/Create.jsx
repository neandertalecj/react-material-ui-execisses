import React, { Fragment, Component } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';

import Add from '@material-ui/icons/Add'

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
        const { open } = this.state

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
                    <form>

                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    }
}
    