import React, { FC } from 'react'
const FooterComponent: FC = () => {
  return (
    <footer className="w-full bg-[#9c9c9c] text-[#FFFFFF] flex flex-col items-start justify-start 2xl:px-[80px] lg:px-[60px] px-[20px] 2xl:pt-[102px] lg:pt-[77px] pt-[50px] 2xl:pb-[126px] lg:pb-[95px] pb-[36px]">
      <p className="title font-[NewEddy] 2xl:text-[58px] 2xl:leading-[68px] lg:text-[44px] lg:leading-[51px] text-[29px] leading-[34px] tracking-[1px]">
        READY TO OWN YOUR PIECE OF HISTORY?
      </p>
      <form className="2xl:mt-[50px] relative lg:mt-[38px] mt-[41px]">
        <input
          className="border-white bg-[#9c9c9c] font-[PoppinsRegular] font-[400] 2xl:text-[24px] 2xl:leading-[28px] lg:text-[18px] lg:leading-[21px] text-[12px] leading-[14px] 2xl:w-[615px] lg:w-[461px] w-[308px] border rounded-[40px] 2xl:py-[22px] lg:py-[17px] py-[11px] 2xl:pl-[45px] lg:pl-[34px] pl-[23px]"
          type="text"
          placeholder="Johndoe@gmail.com"
        />
        <button
          className="absolute text-[#000000] bg-[#E4FF1A] rounded-[32px] 2xl:px-[45px] lg:px-[34px] px-[22px] 2xl:py-[21px] lg:py-[16px] py-[10px] 2xl:text-[18px] 2xl:leading-[22px] lg:text-[14px] lg:leading-[16px] text-[9px] leading-[11px]  font-[400] font-[Lato] 2xl:right-[8px] lg:right-[6px] right-[4px] top-[50%] translate-y-[-50%]"
          type="submit"
        >
          Submit
        </button>
      </form>
      <p className="alert font-[PoppinsRegular] font-[400] 2xl:text-[16px] 2xl:leading-[19px] lg:text-[12px] lg:leading-[14px] text-[12px] leading-[14px]  2xl:mt-[22px] lg:mt-[17px] mt-[11px]">
        Join the waitlist & Get Informed when New Artworks are Avaliable!
      </p>
    </footer>
  )
}
export default FooterComponent
