import React, { FC, useEffect, useRef, useState } from 'react'
import './index.scss'
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
  return (
    <div className="homeContainer">
      <header>
        <div className="logo">
          <p>logo</p>
        </div>
        <nav className="navList">
          <ul>
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
        <div className="button">button</div>
      </header>
      <main>
        <section className="banner">
          <p>OWN A PIECE OF</p>
          <p>HISTORY WITH ARTTOO</p>
          <p>Invest in renowned masterpieces with just a fraction of its cost</p>
          <p>LEARN MORE</p>
        </section>
        <section className="about">
          <p>Art is the visual proof of history</p>
          <p>consensus mechanism for humanity</p>
          <div className="content">
            <ul>
              <li>
                <img src={aboutA} />
              </li>
              <li>
                <img src={aboutB} />
              </li>
              <li>
                <img src={aboutC} />
              </li>
              <li>
                <img src={aboutD} />
              </li>
              <li>
                <img src={aboutE} />
              </li>
              <li>
                <img src={aboutF} />
              </li>
              <li>
                <img src={aboutG} />
              </li>
              <li>
                <img src={aboutH} />
              </li>
            </ul>
            <div className="right">
              <div className="floor-1">
                <p>Arttoo isn&apos;t just about returns</p>
                <p>
                  It&apos;s about unlocking a world of possibilities. Become part of a vibrant art community, connect
                  with a timeless piece of culture, and watch your investment grow alongside your passion.
                </p>
              </div>
              <div className="floor-2">
                <p>
                  Start investing in fractional shares of legacy masterpieces via a collection curated by
                  ex-Sotheby&apos;s and Christie&apos;s specialists, with no auction house markups, no gallery markups,
                  no hidden true-up fees.
                </p>
                <p>
                  Also, no need to track provenance anymore, all transactions are secure, transparent, and regulated
                  through the beauty of blockchain technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="data">
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
        <section className="explore">
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
        <section className="invest">
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
        <section className="value">
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
        <section className="secured">
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
      <footer>
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
