import React, { FC, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { Flip } from 'gsap/Flip' // 跟变化相关的特效
import { ScrollTrigger } from 'gsap/ScrollTrigger' // 跟滚动相关的特效
import { getUniqueRandomNumbers } from '@/utils/math'
gsap.registerPlugin(useGSAP, Flip, ScrollTrigger)
const ValueComponent = (props: { isMobile: boolean }) => {
  const { isMobile } = props
  const containerRef = useRef(null)
  useEffect(() => {}, [])
  useGSAP(
    () => {
      const liNumbers = getUniqueRandomNumbers(0, 9, 10)
      const pNumbers = getUniqueRandomNumbers(0, 5, 6)
      const selectors = liNumbers
        .map((liNth, index) => {
          // 确保 pNumbers 中有相应的元素来匹配 liNumbers 中的元素
          if (index < pNumbers.length) {
            const pNth = pNumbers[index]
            return `.textList li:nth-of-type(${liNth}) p:nth-of-type(${pNth})`
          }
          return null
        })
        .filter((selector) => selector !== null)
        .join(', ')
      if (!isMobile) {
        gsap.to(selectors, {
          opacity: 1,
          stagger: 0.5,
          duration: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center', // 进入的时候直接开启动画
            // markers: true,
            toggleActions: 'play none none reverse',
          },
        })
      } else {
        // 清除掉所有的滚动效果,并将元素的状态还原
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        gsap.set('.textList > li > p', { opacity: 0.13, clearProps: 'all' })
      }
    },
    { scope: containerRef, dependencies: [isMobile] }
  )
  return (
    <section ref={containerRef} className="value w-full relative">
      <ul className="textList flex flex-col overflow-hidden shrink-0 font-[NewEddy] 2xl:text-[40px] 2xl:leading-[47px] lg:text-[30px] lg:leading-[35px] text-[20px] leading-[24px] 2xl:tracking-[3px] lg:tracking-[2px] tracking-[1px]">
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Henri Matisse</p>
          <p className="shrink-0 opacity-[0.13]">Michelangelo Merisi da Caravaggio</p>
          <p className="shrink-0 opacity-[0.13]">Tiziano Vecellio</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
          <p className="shrink-0 opacity-[0.13]">Vincent Willem van Gogh</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Vincent Willem van Gogh</p>
          <p className="shrink-0 opacity-[0.13]">Paul Cézanne</p>
          <p className="shrink-0 opacity-[0.13]">Johannes Vermeer</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Vincent Willem van Gogh</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Giotto di Bondone</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Jackson Pollock</p>
          <p className="shrink-0 opacity-[0.13]">Leonardo di ser Piero da Vinci</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Tiziano Vecellio</p>
          <p className="shrink-0 opacity-[0.13]">Raffaello Sanzio da Urbino</p>
          <p className="shrink-0 opacity-[0.13]">Édouard Manet</p>
          <p className="shrink-0 opacity-[0.13]">Raphael Sanzio</p>
          <p className="shrink-0 opacity-[0.13]">Edgar Degas</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Raphael Sanzio</p>
          <p className="shrink-0 opacity-[0.13]">Edgar Degas</p>
          <p className="shrink-0 opacity-[0.13]">Oscar-Claude Monet</p>
          <p className="shrink-0 opacity-[0.13]">Vincent Willem van Gogh</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Claude Monet</p>
          <p className="shrink-0 opacity-[0.13]">Gustav Klimt</p>
          <p className="shrink-0 opacity-[0.13]">Edgar Hilaire Germain de Gas</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Pablo Ruiz Picasso</p>
          <p className="shrink-0 opacity-[0.13]">Leonardo di ser Piero da Vinci</p>
          <p className="shrink-0 opacity-[0.13]">Raffaello Sanzio da Urbino</p>
          <p className="shrink-0 opacity-[0.13]">Edgar Degas</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Henri Matisse</p>
          <p className="shrink-0 opacity-[0.13]">Michelangelo Merisi da Caravaggio</p>
          <p className="shrink-0 opacity-[0.13]">Tiziano Vecellio</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Giotto di Bondone</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Jackson Pollock</p>
          <p className="shrink-0 opacity-[0.13]">Leonardo di ser Piero da Vinci</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
        </li>
        <li className="flex items-center justify-start 2xl:gap-[26px] lg:gap-[20px] gap-[13px] overflow-hidden shrink-0">
          <p className="shrink-0 opacity-[0.13]">Henri Matisse</p>
          <p className="shrink-0 opacity-[0.13]">Michelangelo Merisi da Caravaggio</p>
          <p className="shrink-0 opacity-[0.13]">Tiziano Vecellio</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
          <p className="shrink-0 opacity-[0.13]">Filippino Lippi</p>
          <p className="shrink-0 opacity-[0.13]">Rembrandt Harmenszoon van Rijn</p>
        </li>
      </ul>
      <div className="content absolute w-full text-center z-[1] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="font-[600] font-[PoppinsRegular] 2xl:text-[28px] 2xl:leading-[33px] lg:text-[21px] lg:leading-[25px] text-[14px] leading-[16px]">
          Total Locked Value
        </p>
        <p className="font-[NewEddy] 2xl:text-[157px] 2xl:leading-[184px] 2xl:tracking-[12px] lg:text-[118px] lg:leading-[138px] lg:tracking-[9px] text-[40px] leading-[47px] tracking-[3px]">
          100,000,000 USD
        </p>
        <p className="font-[Lato] inline-block 2xl:px-[40px] 2xl:py-[22px] lg:px-[30px] lg:py-[17px] px-[30px] py-[16px] bg-[#E4FF1A]  font-[400] 2xl:text-[18px] 2xl:leading-[22px] lg:text-[14px] lg:leading-[16px] text-[14px] rounded-[978px] leading-[16px]">
          Explore Artworks
        </p>
      </div>
    </section>
  )
}
export default ValueComponent
