import React from 'react'
import { contactusbg, phone } from '../assets'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading'
import { PaperAirplaneIcon } from "@heroicons/react/outline";
import './Contact.css'
import {socialNetwork} from '../Constants'
function ContactUs() {
  return (
    <div id="contact" className='flex flex-col justify-center mt-5'>
        <div className='flex flex-row  justify-center '>
        <SectionHeading firstTitle={AppText.Contact} secondTitle={AppText.Us}/>
        <img src={phone} className="w-[80px] ml-4"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
            <img src={contactusbg} className="w-[300px] mr-10"/>
            <div className='contact'>
            {socialNetwork.map((item,index)=>(
            
              <a href={item.links} target='_blank'>
                <div className='contact-info'>
                <img src={item.logo} className="w-[40px]"/>
                <span>{item.name}</span>
                </div>
                </a>
        ))}
              </div>
           
           
        </div>
    </div>
  )
}

export default ContactUs