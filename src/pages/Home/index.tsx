import React, { FC, useEffect, useRef, useState } from 'react'
import './index.scss'
import logo from '@/assets/images/logo.png'
// seciton-secured
import securedA from '@/assets/images/secured/secured-a.png'
import securedB from '@/assets/images/secured/secured-b.png'
import securedC from '@/assets/images/secured/secured-c.png'
// section-earn
import roundA from '@/assets/images/earn/round-a.png'
import roundB from '@/assets/images/earn/round-b.png'
import startA from '@/assets/images/earn/start-a.png'
import startB from '@/assets/images/earn/start-b.png'
import doorA from '@/assets/images/earn/door-a.png'
import doorB from '@/assets/images/earn/door-b.png'
// section-invest
import pixA from '@/assets/images/invest/pix-a.png'
import pixB from '@/assets/images/invest/pix-b.png'
import pixC from '@/assets/images/invest/pix-c.png'
import pixD from '@/assets/images/invest/pix-d.png'
import pixE from '@/assets/images/invest/pix-e.png'
import pixF from '@/assets/images/invest/pix-f.png'
import pixG from '@/assets/images/invest/pix-g.png'
import pixH from '@/assets/images/invest/pix-h.png'
import pixI from '@/assets/images/invest/pix-i.png'
// seciton-explore
import picA from '@/assets/images/explore/pic-a.png'
import picB from '@/assets/images/explore/pic-b.png'
import picC from '@/assets/images/explore/pic-c.png'
import picD from '@/assets/images/explore/pic-d.png'
// section-data
import dataA from '@/assets/images/data/data-a.png'
import movePic from '@/assets/images/move-pic.png'
// section-about
import aboutA from '@/assets/images/about/about-a.png'
import aboutB from '@/assets/images/about/about-b.png'
import aboutC from '@/assets/images/about/about-c.png'
import aboutD from '@/assets/images/about/about-d.png'
import aboutE from '@/assets/images/about/about-e.png'
import aboutF from '@/assets/images/about/about-f.png'
import aboutG from '@/assets/images/about/about-g.png'
import aboutH from '@/assets/images/about/about-h.png'
const Home: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className="homeContainer w-full">
      <header className="fixed w-full flex justify-between items-center lg:pt-[60px] 2xl:pt-[80px] pt-[30px] 2xl:px-[80px] lg:px-[60px] px-[20px]">
        <div className="logo lg:w-[223px] lg:h-[43px] w-[145px] h-[28px]">
          <img className="lg:w-[223px] lg:h-[43px] w-[145px] h-[28px]" src={logo} alt="Arttoo" />
        </div>
        <nav className="navList hidden lg:block">
          <ul className="flex justify-between items-center 2xl:gap-x-[106px] lg:gap-x-[95px] font-[500] font-[PoppinsMedium] leading-[21px] text-[18px] text-[#FFFFFF]">
            <li>
              <a href="#">ARTWORKS</a>
            </li>
            <li>
              <a href="#">LEARN</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </nav>
        <div className="lg:hidden flex items-center justify-center">
          <button type="button" onClick={() => setOpenMenu(true)}>
            <svg
              className="w-[28px] h-[28px] text-[#FFFFFF]"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        {/* mobile */}
        <div
          className={`fixed inset-y-0 right-0 z-50 w-full bg-white overflow-y-auto py-[30px] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 lg:hidden ${
            openMenu ? 'block' : 'hidden'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between  px-[20px]">
            <a href="#">
              <img className="lg:w-[223px] lg:h-[43px] w-[145px] h-[28px]" src={logo} alt="Arttoo" />
            </a>
            <button type="button" className="text-gray-700" onClick={() => setOpenMenu(false)}>
              <span className="sr-only">Close menu</span>
              <svg
                className="w-[28px] h-[28px] text-[#9c9c9c]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-[30px] px-[20px] flow-root">
            <a
              href="#"
              className="font-[PoppinsMedium] font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]"
            >
              ARTWORKS
            </a>
            <a
              href="#"
              className="font-[PoppinsMedium] font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]"
            >
              LEARN
            </a>
            <a
              href="#"
              className="font-[PoppinsMedium] font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="font-[PoppinsMedium] font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </header>
      <main className="w-full">
        <section className="banner flex w-full flex-col items-start justify-start 2xl:pt-[123px] lg:pt-[103px] pt-[58px] pb-[100px] 2xl:pb-[327px] lg:pb-[245px] 2xl:px-[80px] lg:px-[60px] px-[20px] bg-[#9c9c9c]">
          <p className="font-[NewEddy] text-[32px] leading-[38px] tracking-[2px] lg:tracking-[10px] 2xl:text-[132px] 2xl:leading[155px] lg:text-[99px] lg:leading-[116px] text-[#FFFFFF] lg:pt-[77px] 2xl:pt-[103px] pt-[112px]">
            OWN A PIECE OF
          </p>
          <p className="font-[NewEddy] text-[32px] leading-[38px] tracking-[2px] lg:tracking-[10px] 2xl:text-[132px] 2xl:leading[155px] lg:text-[99px] lg:leading-[116px] text-[#FFFFFF]">
            HISTORY WITH ARTTOO
          </p>
          <p className="font-[PoppinsRegular] font-[400] text-[12px] leading-[14px] lg:text-[16px] lg:leading-[19px] pt-[28px] lg:pt-[19px] text-[#FFFFFF]">
            Invest in renowned masterpieces with just a fraction of its cost
          </p>
          <p className="font-[Lato] flex self-center lg:self-start  items-center justify-center lg:mt-[125px] mt-[35px] text-[14px] leading-[16px] lg:text-[18px] lg:leading-[21px] font-[400] text-[#000000] bg-[#E4FF1A] rounded-[978px] lg:px-[52px] lg:py-[22px] px-[38px] py-[16px]">
            LEARN MORE
          </p>
        </section>
        <section className="about flex w-full flex-col items-start justify-start px-[20px] lg:px-[60px] 2xl:px-[80px] 2xl:pt-[180px] lg:pt-[135px] pt-[90px] 2xl:pb-[309px] lg:pb-[232px] pb-[90px]">
          <p className="2xl:pl-[233px] lg:pl-[100px] pl-[29px] font-[NewEddy] font-[500] text-[18px] leading-[21px] lg:text-[56px] lg:leading-[66px] 2xl:text-[75px] 2xl:leading-[88px]">
            ART IS THE VISUAL PROOF OF HISTORY
          </p>
          <p className="font-[500] text-[18px] font-[NewEddy] leading-[21px] lg:text-[56px] lg:leading-[66px] 2xl:text-[75px] 2xl:leading-[88px]">
            CONSENSUS MECHANISM FOR HUMANITY
          </p>
          <div className="content w-full lg:pt-[27px] pt-[16px] flex lg:flex-row lg:gap-[100px] flex-col lg:items-center items-start justify-center">
            <ul className="2xl:ml-[80px] lg:ml-[60px] ml-0 flex items-start justify-start gap-[6px] lg:gap-[12px] 2xl:gap-[16px]">
              <li>
                <img className="w-[28px] lg:w-[56px] lg:h-[389px] h-[195px] 2xl:w-[75px] 2xl:h-[518px]" src={aboutA} />
              </li>
              <li>
                <img
                  className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px] mt-[-27px] lg:mt-[-73px] relative z-[-1]"
                  src={aboutB}
                />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px]" src={aboutC} />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px]" src={aboutD} />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px]" src={aboutE} />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px]" src={aboutF} />
              </li>
              <li>
                <img
                  className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px] lg:mt-[195px] mt-[74px] top-[74px]"
                  src={aboutG}
                />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[56px] lg:h-[389px] 2xl:w-[75px] 2xl:h-[518px]" src={aboutH} />
              </li>
            </ul>
            <div className="floor-1 flex-1 mt-[48px] lg:mt-[0] flex flex-col items-center justify-center">
              <p className="inline-block font-[NewEddy] 2xl:text-[40px] 2xl:leading-[47px] lg:text-[30px] lg:leading-[35px] text-[20px] leading-[23px]">
                Arttoo isn&apos;t just about returns
              </p>
              <p className="font-[300] mt-[12px] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px] inline-block font-[PoppinsRegular]">
                It&apos;s about unlocking a world of possibilities. Become part of a vibrant art community, connect with
                a timeless piece of culture, and watch your investment grow alongside your passion.
              </p>
              <p className="font-[300] mt-[12px] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px] font-[PoppinsRegular]">
                Start investing in fractional shares of legacy masterpieces via a collection curated by
                ex-Sotheby&apos;s and Christie&apos;s specialists, with no auction house markups, no gallery markups, no
                hidden true-up fees.
              </p>
              <p className="font-[300] mt-[16px] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px] font-[PoppinsRegular]">
                Also, no need to track provenance anymore, all transactions are secure, transparent, and regulated
                through the beauty of blockchain technologies.
              </p>
            </div>
          </div>
        </section>
        <section className="data flex lg:flex-row flex-col items-start justify-start 2xl:mx-[40px] lg:mx-[30px] mx-[10px] 2xl:px-[40px] lg:px-[30px] px-[10px] 2xl:pt-[71px] lg:pt-[53px] pt-[20px] 2xl:pb-[180px] lg:pb-[135px] pb-[48px] bg-[#eeeeee]">
          <div className="left w-full flex-1 flex flex-col items-start justify-start">
            <img src={dataA} className="lg:max-w-[226px] max-w-[85px] h-[auto]" />
            <ul className="self-start 2xl:pt-[92px] lg:pt-[69px] pt-[24px] lg:pl-0 pl-[30px] lg:self-end">
              <li>
                <p className="font-[NewEddy] 2xl:text-[60px] 2xl:leading-[70px] lg:text-[45px] lg:leading-[53px] text-[20px] leading-[23px]">
                  $11.8 BILLION
                </p>
                <p className="font-[300] font-[PoppinsRegular] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px]">
                  in online-only sales volume,doubled since 2019
                </p>
              </li>
              <li className="2xl:mt-[63px] lg:mt-[47px] mt-[16px]">
                <p className="font-[NewEddy] 2xl:text-[60px] 2xl:leading-[70px] lg:text-[45px] lg:leading-[53px] text-[20px] leading-[23px]">
                  14.9% CAGR
                </p>
                <p className="font-[300] font-[PoppinsRegular] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px]">
                  between 2009-2022 on Ultra-High End Art Index
                </p>
              </li>
              <li className="2xl:mt-[63px] lg:mt-[47px] mt-[16px]">
                <p className="font-[NewEddy] 2xl:text-[60px] 2xl:leading-[70px] lg:text-[45px] lg:leading-[53px] text-[20px] leading-[23px]">
                  ~19% AVERAGE
                </p>
                <p className="font-[300] font-[PoppinsRegular] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px]">
                  allocation in art for HNW collectors, with ~30% for collectors &gt;$50m in net worth
                </p>
              </li>
            </ul>
          </div>
          <div className="right w-full flex-1 flex lg:flex-row lg:gap-[30px] flex-col lg:items-end justify-start lg:pl-0 pl-[30px]">
            <img
              className="lg:mt-[-137px] mt-[40px] 2xl:max-w-[552px] lg:max-w-[414px] max-w-[275px] h-[auto]"
              src={movePic}
            />
            <div className="desc">
              <p className="font-[PoppinsRegular] mt-[17px] lg:mt-0 font-[300] lg:text-[20px] text-[10px]">Forbes</p>
              <p className="font-[300] font-[PoppinsRegular] lg:pt-[19px] pt-[10px] lg:text-[16px] lg:leading-[26px] text-[8px] leading-[13px]">
                Monet Nymphéas sold at
              </p>
              <p className="font-[NewEddy] lg:text-[32px] lg:leading-[38px] text-[16px] leading-[19px]">$44.6M</p>
            </div>
          </div>
        </section>
        <section className="explore w-full flex flex-col items-center justify-center 2xl:pt-[220px] lg:pt-[165px] pt-[245px]">
          <p className="font-[PoppinsRegular] lg:text-[22px] lg:leading-[26px] text-[12px] leading-[14px]">
            Own a Piece of History in 3 Simple Steps
          </p>
          <p className="font-[PoppinsRegular] lg:text-[16px] font-[400] lg:leading-[19px] text-[12px] leading-[14px] 2xl:pt-[117px] lg:pt-[88px] pt-[45px]">
            001<span className="text-[#AAAAAA]"> / 003</span>
          </p>
          <p className="font-[NewEddy] lg:text-[100px] lg:leading-[117px] text-[38px] leading-[44px]">EXPLORE</p>
          <p className="lg:text-[24px] lg:leading-[28px] text-[12px] leading-[14px] font-[PoppinsRegular] font-[400] 2xl:pt-[25px] lg:pt-[19px] pt-[10px] 2xl:px-[40px] text-center lg:px-[30px] px-[10px]">
            Browse a selection of iconic masterpieces carefully handpicked by our expert curators from Sotheby&apos;s
            and Christie&apos;s.
          </p>
          <ul className="flex items-center overflow-hidden justify-center lg:gap-[64px] 2xl:gap-[70px] gap-[29px] 2xl:pt-[200px] lg:pt-[150px] pt-[178px]">
            <li className="lg:max-w-[318px] shrink-0 2xl:max-w-[424px] lg:h-[auto] max-w-[159px]">
              <img src={picA} />
            </li>
            <li className="lg:max-w-[318px]	 shrink-0 2xl:max-w-[424px] lg:h-[auto] max-w-[159px]">
              <img src={picB} />
              <img className="2xl:mt-[113px] lg:mt-[85px] mt-[29px]" src={picC} />
            </li>
            <li className="lg:max-w-[318px]  shrink-0 2xl:max-w-[424px] lg:h-[auto] max-w-[159px]">
              <img src={picD} />
            </li>
          </ul>
        </section>
        <section className="invest w-full">
          <div className="left">
            <div className="picList">
              <img src={pixA} />
              <img src={pixB} />
              <img src={pixC} />
              <img src={pixD} />
              <img src={pixE} />
              <img src={pixF} />
              <img src={pixG} />
              <img src={pixH} />
              <img src={pixI} />
            </div>
            <div className="desc">
              <p>Nympheas</p>
              <p>Claude Monet</p>
              <p>33,850,000 USD</p>
            </div>
          </div>
          <div className="right">
            <p>002/003</p>
            <p>INVEST</p>
            <p>Invest in a fraction of masterpieces for a fraction of its total cost via our platform</p>
          </div>
        </section>
        <section className="earn">
          <div className="left">
            <p>003/003</p>
            <p>EARN</p>
            <p>
              Watch your investment grow in value through exhibitions of museums and galleries,NFT merchandise and so
              much more.
            </p>
          </div>
          <div className="right">
            <img src={roundA} />
            <img src={roundB} />
            <img src={startA} />
            <img src={startB} />
            <img src={doorA} />
            <img src={doorB} />
          </div>
        </section>
        <section className="value w-full">
          <ul className="textList">
            <li>
              <p>Henri Matisse</p>
              <p>Michelangelo Merisi da Caravaggio</p>
              <p>Tiziano Vecellio</p>
              <p>Rembrandt Harmenszoon van Rijn</p>
            </li>
            <li>
              <p>Vincent Willem van Gogh</p>
              <p>Paul Cézanne</p>
              <p>Johannes Vermeer</p>
              <p>Rembrandt Harmenszoon van Rijn</p>
            </li>
            <li>
              <p>Giotto di Bondone</p>
              <p>Rembrandt Harmenszoon van Rijn</p>
              <p>Jackson Pollock</p>
              <p>Leonardo di ser Piero da Vinci</p>
            </li>
          </ul>
          <p>Total Locked Value</p>
          <p>100,000,000 USD</p>
          <p>Explore Artworks</p>
        </section>
        <section className="secured w-full">
          <p>YOUR INVESTMENTS ARE SECURED WITH US</p>
          <ul>
            <li>
              <div className="pic">
                <img src={securedA} />
              </div>
              <p>Expert Authentication</p>
              <p>
                We collaborates with renowned appraisers from GurrJohns(or other established appraisal firms)to
                meticulously verify artwork authenticity,condition,and provenance,with its proof of appraisal embedded
                directly within each token
              </p>
            </li>
            <li>
              <div className="pic">
                <img src={securedB} />
              </div>
              <p>Comprehensive Insurance</p>
              <p>
                We partner with a leading art insurance company to provide tailored coverage against theft damage,and
                loss during transportation,storage and loans
              </p>
            </li>
            <li>
              <div className="pic">
                <img src={securedC} />
              </div>
              <p>Secure Transportation & Storage</p>
              <p>
                We partner with trusted companies like Momart and DIETL International,to ensure secure transportation of
                the artwork from your location to our state-of-the-art storage facility equipped with advanced security
                systems and climate control to guarantee its preservation.
              </p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="w-full">
        <p className="title">READY TO OWN YOUR PIECE OF HISTORY?</p>
        <form>
          <input type="text" placeholder="Johndoe@gmail.com" />
          <button type="submit">submit</button>
        </form>
        <p className="alert">Join the waitlist & Get Informed when New Artworks are Avaliable!</p>
      </footer>
    </div>
  )
}

export default Home
