import PhoneIcon from '@mui/icons-material/Phone'
import MailIcon from '@mui/icons-material/Mail'
import PlaceIcon from '@mui/icons-material/Place'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

import logo from "../assets/logo.png"

const Footer = () => {
    const aboutArr = ['About Alcoglaze', 'Services', 'Blog', 'Resources', 'Careers']

    const services = {
        'Digital Marketing Services': [
          'SEO Company Bangalore',
          'Social Media Marketing Bangalore',
          'Pay Per Click Services in Bangalore',
          'Email Marketing Services in Bangalore',
          'Marketing Automation Bangalore',
          'SEO Content Writing Bangalore'
        ],
        'Design Services': [
          'Social Media Creatives Bangalore',
          'Powerpoint Design Services',
          'Video Creation Bangalore',
          'Best Website Design Agency',
          'Digital Advertisement Design Bangalore',
          'Logo Design Bangalore',
          'Stationary Design Bangalore',
          'Flyers/Brochures Design Bangalore'
        ],
        'Professional Writing Services': [
          'Blog Content Creation',
          'Advertisement Content Bangalore',
          'Content Writing Agency',
          'Presentation Deck Content Bangalore',
          'White Paper Content Bangalore',
          'Case Study Content Bangalore',
          'Website Content Creation'
        ]
    }

    return (
        <div className='bg-black text-white pt-[3%] pb-[0.3%] pl-[20%] pr-[20%] h-[85vh] w-[100vw] space-y-10'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10 items-start'>
                <div className='space-y-4'>
                    <div className='flex items-start space-x-3'>
                        <PhoneIcon className='text-teal-500'/>
                        <span className="text-sm leading-relaxed">+919916865926</span>
                    </div>
                    <div className="flex items-start space-x-3">
                        <MailIcon className="text-teal-500" />
                        <span className="text-sm leading-relaxed" >MediaPixelflo@gmail.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                        <PlaceIcon className="text-teal-500 shrink-0"/>
                        <span className="text-sm leading-relaxed">
                            Pixelflo Media, Shop 4, Above 
                            Dalvkot Medical Store, Kodigehalli Main
                            Road, K R Puram, Bangalore - 560036
                        </span>
                    </div>
                </div>

                <div className="space-y-2">
                    {aboutArr.map((title, index) => (
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-teal-500 transition-colors" key={index}>
                            <PlayArrowIcon className="text-teal-500" />
                            <span className="text-sm">{title}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center self-end md:items-end space-y-4">
                    <div className="flex flex-col justify-end align-start ">
                        <div className="relative flex flex-row h-[50%] right-[6.5%]">
                            <img src={logo} className="h-30 self-center" />
                            <div className="self-center">
                                <h1 className="font-bold text-4xl">Alcoglaze</h1>
                                <h3 className="text-1xl">Building Facia Decor</h3>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex space-x-4 text-xl self-center justify-between w-[75%] mt-0 bottom-7">
                        <LinkedInIcon className="cursor-pointer hover:text-teal-500 transition-colors scale-130" fontSize='large'/>
                        <FacebookIcon className="cursor-pointer hover:text-teal-500 transition-colors scale-130" fontSize='large'/>
                        <InstagramIcon 
                            className="cursor-pointer hover:text-teal-500 transition-colors scale-130"
                            onClick={() => window.open('https://www.instagram.com/pixelflomedia', '_blank')}
                            fontSize='large'
                        />
                        <XIcon className="cursor-pointer hover:text-teal-500 transition-colors scale-130" fontSize='large'/>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 justify-between pt-8 border-gray-800">
                {Object.entries(services).map(([category, items], index) => (
                    <div key={index}>
                        <span className="block font-semibold mb-3 text-sm">{category}:</span>
                        <div className="flex flex-col space-y-1">
                            {items.map((service, idx) => (
                                <span key={idx} className="text-sm hover:text-teal-500 cursor-pointer transition-colors">
                                    {service}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <h3 className='mt-[15%] place-self-center text-gray-500'>All copyrights belong to @PixelFloMedia est. 2025</h3>
        </div>
    )
}

export default Footer
