
import ImportantDevicesSharpIcon from '@mui/icons-material/ImportantDevicesSharp';
import { SiBlockchaindotcom } from "react-icons/si";
import { MdOutlineAppShortcut } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { GiCrossedChains } from "react-icons/gi";

import TestImage1 from '../Assets/testi_avatar01.png';
import TestImage2 from '../Assets/testi_avatar02.png';
import TestImage3 from '../Assets/testi_avatar03.png';
import TestImage4 from '../Assets/testi_avatar04.png';

import GGV from '../Assets/GGVLOGO.png';
import PBR from '../Assets/PB LOGO.png';
import Inner from '../Assets/PB LOGO.png';
   
    const testimonialItems = [
        {
        title:'Robert De Niro',
        content:'The customer support at GoGreenTec is top-notch. Every time I had a question or issue, the team was quick to respond and provided excellent assistance. I appreciate the dedication to customer satisfaction.',
        image:TestImage1,
        },
        {
        title:'Keanu Reeves',
        content:'I appreciate the collaborative approach of the team at GoGreenTec. They took the time to understand our unique needs and worked closely with us to achieve our goals.',
        image:TestImage2,
        },
        {
        title:'Robert Downey Jr',
        content:'I appreciate the collaborative approach of the team at GoGreenTec. They took the time to understand our unique needs and worked closely with us to achieve our goals.',
        image:TestImage3,
        },
        {
            title:'Jake Scully',
        content:'The customer support at GoGreenTec is top-notch. Every time I had a question or issue, the team was quick to respond and provided excellent assistance. I appreciate the dedication to customer satisfaction.',
        image:TestImage4,
        },
        {
        title:'Robert De Niro',
        content:'The customer support at GoGreenTec is top-notch. Every time I had a question or issue, the team was quick to respond and provided excellent assistance. I appreciate the dedication to customer satisfaction.',
        image:TestImage1,
        },
        {
        title:'Keanu Reeves',
        content:'I appreciate the collaborative approach of the team at GoGreenTec. They took the time to understand our unique needs and worked closely with us to achieve our goals.',
        image:TestImage2,
        },
        {
        title:'Robert Downey Jr',
        content:'I appreciate the collaborative approach of the team at GoGreenTec. They took the time to understand our unique needs and worked closely with us to achieve our goals.',
        image:TestImage3,
        },
        {
        title:'Jake Scully',
        content:'The customer support at GoGreenTec is top-notch. Every time I had a question or issue, the team was quick to respond and provided excellent assistance. I appreciate the dedication to customer satisfaction.',
        image:TestImage4,
        },
    ]


        const services = [
            {
                title:`Web3 Development Expertise`,
                content:`GoGreenVerz specializes in developing innovative web3 applications and websites.
                Leveraging our expertise in multichain platforms, we create robust, decentralized solutions that
                elevate your digital presence`,
                icon:<SiBlockchaindotcom style={{width:60 , height:60 , color:'#fff'}} />,
            },
            {
                title:`Hybrid Apps and Websites`,
                content:`Our unique approach involves crafting hybrid apps and websites that seamlessly
                integrate web2 and web3 elements. This ensures a smooth transition for businesses, allowing
                them to harness the benefits of both worlds`,
                icon:<MdOutlineAppShortcut style={{width:60 , height:60 , color:'#fff'}} />,
            },
            {
                title:`Consultation and Guidance`,
                content:`We understand that the journey to web3 can be complex. That's why our team of
                experts provides personalized consultations, guiding you through the entire process. From
                conceptualization to execution, we're here to make your transition seamless and efficient`,
                icon:<FaHandsHelping style={{width:60 , height:60 , color:'#fff'}} />
            },
            {
                title:`Multichain Mastery`,
                content:`Embracing the future of decentralized technologies, we specialize in working with
                multichain platforms. Whether it's Ethereum, Binance Smart Chain, or other emerging networks,
                we have the proficiency to navigate the complexities and harness the advantages of each`,
                icon:<GiCrossedChains style={{width:60 , height:60 , color:'#fff'}} />
            },
        ]


        const portfolioSection = [
            {
                title:`GoGreenVerz WEB`,
                content:`GoGreenVerz specializes in developing innovative web3 applications and websites.
                Leveraging our expertise in multichain platforms, we create robust, decentralized solutions that
                elevate your digital presence`,
                icon:<SiBlockchaindotcom style={{width:60 , height:60 , color:'#fff'}} />,
                image:GGV
            },
            {
                title:`ProducerBazaar WEB`,
                content:`Our unique approach involves crafting hybrid apps and websites that seamlessly
                integrate web2 and web3 elements. This ensures a smooth transition for businesses, allowing
                them to harness the benefits of both worlds`,
                icon:<MdOutlineAppShortcut style={{width:60 , height:60 , color:'#fff'}} />,
                image:PBR
            },
            {
                title:`InnerPro WEB`,
                content:`We understand that the journey to web3 can be complex. That's why our team of
                experts provides personalized consultations, guiding you through the entire process. From
                conceptualization to execution, we're here to make your transition seamless and efficient`,
                icon:<FaHandsHelping style={{width:60 , height:60 , color:'#fff'}} />,
                image:Inner
            },
            {
                title:`GoGreenVerz APP`,
                content:`Embracing the future of decentralized technologies, we specialize in working with
                multichain platforms. Whether it's Ethereum, Binance Smart Chain, or other emerging networks,
                we have the proficiency to navigate the complexities and harness the advantages of each`,
                icon:<GiCrossedChains style={{width:60 , height:60 , color:'#fff'}} />,
                image:GGV
            },
        ] 


export { testimonialItems  , services , portfolioSection}