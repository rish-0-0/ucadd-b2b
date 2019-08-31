import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icon Imports
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
// import ViewListIcon from '@material-ui/icons/ViewList';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

export const mainListItems = (
    <React.Fragment>
        <ListItem button>
            <ListItemIcon>
                <Link to='/profile'><AccountCircleIcon /></Link>
            </ListItemIcon>
            <ListItemText><Link to='/profile'>Profile</Link></ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Link to='/'><DashboardIcon /></Link>
            </ListItemIcon>
            <ListItemText><Link to='/'>Dashboard</Link></ListItemText>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Link to='/practice'><AssignmentTurnedInIcon /></Link>
            </ListItemIcon>
            <ListItemText><Link to='/practice'>Dashboard</Link></ListItemText>
        </ListItem>
    </React.Fragment>
);