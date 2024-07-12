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
      <header className="w-full fixed pt-[30px] lg:pt-[80px]  px-[20px] lg:px-[80px] flex justify-between items-center">
        <div className="logo lg:w-[223px] lg:h-[43px] w-[145px] h-[28px]">
          <img className="lg:w-[223px] lg:h-[43px] w-[145px] h-[28px]" src={logo} alt="Arttoo" />
        </div>
        <nav className="navList hidden lg:block">
          <ul className="flex justify-between items-center gap-x-[106px] font-[500] leading-[21px] text-[18px] text-[#FFFFFF]">
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
            <a href="#" className="font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]">
              ARTWORKS
            </a>
            <a href="#" className="font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]">
              LEARN
            </a>
            <a href="#" className="font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]">
              ABOUT
            </a>
            <a href="#" className="font-[500] py-[10px] leading-[21px] text-[18px] block leading-[21px] text-[#9c9c9c]">
              CONTACT US
            </a>
          </div>
        </div>
      </header>
      <main className="w-full">
        <section className="banner flex flex-col items-start justify-start w-full bg-[#9c9c9c] lg:pt-[123px] pt-[58px] pb-[100px] lg:pb-[327px] px-[20px] lg:px-[80px]">
          <p className="text-[32px] leading-[38px] tracking-[2px] lg:tracking-[10px] lg:text-[132px] lg:leading-[155px] text-[#FFFFFF] lg:pt-[103px] pt-[112px]">
            OWN A PIECE OF
          </p>
          <p className="text-[32px] leading-[38px] tracking-[2px] lg:tracking-[10px] lg:text-[132px] lg:leading-[155px] text-[#FFFFFF]">
            HISTORY WITH ARTTOO
          </p>
          <p className="font-[400] text-[12px] leading-[14px] lg:text-[16px] lg:leading-[19px] pt-[28px] lg:pt-[19px] text-[#FFFFFF]">
            Invest in renowned masterpieces with just a fraction of its cost
          </p>
          <p className="flex self-center lg:self-start  items-center justify-center lg:mt-[125px] mt-[35px] text-[14px] leading-[16px] lg:text-[18px] lg:leading-[21px] font-[400] text-[#000000] bg-[#E4FF1A] rounded-[978px] lg:px-[52px] lg:py-[22px] px-[38px] py-[16px]">
            LEARN MORE
          </p>
        </section>
        <section className="about w-full flex flex-col items-start justify-start px-[20px] lg:px-[80px] lg:pt-[180px] pt-[90px] pb-[90px] lg:pb-[505px]">
          <p className="lg:pl-[233px] pl-[29px] font-[500] text-[18px] leading-[21px] lg:text-[75px] lg:leading-[75px]">
            ART IS THE VISUAL PROOF OF HISTORY
          </p>
          <p className="font-[500] text-[18px] leading-[21px] lg:text-[75px] lg:leading-[75px]">
            CONSENSUS MECHANISM FOR HUMANITY
          </p>
          <div className="content relative w-full lg:pt-[27px] pt-[16px]">
            <ul className="lg:ml-[80px]  ml-0 flex items-start justify-start gap-[16px]">
              <li>
                <img className="w-[28px] h-[195px] lg:w-[75px] lg:h-[518px]" src={aboutA} />
              </li>
              <li>
                <img
                  className="w-[28px] relative lg:top-[-73px] top-[-27px] z-[-10] h-[195px] lg:w-[75px] lg:h-[518px]"
                  src={aboutB}
                />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[75px] lg:h-[518px]" src={aboutC} />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[75px] lg:h-[518px]" src={aboutD} />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[75px] lg:h-[518px]" src={aboutE} />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[75px] lg:h-[518px]" src={aboutF} />
              </li>
              <li>
                <img
                  className="w-[28px] relative lg:top-[195px] top-[74px] h-[195px] lg:w-[75px] lg:h-[518px]"
                  src={aboutG}
                />
              </li>
              <li>
                <img className="w-[28px] h-[195px] lg:w-[75px] lg:h-[518px]" src={aboutH} />
              </li>
            </ul>
            <div className="floor-1 lg:hidden lg:absolute lg:right-0 lg:top-0 mt-[122px] lg:mt-[0]">
              <p>
                Start investing in fractional shares of legacy masterpieces via a collection curated by
                ex-Sotheby&apos;s and Christie&apos;s specialists, with no auction house markups, no gallery markups, no
                hidden true-up fees.
              </p>
              <p>
                Also, no need to track provenance anymore, all transactions are secure, transparent, and regulated
                through the beauty of blockchain technologies.
              </p>
            </div>
            <div className="floor-2 lg:hidden lg:absolute lg:right-0 lg:top-0">
              <p className="inline-block">Arttoo isn&apos;t just about returns</p>
              <p className="inline-block">
                It&apos;s about unlocking a world of possibilities. Become part of a vibrant art community, connect with
                a timeless piece of culture, and watch your investment grow alongside your passion.
              </p>
            </div>
          </div>
        </section>
        <section className="data w-full bg-[#eeeeee]">
          <div className="left">
            <img src={dataA} />
            <ul>
              <li>
                <p>$11.8 BILLION</p>
                <p>in online-only sales volume,doubled since 2019</p>
              </li>
              <li>
                <p>14.9% CAGR</p>
                <p>between 2009-2022 on Ultra-High End Art Index</p>
              </li>
              <li>
                <p>~19% AVERAGE</p>
                <p>allocation in art for HNW collectors, with ~30% for collectors &gt;$50m in net worth</p>
              </li>
            </ul>
          </div>
          <div className="right">
            <img src={movePic} />
            <div className="desc">
              <p>Forbes</p>
              <p>Monet Nymphéas sold at</p>
              <p>$44.6M</p>
            </div>
          </div>
        </section>
        <section className="explore w-full">
          <p>Own a Piece of History in 3 Simple Steps</p>
          <p>001/003</p>
          <p>EXPLORE</p>
          <p>
            Browse a selection of iconic masterpieces carefully handpicked by our expert curators from Sotheby&apos;s
            and Christie&apos;s.
          </p>
          <ul>
            <li>
              <img src={picA} />
            </li>
            <li>
              <img src={picB} />
            </li>
            <li>
              <img src={picC} />
            </li>
            <li>
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
