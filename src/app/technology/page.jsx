import ComingSoon from '@/components/ComingSoon'
import Technology from '@/components/Technology/Technology'
import React from 'react'

const page = () => {
  return (
    <section className=" min-h-screen bg-cover bg-no-repeat bg-[url('/starter-code/assets/technology/background-technology-mobile.jpg')] md:bg-[url('/starter-code/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/starter-code/assets/technology/background-technology-desktop.jpg')]">
       <div className="pt-[74.4px]  ">
        <Technology/>
        {/* <ComingSoon /> */}
      </div>
    </section>
  )
}

export default page