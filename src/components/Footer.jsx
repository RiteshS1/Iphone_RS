import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 mt-10">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to shop: {' '}
            <span className="underline text-blue">
            Find an Apple Store {' '}
            </span>
            or {' '}
            <span className="underline text-blue">
            other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 000800-040-1966
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Apple Inc. All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
       <div className="text-lg text-coral-red font-semibold  mt-5 flex justify-center hover:text-2xl transition-all">
<p> Made with 💖 by  <a href="https://linkedin.com/in/ritesh-sharma-8477a424a" className="hover:text-gray-400"> RS</a></p>
 </div>
      
    </footer>
  )
}

export default Footer

