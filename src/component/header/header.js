import React, { useState, useEffect } from 'react';
import useStyles from './style';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';

export default function Header({ ...props }) {
	const classes = useStyles();

	return (
		<div className={classes.root} id="hrader">
			<AppBar position="static" color="inherit">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					></IconButton>
					<Typography variant="h6" className={classes.title}>
						NavMe
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
