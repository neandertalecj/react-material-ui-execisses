import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'


const styles = theme => ({
    FormControl: {
        width: 500
    }
})

export default withStyles(styles)(class extends Component {
    state = this.getInitialState()

    getInitialState() {
        const { exercise } = this.props

        return exercise ? exercise : {
            title: '',
            description: '',
            muscles: ''
        }
    }

    handleChange = name => ({ target: { value }}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
        //TODO: validate

        const { exercise } = this.state

        // this.props.onCreate(exercise)
        this.props.onSubmit({
            ...exercise,
            id: exercise.title.toLocaleLowerCase().replace(/ /g, '-')
        })


        //to clear form and to close:
        this.setState({
            open: false,
            exercise: {
                title: '',
                description: '',
                muscles: ''
            }
        })
    }

    render() {
        const { title, description, muscles } = this.state
        const { classes, muscles: categories } = this.props
        return <form>
            <TextField
                label="Title"
                value={title}
                onChange={this.handleChange('title')}
                margin="normal"
                className={classes.FormControl}
            />
            <br/>
            <FormControl className={classes.FormControl}>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                    <Select
                        value={muscles}
                        onChange={this.handleChange('muscles')}
                    >
                        {categories.map(category => 
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br/>
            <TextField
                label="Description"
                value={description}
                onChange={this.handleChange('description')}
                multiline
                rows="4"
                margin="normal"
                className={classes.FormControl}
            />
            <br/>
            <Button 
                color="primary" 
                variant="contained"
                onClick={this.handleSubmit}
            >
                Create
            </Button>
        </form>
    }
})
