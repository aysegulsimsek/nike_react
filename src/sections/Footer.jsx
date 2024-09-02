import React, { useState } from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { Link } from 'react-router-dom'
import { copyrightSign } from '../assets/icons'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

const Footer = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <footer className='max-container select-none'>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} /></a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards.</p>
          <div className="flex item-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <Link to={icon.href} target='_blank' key={icon.alt}>
              <div  className='flex justify-center items-center w-12 h-12 bg-white rounded-full hover:shadow-sm hover:shadow-slate-100 cursor-pointer'>
                <img src={icon.src} alt={icon.alt} width={24} height={24}/>
              </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-montserrat text-2xl font-medium mb-6'>{section.title} </h4>
              <ul>
                {section.links.map((link) => (
                  <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-50 cursor-pointer select-text' key={link.name}>
                    <a href={link.link}>{link.name} </a>
                  </li>
                ))}
           </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="copyrightSign"
            width={20}
            height={20} className='rounded-full m-0' />
          <p>Copyright. All rights reserved.</p>
        </div>

        <p onClick={handleClickOpen} className='font-montserrat cursor-pointer'>
        Terms & Conditions
      </p>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Terms & Conditions</DialogTitle>
          <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText sx={{ px: '2rem', fontSize: '1rem', lineHeight: '1.5' }}>
  <p><strong>Last updated:</strong> 09.02.2024</p>

  <p>Welcome to <em>Nike</em>!</p>

  <p>
    These terms and conditions outline the rules and regulations for the use of Nike's website, located at 
    <a href="[yourwebsite.com]" style={{ color: 'inherit', textDecoration: 'underline' }}>yourwebsite.com</a>.
  </p>

  <p>
    By accessing this website, we assume you accept these terms and conditions. Do not continue to use 
    <strong> Nike</strong> if you do not agree to take all of the terms and conditions stated on this page.
  </p>

  <h3 style={{ marginTop: '1.5rem' }}>Cookies:</h3>
  <p>
    We employ the use of cookies. By accessing <strong>Nike</strong>, you agreed to use cookies in agreement 
    with <strong>Nike</strong>'s 
    <a href="[link-to-privacy-policy]" style={{ color: 'inherit', textDecoration: 'underline' }}> Privacy Policy</a>.
  </p>

  <h3 style={{ marginTop: '1.5rem' }}>License:</h3>
  <p>
    Unless otherwise stated, <strong>Nike</strong> and/or its licensors own the intellectual property rights 
    for all material on <strong>Nike</strong>. All intellectual property rights are reserved. You may access 
    this from <strong>Nike</strong> for your own personal use subjected to restrictions set in these terms and conditions.
  </p>

  <h4 style={{ marginTop: '1rem' }}>You must not:</h4>
  <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>Republish material from <strong>Nike</strong></li>
    <li>Sell, rent, or sub-license material from <strong>Nike</strong></li>
    <li>Reproduce, duplicate, or copy material from <strong>Nike</strong></li>
    <li>Redistribute content from <strong>Nike</strong></li>
  </ul>

  <h3 style={{ marginTop: '1.5rem' }}>User Comments:</h3>
  <p>
    Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. 
    <strong>Nike</strong> does not filter, edit, publish, or review comments prior to their presence on the website. Comments do not 
    reflect the views and opinions of <strong>Nike</strong>, its agents, or affiliates. Comments reflect the views and opinions of 
    the person who post their views and opinions. To the extent permitted by applicable laws, <strong>Nike</strong> shall not be liable 
    for the comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or 
    appearance of the comments on this website.
  </p>

  <p>
    <strong>Nike</strong> reserves the right to monitor all comments and to remove any comments that can be considered inappropriate, 
    offensive, or causes a breach of these terms and conditions.
  </p>

  <h4 style={{ marginTop: '1rem' }}>You warrant and represent that:</h4>
  <ul style={{ marginLeft: '1.5rem', listStyleType: 'disc' }}>
    <li>You are entitled to post the comments on our website and have all necessary licenses and consents to do so;</li>
    <li>The comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
    <li>The comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy;</li>
    <li>The comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
  </ul>

  <p>
    You hereby grant <strong>Nike</strong> a non-exclusive license to use, reproduce, edit, and authorize others to use, 
    reproduce, and edit any of your comments in any and all forms, formats, or media.
  </p>
</DialogContentText>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Accept</Button>
          </DialogActions>
        </Dialog>
      )}
      </div>
    </footer>
  )
}

export default Footer
