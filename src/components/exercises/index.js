import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import Form from './Form'
import { withStyles } from '@material-ui/core/styles'
import { withContext } from '../../context'

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        // padding: 20,
        // marginTop: 5,
        // height: 'calc(100% - 61px)',
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginTop: 5,
            height: 'calc(100% - 53px)',
        },
        [theme.breakpoints.down('xs')]: {
            height: '100%'
        }
    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        // height: 'calc(100% - 64px - 48px)'
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item: {
        [theme.breakpoints.down('xs')]: {
            height: '49%'
        }
    }
})


const Exercises = ({ 
    classes,
    exercisesByMuscles, 
    category,
    muscles,
    editMode, 
    onSelect,
    exercise,
    exercise: { 
        id, 
        title = 'Welcome!', 
        description ='Plese select an exercise from the list on the left'
    },
    onDelete,
    onSelectEdit,
    onEdit
}) => 
    <Grid container className={classes.container}>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                {exercisesByMuscles.map(([group, exercises]) => 
                    !category || category === group
                        ?   <Fragment key={group}>
                                <Typography
                                    variant="headline"
                                    color="secondary"
                                    style={{textTransform: 'capitalize'}}
                                >
                                    {group}
                                </Typography>
                                <List component="ul">
                                    {exercises.map(({ id, title }) => 
                                        <ListItem 
                                            key={id}
                                            button
                                            onClick={() => onSelect(id)}
                                        >
                                            <ListItemText primary={title} />
                                            <ListItemSecondaryAction>
                                                <IconButton onClick={()=>onSelectEdit(id)}>
                                                    <EditIcon color="primary" />
                                                </IconButton>
                                                <IconButton color="primary" onClick={()=>onDelete(id)}>
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )}
                                </List>
                            </Fragment>
                        : null

                )}
            </Paper>
        </Grid>
        <Grid item className={classes.item} xs={12} sm={6}>
            <Paper className={classes.paper}>
                {editMode 
                    ?   <Form
                            key={id}
                            exercise={exercise}
                            muscles={muscles}
                            onSubmit={onEdit}
                        />
                    :   <Fragment>
                            <Typography
                                variant="display1"
                                color="secondary"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="subheading"
                                style={{marginTop: 20}}
                            >
                                {description}
                            </Typography>
                        </Fragment>
                }
            </Paper>
        </Grid>
    </Grid>


export default withContext(withStyles(styles)(Exercises))