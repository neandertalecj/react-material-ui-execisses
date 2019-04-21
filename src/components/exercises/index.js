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

const styles = theme => ({
    Paper: {
        padding: 20,
        marginTop: 10,
        // marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
})

export default withStyles(styles) (
({ 
    classes,
    exercises, 
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
    <Grid container>
        <Grid item xs={12} sm={6}>
            <Paper className={classes.Paper}>
                {exercises.map(([group, exercises]) => 
                    !category || category === group
                        ?   <Fragment key={group}>
                                <Typography
                                    variant="headline"
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
                                                    <EditIcon/>
                                                </IconButton>
                                                <IconButton onClick={()=>onDelete(id)}>
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
        <Grid item xs={12} sm={6}>
            <Paper className={classes.Paper}>
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
)