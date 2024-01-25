import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/unnamed-removebg-preview.858dcfa3.png';


export default function Footer() {

    const navigate = useNavigate();

    const smoothScrollTo = (elementId) => {
      const targetElement = document.getElementById(elementId);
      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: "smooth",
          });
      }
  };

  return (
    <Box bgcolor='#09121D'>

        <Box py={5}>
        <Grid container display='flex' justifyContent='space-evenly' p={1} spacing={{lg:0 , md:0, sm:5 , xs:5}}>

        <Grid item xs={12} sm={6} md={12} lg={3} display='flex' justifyContent={{lg:'end', md:'start', sm:'end', xs:'center'}}>
          <Stack spacing={1} textAlign='left'>
            <Link href="/" className="header__content__logo">
           <img src={Logo} style={{width:300, height:100 , objectFit:'contain'}} alt='header' />
            </Link>        
          </Stack>
          </Grid>      


          <Grid  id='contactSection' item xs={12} sm={6} md={3} lg={3} display='flex' justifyContent='center' textAlign={{lg:'left', md:'left', sm:'left', xs:'center'}}>
          <ul style={{listStyle:'none' , display:'flex' , flexDirection:'column', gap:'10px'}}>
           <Typography variant="h3" color="#66CD0D" fontWeight={500} fontSize={21} marginBottom='20px'>Contact Us</Typography>
            <li><Typography fontSize={17} color='#fff'>Email</Typography></li>     
            <li><Typography fontSize={15} color='#798DA3'>support@gogreenverz.in</Typography></li>  
            <li><Typography fontSize={15} color='#798DA3'>www.gogreenverz.in</Typography></li>
            <li><Typography fontSize={17} color='#fff'>Address</Typography></li>                     
            <li><Typography fontSize={15} color='#798DA3'>2/123B, Main Road,</Typography></li>  
            <li><Typography fontSize={15} color='#798DA3'>Sethirabalapuram,</Typography></li> 
            <li><Typography fontSize={15} color='#798DA3'>Mayiladuthurai, India-609806</Typography></li> 
            </ul>
          </Grid>    


          <Grid item xs={12} sm={6} md={3} lg={3} display='flex' justifyContent='center' textAlign={{lg:'left', md:'left', sm:'left', xs:'center'}}>
          <ul style={{listStyle:'none' , display:'flex' , flexDirection:'column', gap:'10px' }}>
          <Typography variant="h3" color="#66CD0D"  fontWeight={500} fontSize={21}  marginBottom='20px'>Support</Typography>
          <li><Link onClick={()=>navigate('/')} underline="none" sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Terms Of Use</Typography></Link></li>
          <li><Link onClick={()=>navigate('/')}  underline="none" sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Privacy</Typography></Link></li>           
          <li><Link onClick={() => smoothScrollTo("QuoteSection")} underline="none"  sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Contact</Typography></Link></li>           
          <li><Link  onClick={()=>navigate('/')} underline="none"  sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>FAQ</Typography></Link></li>           
          </ul>

          </Grid> 


          <Grid item xs={12} sm={6} md={3} lg={3} display='flex' justifyContent='center' textAlign={{lg:'left', md:'left', sm:'left', xs:'center'}}>
          <ul style={{listStyle:'none' , display:'flex' , flexDirection:'column', gap:'10px'}}>
          <Typography variant="h3" color="#66CD0D" fontWeight={500} fontSize={21}  marginBottom='20px'>Quick Links</Typography>
          <li><Link onClick={() => smoothScrollTo("homeSection")}  underline="none" sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Home</Typography></Link></li>
          <li><Link onClick={() => smoothScrollTo("aboutSection")} underline="none"  sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>About</Typography></Link></li>            
          <li><Link onClick={() => smoothScrollTo("serviceSection")} underline="none"  sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Services</Typography></Link></li>            
          <li><Link onClick={() => smoothScrollTo("profileSection")}  underline="none" sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Portfolio</Typography></Link></li>            
          <li><Link onClick={() => smoothScrollTo("blogSection")} underline="none"  sx={{cursor:'pointer'}}><Typography color='#798DA3' fontSize={17}>Blog</Typography></Link></li>                       
          </ul>
          </Grid> 
          </Grid>      


          </Box>
    
          


   

        <Grid container mt={{lg:5 , md:5, sm:3 , xs:2}} p={1} spacing={2}>
        <Grid item xs={12}  md={6} textAlign='center' justifyContent='center' display='flex'>
        <Typography className='copyright' color='#798DA3'>
        Copyright and Social Links: © {new Date().getFullYear()} GoGreenVerz Tech Solutions
        </Typography>
        </Grid>
        <Grid item xs={12} md={6} textAlign='center' px={2} justifyContent={{lg:'end', md:'end', sm:'center', xs:'center'}} display='flex'>
        <Box display='flex' flexDirection='row' gap={3}>
          <Typography color='#798DA3'>Connect with us: </Typography>
          <a style={{color:'#2d2d2d'}} href="" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/ios-filled/100/798DA3/facebook-new.png' alt="FB" style={{height:20, width:20, marginRight:2, objectFit:'contain'}} />
          </a> 

          <a style={{color:'#2d2d2d'}} href="" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/ios-glyphs/150/798DA3/twitter--v1.png' alt='tw' style={{height:20, width:20, marginRight:2, objectFit:'contain'}} />
          </a> 

          <a style={{color:'#2d2d2d'}} href="" target="_blank" rel="noopener noreferrer">
          <img src='https://img.icons8.com/ios-filled/100/798DA3/instagram-new--v1.png' alt='in' style={{height:20, width:20, marginRight:2, objectFit:'contain'}} />
          </a>    
          </Box> 
        </Grid>
        </Grid>

</Box>
  )
}
