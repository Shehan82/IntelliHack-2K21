import React from "react";
import { Container, Grid, Box ,Card,Typography,CardContent} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faInstagramSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
    return(
        <Box 
        bgcolor="black" color="white" 
        >
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={6}>
                    <Box>Contact Us</Box>
                    <Box sx={{display:'flex', gridGap:30}}><FontAwesomeIcon style={{ fontSize: 20}} icon={faPhone} /> <Box sx={{ color: 'text.primary', fontSize: 25, fontWeight: 'medium' }}>0123456789</Box></Box>
                    <Box sx={{display:'flex', gridGap:30}}><FontAwesomeIcon style={{ fontSize: 20}} icon={faEnvelope} /> <Box sx={{ color: 'text.primary', fontSize: 25, fontWeight: 'medium' }}>abc@gmail.com</Box></Box>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <Box  >Follow Us On</Box>
                    <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'medium' ,display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
                        <FontAwesomeIcon icon={faInstagramSquare} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faLinkedin} />
                        </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box borderBottom={1}>Follow Us</Box>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                    
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box borderBottom={1}>La</Box>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                    
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box borderBottom={1}>La</Box>
                    <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                    
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                </Card>
                </Grid>
            </Grid>
        </Container>
    </Box>
    
    )
};