import React, { FC } from 'react'
import securedA from '@/assets/images/secured/secured-a.png'
import securedB from '@/assets/images/secured/secured-b.png'
import securedC from '@/assets/images/secured/secured-c.png'
const SecuredComponent: FC = () => {
  return (
    <section className="secured w-full flex flex-col items-start justify-start 2xl:px-[80px] lg:px-[60px] px-[20px] 2xl:pt-[160px] lg:pt-[120px] pt-[40px] 2xl:pb-[220px] lg:pb-[165px] pb-[70px]">
      <p className="font-[NewEddy] tracking-[1px] 2xl:text-[75px] 2xl:leading-[88px] lg:text-[56px] lg:leading-[66px] text-[29px] leading-[34px]">
        YOUR INVESTMENTS
      </p>
      <p className="font-[NewEddy] tracking-[1px] 2xl:text-[75px] 2xl:leading-[88px] lg:text-[56px] lg:leading-[66px] text-[29px] leading-[34px]">
        ARE SECURED WITH US
      </p>
      <ul className="flex lg:flex-row lg:gap-[10px] flex-col lg:gap-0 gap-[48px] items-start justify-start 2xl:mt-[120px] lg:mt-[90px] mt-[60px]">
        <li className="flex-1">
          <div className="pic 2xl:w-[278px] lg:w-[209px] w-[204px]">
            <img src={securedA} />
          </div>
          <p className="font-[Lato] font-[400] 2xl:mt-[48px] lg:mt-[36px] mt-[24px] 2xl:text-[24px] 2xl:leading-[28px] lg:text-[18px] lg:leading-[21px] text-[16px] leading-[19px] ">
            Expert Authentication
          </p>
          <p className="font-[300] font-[PoppinsLight] 2xl:mt-[24px] lg:mt-[18px] mt-[12px] 2xl:text-[14px] 2xl:leading-[22px] lg:text-[11px] lg:leading-[17px] text-[10px] leading-[16px]">
            We collaborates with renowned appraisers from GurrJohns(or other established appraisal firms)to meticulously
            verify artwork authenticity,condition,and provenance,with its proof of appraisal embedded directly within
            each token
          </p>
        </li>
        <li className="flex-1">
          <div className="pic w-[45px]">
            <img src={securedB} />
          </div>
          <p className="font-[Lato] font-[400] 2xl:mt-[63px] lg:mt-[36px] mt-[24px] 2xl:text-[24px] 2xl:leading-[28px] lg:text-[18px] lg:leading-[21px] text-[16px] leading-[19px] ">
            Comprehensive Insurance
          </p>
          <p className="font-[300] font-[PoppinsLight] 2xl:mt-[24px] lg:mt-[18px] mt-[12px] 2xl:text-[14px] 2xl:leading-[22px] lg:text-[11px] lg:leading-[17px] text-[10px] leading-[16px]">
            We partner with a leading art insurance company to provide tailored coverage against theft damage,and loss
            during transportation,storage and loans
          </p>
        </li>
        <li className="flex-1">
          <div className="pic 2xl:w-[184px] lg:w-[138px] w-[135px]">
            <img src={securedC} />
          </div>
          <p className="font-[Lato] font-[400] 2xl:mt-[48px] lg:mt-[36px] mt-[24px] 2xl:text-[24px] 2xl:leading-[28px] lg:text-[18px] lg:leading-[21px] text-[16px] leading-[19px] ">
            Secure Transportation & Storage
          </p>
          <p className="font-[300] font-[PoppinsLight] 2xl:mt-[24px] lg:mt-[18px] mt-[12px] 2xl:text-[14px] 2xl:leading-[22px] lg:text-[11px] lg:leading-[17px] text-[10px] leading-[16px]">
            We partner with trusted companies like Momart and DIETL International,to ensure secure transportation of the
            artwork from your location to our state-of-the-art storage facility equipped with advanced security systems
            and climate control to guarantee its preservation.
          </p>
        </li>
      </ul>
    </section>
  )
}
export default SecuredComponent
