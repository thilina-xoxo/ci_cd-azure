import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

export const mainListItems = (
  <div>



    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
 
    <ListItem button>
      <ListItemIcon>
        < LocalPostOfficeIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" />
    </ListItem>
    
    
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Appointments" />
    </ListItem>

    <ListItem button>
      <ListItemIcon >
        < CalendarTodayIcon />
      </ListItemIcon>
      <ListItemText primary="Calender" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        < QuestionAnswerIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem> 
  </div>
);
