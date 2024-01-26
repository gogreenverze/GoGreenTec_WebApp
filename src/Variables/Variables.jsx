
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
import Inner from '../Assets/InnerProSports-Logo-Only.webp';
   
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
                content:`GoGreenVerz, a revolutionary online platform that seamlessly combines the worlds of sustainable real estate and NFTs on the Solana blockchain. This groundbreaking marketplace empowers users to list, buy, and sell lands with an eco-friendly focus, while also providing a cutting-edge NFT marketplace for digital asset enthusiasts.`,
                icon:<SiBlockchaindotcom style={{width:60 , height:60 , color:'#fff'}} />,
                image:GGV,
                link:'',
            },
            {
                title:`ProducerBazaar WEB`,
                content:` ProducerBazaar.com, a groundbreaking platform that revolutionizes the way movie rights are bought and sold in the film industry. ProducerBazaar.com serves as an exclusive marketplace where producers can list their movie rights for sale, and buyers have the unique opportunity to acquire these rights at any time, seamlessly and securely.`,
                icon:<MdOutlineAppShortcut style={{width:60 , height:60 , color:'#fff'}} />,
                image:PBR,
                link:'',
            },
            {
                title:`InnerPro WEB`,
                content:` InnerPro Training App, a dynamic and innovative tool designed to elevate the training experience for young athletes. Developed with a focus on empowering the next generation of sports enthusiasts, InnerPro serves as a comprehensive training platform that is ideally complemented by the guidance of a coach or parent.`,
                icon:<FaHandsHelping style={{width:60 , height:60 , color:'#fff'}} />,
                image:Inner,
                link:'',
            },
            {
                title:`GoGreenVerz APP`,
                content:`GoGreenVerz app – an innovative solution designed to amplify environmental consciousness and sustainable living. This mobile application seamlessly extends the functionality of the existing GoGreenVerz website, providing users with a dynamic and interactive platform to engage with eco-friendly practices on the go.`,
                icon:<GiCrossedChains style={{width:60 , height:60 , color:'#fff'}} />,
                image:GGV,
                link:'',
            },
        ] 


export { testimonialItems  , services , portfolioSection}