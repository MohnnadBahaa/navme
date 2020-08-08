import React, { useEffect, useState } from 'react';
import useStyles from './style';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import clsx from 'clsx';

export default function SideDrawer(props) {
	const [state, setState] = useState({ ...props });
	const theme = useTheme();
	const classes = useStyles();

	useEffect(() => {
		setState({ ...props });
	}, [props]);

	useEffect(() => {
		console.log('Drawer -> state', state);
	}, [state]);

	return (
		//
		<Drawer
			variant="permanent"
			className={clsx(classes.drawer, {
				[classes.drawerOpen]: state.isDrawerOpen,
				[classes.drawerClose]: !state.isDrawerOpen,
			})}
			classes={{
				paper: clsx({
					[classes.drawerOpen]: state.isDrawerOpen,
					[classes.drawerClose]: !state.isDrawerOpen,
				}),
			}}
		>
			<div className={classes.toolbar}>
				{state.isDrawerOpen ? (
					<IconButton onClick={props.triggerDrawer}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				) : (
					<MenuIcon onClick={props.triggerDrawer}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</MenuIcon>
				)}
			</div>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
