import React, { FC, useEffect, useRef, useState } from 'react'
import './index.scss'
import { PAGInit } from 'libpag'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip' // 跟变化相关的特效
import { ScrollTrigger } from 'gsap/ScrollTrigger' // 跟滚动相关的特效
import logo from '@/assets/images/logo.png'
import mobileLogo from '@/assets/images/mobile-logo.png'
// section-earn
import roundA from '@/assets/images/earn/round-a.png'
import starA from '@/assets/images/earn/star-a.png'
import starB from '@/assets/images/earn/star-b.png'
import starC from '@/assets/images/earn/star-c.png'
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
import forbes from '@/assets/images/data/forbes.png'
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
gsap.registerPlugin(useGSAP, Flip, ScrollTrigger)
import ValueComponent from './components/Value'
import FooterComponet from '@/components/Footer'
import SecuredComponent from './components/Secured'
const Home: FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
  const containerRef = useRef(null)
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024)
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    PAGInit({ locateFile: () => './libpag.wasm' }).then((PAG) => {
      const url = './banner.pag'
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then(async (buffer) => {
          const pagFile = await PAG.PAGFile.load(buffer)
          const canvas: any = document.getElementById('pag')
          const styleDeclaration = window.getComputedStyle(canvas, null)
          // Create PAGView.
          const pagView: any = await PAG.PAGView.init(pagFile, canvas, { useScale: false })
          pagView.setRepeatCount(0)
          await pagView.play()
        })
    })
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  useGSAP(
    () => {
      const container: any = containerRef.current
    },
    { scope: containerRef, dependencies: [isMobile] }
  )
  return (
    <div className="homeContainer w-full" ref={containerRef}>
      <header className="fixed z-[10] w-full flex justify-between items-center lg:pt-[60px] 2xl:pt-[80px] pt-[30px] 2xl:px-[80px] lg:px-[60px] px-[20px]">
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
          className={`fixed inset-y-0 right-0 z-50 w-full bg-white overflow-y-auto py-[30px] sm:max-w-[40%] sm:ring-1 sm:ring-gray-900/10 lg:hidden ${
            openMenu ? 'block' : 'hidden'
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between  px-[20px]">
            <a href="#">
              <img className="lg:w-[223px] lg:h-[43px] w-[145px] h-[28px]" src={mobileLogo} alt="Arttoo" />
            </a>
            <button type="button" className="text-gray-700" onClick={() => setOpenMenu(false)}>
              <span className="sr-only">Close menu</span>
              <svg
                className="w-[28px] h-[28px] text-[#000000]"
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
          <div className="mt-[48px] px-[20px] flow-root">
            <a href="#" className="font-[PoppinsMedium] font-[400]  leading-[38px] text-[32px] block  text-[#000000]">
              ARTWORKS
            </a>
            <a
              href="#"
              className="font-[PoppinsMedium] font-[400] mt-[40px] leading-[38px] text-[32px] block  text-[#000000]"
            >
              LEARN
            </a>
            <a
              href="#"
              className="font-[PoppinsMedium] font-[400] mt-[40px] leading-[38px] text-[32px] block  text-[#000000]"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="font-[PoppinsMedium] mt-[40px] font-[400] leading-[38px] text-[32px] block  text-[#000000]"
            >
              CONTACT US
            </a>
          </div>
        </div>
      </header>
      <main className="w-full">
        <section className="banner relative flex w-full flex-col items-start justify-start 2xl:pt-[123px] lg:pt-[103px] pt-[58px] pb-[100px] 2xl:pb-[327px] lg:pb-[245px] 2xl:px-[80px] lg:px-[60px] px-[20px] bg-[#9c9c9c]">
          <p className="font-[NewEddy] text-[32px] leading-[38px] tracking-[2px] lg:tracking-[10px] 2xl:text-[132px] 2xl:leading-[155px] lg:text-[99px] lg:leading-[116px] text-[#FFFFFF] lg:pt-[77px] 2xl:pt-[103px] pt-[112px]">
            OWN A PIECE OF
          </p>
          <p className="font-[NewEddy] text-[32px] leading-[38px] tracking-[2px] lg:tracking-[10px] 2xl:text-[132px] 2xl:leading-[155px] lg:text-[99px] lg:leading-[116px] text-[#FFFFFF]">
            HISTORY WITH ARTTOO
          </p>
          <p className="font-[PoppinsRegular] font-[400] text-[12px] leading-[14px] lg:text-[16px] lg:leading-[19px] pt-[28px] lg:pt-[19px] text-[#FFFFFF]">
            Invest in renowned masterpieces with just a fraction of its cost
          </p>
          <div className="lg:absolute mt-[30px] lg:right-[0] lg:bottom-[0] canvasContainer 2xl:w-[1144px] 2xl:h-[646px] lg:w-[858px] lg:h-[484px] w-full h-[auto]">
            <canvas id="pag"></canvas>
          </div>
          <p className="font-[Lato] flex self-center lg:self-start  items-center justify-center lg:mt-[125px] mt-[35px] text-[14px] leading-[16px] lg:text-[18px] lg:leading-[21px] font-[400] text-[#000000] bg-[#E4FF1A] rounded-[978px] lg:px-[52px] lg:py-[22px] px-[38px] py-[16px]">
            LEARN MORE
          </p>
        </section>
        <section className="about flex w-full flex-col items-start justify-start px-[20px] lg:px-[60px] 2xl:px-[80px] 2xl:pt-[180px] lg:pt-[135px] pt-[90px] 2xl:pb-[309px] lg:pb-[232px] pb-[90px]">
          <p className="2xl:pl-[233px] lg:pl-[100px] pl-[29px] font-[NewEddy] font-[500] text-[18px] leading-[21px] lg:text-[40px] lg:leading-[48px] 2xl:text-[75px] 2xl:leading-[88px]">
            ART IS THE VISUAL PROOF OF HISTORY
          </p>
          <p className="font-[500] text-[18px] font-[NewEddy] leading-[21px] lg:text-[40px] lg:leading-[48px] 2xl:text-[75px] 2xl:leading-[88px]">
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
            <div className="floor-1 flex-1 mt-[48px] lg:mt-[0] flex flex-col items-start justify-center">
              <p className="font-[NewEddy] 2xl:text-[40px] 2xl:leading-[47px] lg:text-[20px] lg:leading-[24px] text-[20px] leading-[23px]">
                Arttoo isn&apos;t just about returns
              </p>
              <p className="font-[300] mt-[32px] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px] inline-block font-[PoppinsRegular]">
                It&apos;s about unlocking a world of possibilities. Become part of a vibrant art community, connect with
                a timeless piece of culture, and watch your investment grow alongside your passion.
              </p>
              <p className="font-[300] mt-[32px] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px] font-[PoppinsRegular]">
                Start investing in fractional shares of legacy masterpieces via a collection curated by
                ex-Sotheby&apos;s and Christie&apos;s specialists, with no auction house markups, no gallery markups, no
                hidden true-up fees.
              </p>
              <p className="font-[300] mt-[32px] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px] font-[PoppinsRegular]">
                Also, no need to track provenance anymore, all transactions are secure, transparent, and regulated
                through the beauty of blockchain technologies.
              </p>
            </div>
          </div>
        </section>
        <section className="data flex lg:flex-row flex-col lg:gap-[40px] items-center justify-start 2xl:mx-[40px] lg:mx-[30px] mx-[10px] 2xl:px-[40px] lg:px-[30px] px-[10px] 2xl:pt-[71px] lg:pt-[53px] pt-[20px] 2xl:pb-[180px] lg:pb-[135px] pb-[48px] bg-[#eeeeee]">
          <div className="left w-full flex-1 flex flex-col items-start justify-start">
            <img src={dataA} className="lg:max-w-[226px] max-w-[85px] h-[auto]" />
            <ul className="self-start 2xl:pt-[92px] lg:pt-[69px] pt-[24px] lg:pl-[15%] pl-[30px] lg:self-start">
              <li>
                <p className="font-[NewEddy] 2xl:text-[60px] 2xl:leading-[70px] lg:text-[45px] lg:leading-[53px] text-[20px] leading-[23px]">
                  $11.8 BILLION
                </p>
                <p className="font-[300] font-[PoppinsLight] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px]">
                  in online-only sales volume,doubled since 2019
                </p>
              </li>
              <li className="2xl:mt-[63px] lg:mt-[47px] mt-[16px]">
                <p className="font-[NewEddy] 2xl:text-[60px] 2xl:leading-[70px] lg:text-[45px] lg:leading-[53px] text-[20px] leading-[23px]">
                  14.9% CAGR
                </p>
                <p className="font-[300] font-[PoppinsLight] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px]">
                  between 2009-2022 on Ultra-High End Art Index
                </p>
              </li>
              <li className="2xl:mt-[63px] lg:mt-[47px] mt-[16px]">
                <p className="font-[NewEddy] 2xl:text-[60px] 2xl:leading-[70px] lg:text-[45px] lg:leading-[53px] text-[20px] leading-[23px]">
                  ~19% AVERAGE
                </p>
                <p className="font-[300] font-[PoppinsLight] 2xl:text-[16px] 2xl:leading-[26px] lg:text-[12px] lg:leading-[19px] text-[10px] leading-[16px]">
                  allocation in art for HNW collectors, with ~30% for collectors &gt;$50m in net worth
                </p>
              </li>
            </ul>
          </div>
          <div className="right w-full flex-1 flex lg:flex-row lg:gap-[30px] flex-col lg:items-end justify-start lg:pl-0 pl-[30px]">
            <img
              className="mt-[40px] lg:mt-0 2xl:max-w-[408px] lg:max-w-[408px] max-w-[275px] h-[auto]"
              src={movePic}
            />
            <div className="desc">
              <img className="lg:mt-0 mt-[18px]" src={forbes} />
              <p className="font-[300] font-[PoppinsLight] lg:pt-[19px] pt-[10px] lg:text-[16px] lg:leading-[26px] text-[8px] leading-[13px]">
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
          <p className="font-[NewEddy] lg:text-[100px] lg:leading-[117px] text-[38px] leading-[44px]">
            <p className="font-[PoppinsRegular] lg:text-[16px] font-[400] lg:leading-[19px] text-[12px] leading-[14px] 2xl:pt-[117px] lg:pt-[88px] pt-[45px]">
              001<span className="text-[#AAAAAA]"> / 003</span>
            </p>
            <p className="lg:tracking-[8px] tracking-[3px]">EXPLORE</p>
          </p>
          <p className="lg:text-[24px] lg:leading-[28px] text-[12px] leading-[14px] font-[PoppinsRegular] font-[400] 2xl:pt-[25px] lg:pt-[19px] pt-[10px] 2xl:px-[40px] text-center lg:px-[30px] px-[10px]">
            Browse a selection of iconic masterpieces carefully handpicked by our expert curators from Sotheby&apos;s
            and Christie&apos;s.
          </p>
          <ul className="flex items-center overflow-hidden justify-center lg:gap-[64px] 2xl:gap-[70px] gap-[29px] 2xl:pt-[200px] lg:pt-[150px] pt-[178px]">
            <li className="lg:max-w-[318px] shrink-0 2xl:max-w-[424px] lg:h-[auto] max-w-[159px]">
              <img src={picA} />
            </li>
            <li className="lg:max-w-[318px]	 shrink-0 2xl:max-w-[424px] lg:h-[auto] max-w-[159px]">
              <img src={movePic} />
              <img className="2xl:mt-[113px] lg:mt-[85px] mt-[29px]" src={picC} />
            </li>
            <li className="lg:max-w-[318px]  shrink-0 2xl:max-w-[424px] lg:h-[auto] max-w-[159px]">
              <img src={picD} />
            </li>
          </ul>
        </section>
        <section className="invest w-full flex lg:flex-row flex-col-reverse  items-center justify-start 2xl:px-[80px] lg:px-[60px] px-[20px] 2xl:pt-[240px] lg:pt-[180px] pt-[188px] 2xl:pb-[212px] lg:pb-[159px] pb-[60px]">
          <div className="left relative flex-1 flex lg:flex-row  w-full flex-col items-center justify-center lg:gap-[100px]">
            <div className="picList grid grid-cols-3 relative">
              <img className="w-[142px]  h-[auto]" src={pixA} />
              <img className="w-[142px]  h-[auto]" src={pixB} />
              <img className="w-[142px]  h-[auto]" src={pixC} />
              <img className="w-[142px]  h-[auto]" src={pixD} />
              <img className="w-[142px]  h-[auto]" src={pixE} />
              <img className="w-[142px]  h-[auto]" src={pixF} />
              <img className="w-[142px]  h-[auto]" src={pixG} />
              <img className="w-[142px]  h-[auto]" src={pixH} />
              <img className="w-[142px]  h-[auto]" src={pixI} />
            </div>
            <div className="desc absolute right-0 bottom-0 z-[-10]">
              <p className="font-[PoppinsRegular] font-[400] 2xl:text-[18px] 2xl:leading-[21px] lg:text-[14px] lg:leading-[16px] text-[9px] leading-[11px]">
                Nympheas
              </p>
              <p className="font-[PoppinsRegular] mt-[4px] font-[400] 2xl:text-[18px] 2xl:leading-[21px] lg:text-[14px] lg:leading-[16px] text-[9px] leading-[11px]">
                Claude Monet
              </p>
              <p className="font-[PoppinsRegular] mt-[4px] font-[400] 2xl:text-[18px] 2xl:leading-[21px] lg:text-[14px] lg:leading-[16px] text-[9px] leading-[11px]">
                33,850,000 USD
              </p>
            </div>
          </div>
          <div className="right w-full flex-1">
            <p className="font-[400] font-[PoppinsRegular] lg:text-[16px] lg:leading-[19px] text-[12px] leading-[14px]">
              002<span className="text-[#AAAAAA]"> / 003</span>
            </p>
            <p className="font-[NewEddy] lg:tracking-[8px] tracking-[3px] lg:text-[75px] lg:leading-[88px] text-[38px] leading-[44px]">
              INVEST
            </p>
            <p className="font-[PoppinsRegular] lg:mt-[20px] mt-[10px] lg:text-[18px] lg:leading-[21px] text-[12px] leading-[14px] mb-[32px]">
              Invest in a fraction of masterpieces for a fraction of its total cost via our platform
            </p>
          </div>
        </section>
        <section className="earn flex lg:flex-row flex-col items-center justify-start 2xl:px-[80px] lg:px-[60px] px-[20px] 2xl:pt-[200px] lg:pt-[150px] pt-[188px] 2xl:pb-[174px] lg:pb-[231px] pb-[141px]">
          <div className="left flex-1 w-full">
            <p className="font-[400] font-[PoppinsRegular] text-[12px] leading-[14px] lg:text-[16px] lg:leading-[19px]">
              003<span className="text-[#AAAAAA]"> / 003</span>
            </p>
            <p className="font-[NewEddy] lg:tracking-[8px] tracking-[3px] lg:text-[100px] lg:leading-[117px] text-[38px] leading-[44px]">
              EARN
            </p>
            <p className="font-[400] font-[PoppinsRegular] 2xl:text-[24px] 2xl:leading-[28px] lg:text-[18px] lg:leading-[21px] text-[12px] leading-[14px]">
              Watch your investment grow in value through exhibitions of museums and galleries,NFT merchandise and so
              much more.
            </p>
          </div>
          <div className="right mt-[120px] lg:mt-0 flex-1 w-full flex lg:justify-start items-center justify-center">
            <div className="relative">
              <img
                className="absolute bottom-[-20%] left-[-20%] 2xl:w-[122px] lg:w-[91px] w-[50px] h-[auto]"
                src={roundA}
              />
              <img className="absolute top-[0] left-[-20%] 2xl:w-[28px] lg:w-[28px] w-[11px] h-[auto]" src={starA} />
              <img className="absolute top-[-20%] left-[0] 2xl:w-[47px] lg:w-[47px] w-[25px] h-[auto]" src={starC} />
              <img className="absolute top-[30%] right-[-30%] 2xl:w-[47px] lg:w-[47px] w-[25px] h-[auto]" src={starB} />
              <img
                className="absolute right-[-15%] z-[-2] top-[-20%] 2xl:w-[370px] lg:w-[278px] w-[150px] h-[auto]"
                src={doorA}
              />
              <img
                className="absolute bottom-[-25%] right-[-25%]  z-[-1] 2xl:w-[229px] lg:w-[172px]  w-[94px] h-[auto]"
                src={doorB}
              />
              <img className="2xl:w-[547px] lg:w-[410px] w-[221px] h-[auto]" src={movePic} />
            </div>
          </div>
        </section>
        <ValueComponent isMobile={isMobile} />
        <SecuredComponent />
      </main>
      <FooterComponet />
    </div>
  )
}

export default Home
