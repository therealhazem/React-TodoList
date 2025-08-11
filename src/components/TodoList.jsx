import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Divider } from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TodoList() {
    return (
        <Container maxWidth="sm">
            <Card sx={{ minWidth: 275, mt: 5 }}>
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={1}>
                        <Typography variant="h4" align="center">
                            My TODOs
                        </Typography>
                        <Divider sx={{ width: '100%' }} />
                        <ToggleButtonGroup
                            exclusive
                            // onChange={handleAlignment}
                            aria-label="text alignment"
                        >
                            <ToggleButton value="left">All</ToggleButton>
                            <ToggleButton value="center">Done</ToggleButton>
                            <ToggleButton value="right">Not Done</ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'left' }}>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Container>
    );
}
