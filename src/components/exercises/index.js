import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
// import { ListItem, ListItemText} from '@material-ui/core/List'
import LeftPanel from './LeftPane'
import RightPanel from './RightPane'
import { exercises } from '../../store';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
}

export default ({ exercises }) => 
    <Grid container>
        <Grid item sm>
            {/* <LeftPanel styles={styles} /> */}
            <Paper style={styles.Paper}>
                {exercises.map(([group, exercises]) => 
                    <Fragment>
                        <Typography
                            variant="headline"
                            style={{textTransform: 'capitalize'}}
                        >
                            {group}
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title }) => 
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Typography
                    variant="display1"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subheading"
                    style={{marginTop: 20}}
                >
                    Plese select an exercise from the list on the left
                </Typography>
            </Paper>
        </Grid>
    </Grid>