import { Box, Button, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import Header  from '../../Components/Header/Header';
import './HomePage.styles.css';
import AboutImage1 from '../../Assets/About1.png';
import AboutImage2 from '../../Assets/About2.png';
import AboutImage3 from '../../Assets/About2.png';
import ServiceCard from '../../Assets/Servicescard.png';
import { portfolioSection, services, testimonialItems } from '../../Variables/Variables';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
import testimage from '../../Assets/testi_avatar02.png';
import Footer from '../../Components/Footer/Footer';
import BannerVideo from '../../Assets/GGV Website Cover TOP.mp4';
import CustomTextField from '../../Components/CustomTextField';



export default function HomePage() {


  const [names, setNames] = useState('')
  const [email, setEmail] = useState('')
  const [subject,setSubject]= useState('')
  const[messages , setMessages] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();
  const [color, setColor] = useState();
  const [errorMsg7, setErrorMsg7] = useState('');
  const [Error7, setError7] = useState(false);

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
        breakpoint: 970,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
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
              <img src={i.image} alt="thumb" style={{width:80 ,  objectFit:'contain',  verticalAlign: "middle"}} />
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


    
  const validateInput = () =>{
    if(email !== ''){
    if (/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg7("");
      setError7(false);
      } else {
      setError7(true);
      setErrorMsg7("Invalid Email Address");
      }
    }
    else{
      setError7(true);
      setErrorMsg7("Email Address Cannot Be Empty");
    }
  }
  

  return (
    <Box bgcolor='#000E19'>

      <Box className='Banner' position='relative' id='homeSection' data-section="homeSection" >
      <Header />

      <Box className='bannerText' >
        <Typography variant='h3'>Elevate Your Digital Presence with GoGreenVerz</Typography>
        <Typography variant='h6'>Tech Innovations Shaping a Sustainable Future</Typography>
      </Box>
      </Box>

      <Box position='relative' px={3} py={4} id='aboutSection' data-section="aboutSection" >
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
              <Typography variant='h6' color='#66CD0D'>OUR STORY</Typography>
              <Stack spacing={2}>
              <Typography variant='subtitle1' color='#fff'>GoGreenVerz Tech Solutions pioneers the convergence of web2 and web3,
                                crafting hybrid solutions on multichain platforms. Your sustainable tech journey begins
                                here.</Typography>
              
              <Typography variant='subtitle1' color='#fff'>At GoGreenVerz Tech Solutions, we take pride in spearheading the transformation of
                                digital landscapes. Our dedicated suite of services seamlessly blends established web
                                technologies with the latest advancements. Our core objective is to guide businesses through a
                                progressive digital journey, facilitating the seamless transition of their applications and digital
                                products into innovative solutions.</Typography>
               <Box>
                <Stack  spacing={1}>
                <Typography variant='h6' color='#66CD0D'>
                Why Choose Us?
              </Typography>
              <Typography variant='subtitle1' color='#fff'>At GoGreenVerz, we merge cutting-edge AI design with environmental
              consciousness. Experience innovation, efficiency, and a commitment to a greener digital
              landscape.</Typography>
                </Stack>
               </Box>
              </Stack>
            </Stack>
            </Grid>
        </Grid>
      </Box>


      <Box position='relative' px={3} py={6} id='serviceSection' data-section="serviceSection">
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
        <Typography variant='h6' color='#66CD0D'>SERVICES</Typography>
        </Box>
        {/* <Box>
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
        </Box> */}
        </Box>
        <Grid container spacing={{lg:3 , md:3 , sm:8 , xs:4}} p={2} mt={2}>
          {
            services && services.map((i, index)=>{
              return(
              <Grid item xs={12} sm={6} md={3} lg={3} className={index % 2 !== 0 ? "OddGrid" : ''} mt={index % 2 !== 0 ? {lg:6, md:6 , sm:0 , xs:0} : {lg:0, md:0 , sm:0 , xs:0}} >
              <Box className='ServiceCard' p={2}>
              {i.icon}
              <Typography variant='h5' color='#66CD0D'>{i.title}</Typography>
             <Typography color='#fff' variant='h6' fontSize='1.1rem'>{i.content}</Typography>
              </Box>
           </Grid>
            )})
          }
        </Grid>
      </Box>


      <Box position='relative' px={3} py={8} id='profileSection' data-section="profileSection">
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
        <Box>
        <Typography variant='h6' color='#66CD0D'>OUR PORTFOLIO</Typography>
        </Box>
        {/* <Box>
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
        </Box> */}
        </Box>
        <Grid container spacing={{lg:3 , md:3 , sm:8 , xs:4}}  p={2} mt={2}>
          {
            portfolioSection && portfolioSection.map((i, index)=>{
              return(
                <Grid item xs={12} sm={6} md={3} lg={3} className={index % 2 !== 0 ? "OddGrid" : ''} >
              <Box className='ServiceCard' p={2}>
              <img src={i.image} alt='portfolio' style={{width:80 , height:80 , objectFit:'contain' , mixBlendMode:'difference'}} />
             <Typography variant='h5' color='#66CD0D'>{i.title}</Typography>
             <Typography color='#fff' variant='h6' fontSize='1.1rem'>{i.content}</Typography>
              </Box>
           </Grid>
            )})
          }
        </Grid>
      </Box>


      <Box position='relative' px={3} py={8} id='customerSection' data-section>
        <Box textAlign='left'>
        <Typography variant='h6' color='#66CD0D'>TESTIMONIALS</Typography>
        </Box>
        <Grid container p={{lg:2 , md:2 , sm:1 , xs:1}} mt={2}>
          <Grid item xs={12}>
          <Box>
          <Slider {...settings}>
          {TestimonialslideItems}
          </Slider>
          </Box>
           </Grid>
        </Grid>
      </Box>


      <Box position='relative' px={3} py={6}  id='QuoteSection' textAlign='left' data-section>
        <Box>
        <Typography variant='h6' color='#66CD0D' textTransform='uppercase'>Let's Build the Future Together</Typography>
        <Grid container mt={2} spacing={4} justifyContent='space-between'>
        <Grid item xs={12} sm={12} md={5} lg={5} position='relative' display='flex' flexDirection='column' justifyContent='start'>
        <Stack spacing={1} textAlign='left'>
        <Typography  variant='h6' fontWeight={700} textTransform='capitalize' color='#fff'>Ready to embark on your web3 journey?</Typography>
        <Typography  variant='h6' fontWeight={700} width='90%' textTransform='capitalize' color='#fff'> Contact GoGreenVerz Tech
          Solutions for personalized consultations and visionary development.</Typography>
        <Box display='flex' flexDirection='column' gap={2} textAlign='left'>
        <ul style={{listStyle:'none' , display:'flex' , flexDirection:'column', gap:'10px'}}>
            <li><Typography fontSize={17} color='#fff'>Email</Typography></li>     
            <li><Typography fontSize={15} color='#798DA3'>support@gogreenverz.in</Typography></li>  
            <li><Typography fontSize={15} color='#798DA3'>www.gogreenverz.in</Typography></li>
            <li><Typography fontSize={17} color='#fff'>Phone</Typography></li>     
            <li><Typography fontSize={15} color='#798DA3'>9876643211</Typography></li>  
            <li><Typography fontSize={17} color='#fff'>Address</Typography></li>                     
            <li><Typography fontSize={15} color='#798DA3'>2/123B, Main Road,</Typography></li>  
            <li><Typography fontSize={15} color='#798DA3'>Sethirabalapuram,</Typography></li> 
            <li><Typography fontSize={15} color='#798DA3'>Mayiladuthurai, India-609806</Typography></li> 
            <li>
            <Box py={1}>
            <a style={{ textDecoration: 'none', cursor: 'pointer' ,fontWeight:600 ,  color: '#66CD0D' }} href='/' target="_blank" rel="noopener">View on Google Maps</a>
            </Box>
            </li> 
            </ul>
        </Box>
        </Stack>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Box p={4} className='ContactCard'>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <CustomTextField
            onChange={setNames}
            label="Name" 
            value={names}
            validationRegex={/^[A-Za-z]+$/}
            errorMessage={"Forbidden character: %<>$'\""}
            />
            </Grid>

              <Grid item xs={12}>
              <TextField 
              id="outlined-basic"
               label="Email" 
               variant="outlined"
               type='email'
               size='small'
               sx={{
                '& label': {
                  color: '#fff', // Customize label color when focused
                },
                '& label.Mui-focused': {
                    color: '#66CD0D', // Customize label color when focused
                  },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#66CD0D', // Customize underline color when focused
                },
              }}
               helperText={errorMsg7}
               error={Error7}
               onChange={(e)=>setEmail(e.target.value)}
               value={email}
               onBlur={validateInput}
                fullWidth />
              </Grid>

              <Grid item xs={12}>
              <CustomTextField
            onChange={setSubject}
            value={subject}
            label="Subject" 
            multiline={true}
            rows={2}
            validationRegex={''}
            errorMessage={""}
            />
              </Grid>

              <Grid item xs={12}>
              <CustomTextField
            onChange={setMessages}
            value={messages}
            multiline={true}
            rows={4}
            label="Message" 
            validationRegex={''}
            errorMessage={""}
            />
              </Grid>

              <Grid item xs={12}>
              <Button 
              variant='contained' 
              fullWidth
              sx={{bgcolor:'#66CD0D' , borderRadius:'10px', color:'#fff' , fontWeight:550 , textTransform : 'capitalize'}}>
              Submit
              </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        </Grid>
        </Box>
   
      </Box>

 
        <Box position='relative' px={{lg:8 , md:6 , sm:5 , xs:2}} py={8}  id='blogSection' data-section>
          <Box className='newsletterCard'>
          <Grid container justifyContent='space-between' alignContent='center' alignItems='center'  px={{lg:4 , md:4 , sm:2, xs:1.5}} py={{lg:10, md:10, sm:8, xs:7}}>
          <Grid item xs={12} sm={12} md={5} lg={5} display='flex' justifyContent='center' mb={{lg:0 , md:0, sm:2 , xs: 2}}>
            <Stack spacing={{lg:4 ,md:4 ,sm:3 , xs: 2}} width={{lg:'50%', md:'60%', sm:'80%', xs:'100%'}}> 
            <Typography variant='subtitle1'>NEWSLETTER SIGNUP</Typography>
            <Box width='100%'>
            <Typography variant='h4'>Subscribe For</Typography>
            <Typography variant='h4'>the Updates!</Typography>
            </Box>
            </Stack>
            </Grid>
            <Grid item xs={12} sm={12} md={7} lg={7} display='flex' justifyContent='start'>
              <TextField variant='standard'         
              
                sx={{
                  '& label.Mui-focused': {
                    color: '#66CD0D', // Customize label color when focused
                  },
                  '& .MuiInput-underline:after': {
                    borderBottomColor: '#66CD0D', // Customize underline color when focused
                  },
                }}
                InputProps={{
                  sx: {
                    fontSize: '21px', // Customize font size
                  },
                }}
               fullWidth 
               placeholder='Enter Your Email Address' />
            </Grid>
            </Grid>
           </Box>
      </Box>


     <Footer />

    </Box>
  )
}
