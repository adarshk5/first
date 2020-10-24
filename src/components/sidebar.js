import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import './dashboard.css'
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';


import Dashboard from './dashboard';
const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const itemlist=['Dashboard', 'Profile', 'Activity', 'Add cash','Get cash']
  return (
    <div className={classes.root}>
      
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" >
            Prudential                          | Paricipant
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        
        <List>
          {itemlist.map((text, index) => (
            <ListItem button key={text}>
             {/* <Link to='/>*/ }
              <ListItemText primary={text} style={{fontSize:'100px'}} />
            </ListItem>
          ))}
        </List>
      
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Dashboard/>
		
		
       
        
      </main>
    </div>
  );
}