import React, { useState, useEffect } from 'react';
import { Header, SideDrawer } from '../index';
import { CssBaseline, Typography, Container, Grid, Paper } from '@material-ui/core';

export default function Root() {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const handleDrawerOpen = () => {
		setDrawerOpen(!drawerOpen);
	};

	useEffect(() => {}, [drawerOpen]);

	return (
		<>
			<CssBaseline />
			<Container fixed>
				<Typography
					component="div"
					style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
				>
					<Header triggerDrawer={handleDrawerOpen} props={drawerOpen} />
					<SideDrawer isDrawerOpen={drawerOpen} triggerDrawer={handleDrawerOpen} />
					<Grid container direction="column" justify="space-between" alignItems="center">
						<div style={{ backgroundColor: 'green' }}>
							<Paper variant="outlined" alignItems="center">
								<h1>Map</h1>
							</Paper>
						</div>
						<div style={{ backgroundColor: 'red', width: '100px' }}></div>
					</Grid>
				</Typography>
			</Container>
		</>
	);
}
