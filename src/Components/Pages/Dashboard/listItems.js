import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Icon Imports
import DashboardIcon from '@material-ui/icons/Dashboard';
export const mainListItems = (
    <React.Fragment>
        <ListItem button>
            <ListItemIcon>
                <Link to='/profile'><DashboardIcon /></Link>
            </ListItemIcon>
            <ListItemText><Link to='/profile'>Profile</Link></ListItemText>
        </ListItem>
    </React.Fragment>
);