import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Header  from '../../Components/Header/Header';
import './HomePage.styles.css';
import AboutImage1 from '../../Assets/About1.png';
import AboutImage2 from '../../Assets/About2.png';
import AboutImage3 from '../../Assets/About2.png';
import ServiceCard from '../../Assets/Servicescard.png';
import { services, testimonialItems } from '../../Variables/Variables';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import testimage from '../../Assets/testi_avatar02.png';
import Footer from '../../Components/Footer/Footer';

export default function HomePage() {


  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
  
    handleResize(); // Call handleResize on initial render
  
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = animationRef.current ? animationRef.current.offsetTop : 0;

    if (scrollPosition > elementPosition) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll:1,
    autoplay: true,
    speed: 1000,
    arrows:false,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const TestimonialslideItems =testimonialItems  && testimonialItems .map((i , index) => {
    return (
      <Box className="slide sliderBox" key={i.name}  id={index === (activeIndex + 1) ? 'sliderScale' : 'slidernonScale'} >
        <Stack spacing={1} p={2}>
          <FormatQuoteIcon sx={{ rotate: '180deg' , color:'#fff' }} />
          <Box
            display="flex"
            flexDirection={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
            justifyContent="space-between"
            alignContent="center"
            gap={{ lg: 0, md: 0, sm: 2, xs: 2 }}
            alignItems="center"
          >
            <Box display="flex" flexDirection="row" gap={2} alignContent="center" alignItems="center">
              <img src={testimage} alt="thumb" style={{width:80 ,  objectFit:'contain',  verticalAlign: "middle"}} />
              <Typography variant='h5' color='#66CD0D'>{i.title}</Typography>
            </Box>
          </Box>
          <Box mt={1}>
            <Typography variant="p" color='#fff' fontWeight={500} fontSize="16px" lineHeight={1.2}>
              {i.content}
            </Typography>
          </Box>
        </Stack>
      </Box>
    )});


  return (
    <Box bgcolor='#000E19'>

      <Box className='Banner' position='relative'>
      <Header />

      <Box className='bannerText'>
        <Typography variant='h3'>Elevate Your Digital Presence with GoGreenVerz</Typography>
        <Typography variant='h6'>Tech Innovations Shaping a Sustainable Future</Typography>
      </Box>
      </Box>

      <Box position='relative' px={3} py={8}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
              <Stack direction='row'>
                <Box>
                  <img src={AboutImage1} alt='' className='aboutImage1' />
                </Box>
                <Stack>
                <Box>
                <img src={AboutImage2} alt='' className='aboutImage2' />
                </Box>
                <Box>
                <img src={AboutImage3} alt='' className='aboutImage2' />
                </Box>
                </Stack>
              </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Stack spacing={4}>
              <Typography variant='h6' color='#66CD0D'>WELCOME</Typography>
              <Stack spacing={2}>
              <Typography variant='h5'>WELCOME</Typography>
              <Typography variant='subtitle1' color='#fff'>GO Greenverz is a technology company commited to develop an Ecosystem for a Sustainable Future through the development and implementation of green technology solutions. By leveraging blockchain and IoT sensors, we work with the Carbon Registry of India to create verified carbon credits, streamline the methodlogy and claim processes. Our goal is to support businesses and individuals in their efforts to reduce their carbon footprint and contribute to a healtheir planet.</Typography>
               <Box>
               <Button variant='outlined' sx={{color:'#66CD0D' , borderColor:"#66CD0D" , borderRadius:'25px' , textTransform:'capitalize', fontSize:'21px'}}>More About Us</Button>
               </Box>
              </Stack>
            </Stack>
            </Grid>
        </Grid>
      </Box>


      <Box position='relative' px={3} py={8}>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
        <Typography variant='h6' color='#66CD0D'>SERVICES</Typography>
        </Box>
        <Box>
        <Button 
        variant='outlined' 
        sx={{
        color:'#66CD0D' , 
        borderColor:"#66CD0D" , 
        borderRadius:'25px' , 
        textTransform:'capitalize', 
        fontSize:'21px'}}
        >
         View All
        </Button>
        </Box>
        </Box>
        <Grid container spacing={3} p={2} mt={2}>
          {
            services && services.map((i, index)=>{
              return(
              <Grid item xs={12} sm={12} md={3} lg={3} mt={index % 2 !== 0 ? 6 : 0} >
              <Box className='ServiceCard' p={2}>
              {i.icon}
             <Typography variant='h6' color='#66CD0D'>{i.title}</Typography>
             <Typography color='#fff' variant='subtitle1'>{i.content}</Typography>
              </Box>
           </Grid>
            )})
          }
        </Grid>
      </Box>


      <Box position='relative' px={3} py={8}>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
        <Typography variant='h6' color='#66CD0D'>OUR PORTFOLIO</Typography>
        </Box>
        <Box>
        <Button 
        variant='outlined' 
        sx={{
        color:'#66CD0D' , 
        borderColor:"#66CD0D" , 
        borderRadius:'25px' , 
        textTransform:'capitalize', 
        fontSize:'21px'}}
        >
         View All
        </Button>
        </Box>
        </Box>
        <Grid container spacing={3} p={2} mt={2}>
          {
            services && services.map((i, index)=>{
              return(
              <Grid item xs={12} sm={12} md={3} lg={3} mt={index % 2 !== 0 ? 6 : 0} >
              <Box className='ServiceCard' p={2}>
              {i.icon}
             <Typography variant='h6' color='#66CD0D'>{i.title}</Typography>
             <Typography color='#fff' variant='subtitle1'>{i.content}</Typography>
              </Box>
           </Grid>
            )})
          }
        </Grid>
      </Box>


      <Box position='relative' px={3} py={8}>
        <Box textAlign='left'>
        <Typography variant='h6' color='#66CD0D'>TESTIMONIALS</Typography>
        </Box>
        <Grid container spacing={3} p={2} mt={2}>
          <Grid item xs={12}>
          <Box>
          <Slider {...settings}>
          {TestimonialslideItems}
          </Slider>
          </Box>
           </Grid>
        </Grid>
      </Box>


      <Box position='relative' px={8} py={8}>
          <Box className='newsletterCard'>
          <Grid container justifyContent='space-between' alignContent='center' alignItems='center'  px={4} py={10}>
          <Grid item xs={12} sm={12} md={5} lg={5} display='flex' justifyContent='center'>
            <Stack spacing={4} width='50%'> 
            <Typography variant='subtitle1'>NEWSLETTER SIGNUP</Typography>
            <Box>
            <Typography variant='h4'>Subscribe For</Typography>
            <Typography variant='h4'>the Updates!</Typography>
            </Box>
            </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} display='flex' justifyContent='start'>
              <TextField variant='standard' fullWidth placeholder='Enter Your Email Address' />
            </Grid>
            </Grid>
           </Box>
      </Box>


     <Footer />

    </Box>
  )
}
