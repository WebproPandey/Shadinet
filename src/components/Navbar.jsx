import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Logo from '../assets/Frame.png'
import LogoText from '../assets/Shadient.co.png'
import { Link } from 'react-router-dom'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services'},
  { name: 'Company' }
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const line3Ref = useRef(null)
  const menuDropdownRef = useRef(null)
  const menuRef = useRef(null)
  const logo = useRef()
  const logo2 = useRef()
  const button = useRef()
  const menu = useRef()

  useEffect(() => {
    if (menuOpen) {
      gsap.to(line1Ref.current, { rotation: 45, y: 8, duration: 0.3 })
      gsap.to(line2Ref.current, { opacity: 0, duration: 0.3 }, '<')
      gsap.to(line3Ref.current, { rotation: -45, y: -8, duration: 0.3 }, '<')
      gsap.to(menuDropdownRef.current, { top: 0, duration: 0.5, ease: 'bounce.inOut' }, '<')
      gsap.to(menuRef.current, { backgroundColor: '#0f0f0f', duration: 0.5, delay: 0.1 }, '<')
    } else {
      gsap.to(line1Ref.current, { rotation: 0, y: 0, duration: 0.3 })
      gsap.to(line2Ref.current, { opacity: 1, duration: 0.3 }, '<')
      gsap.to(line3Ref.current, { rotation: 0, y: 0, duration: 0.3 }, '<')
      gsap.to(menuDropdownRef.current, { top: '-90%', duration: 0.5, ease: 'linear' }, '<')
      gsap.to(menuRef.current, { backgroundColor: 'transparent', duration: 0.5 }, '<')
    }
  }, [menuOpen])

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    gsap.from(logo.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'linear',
    })
    gsap.from(logo2.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'linear',
    })
    gsap.from(button.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'linear',
    })
    gsap.from(menu.current, {
      opacity: 0,
      duration: 1,
      ease: 'linear',
    })
  }, [])

  return (
    <>
      <div className='w-full md:w-full flex justify-between items-center bg-black/10 fixed top-0 left-0 px-[20px] md:px-[70px] h-[15vh] z-[999]'>
        <div className='logo flex w-fit md:w-[20%] gap-2 justify-start items-center overflow-hidden h-fit'>
          <img ref={logo} src={Logo} alt='Logo' className='w-[5vh] md:w-[5vh]' />
          <img ref={logo2} src={LogoText} alt='LogoText' />
        </div>
        <div className='rightSide w-[30%] md:w-[20%] flex justify-end cursor-pointer items-center overflow-hidden'>
          <div
            ref={button}
            className='md:px-10 py-[0.2rem] px-5  text-sm md:text-base rounded-full border-[1px] border-[#FFA800] text-[#FFA800] hover:bg-[#FFA800] hover:text-black transition-colors duration-300'
          >
            Contact
          </div>
        </div>
      </div>

      <div ref={menuDropdownRef} className='menuDropdown fixed top-[-90%] left-0 md:px-[1.5rem] px-[0.5rem] py-[0.3rem] md:pt-[0.5rem] flex flex-col justify-start items-center h-screen w-full z-[9999999]'>
        <div ref={menuRef} className='menu relative w-full  h-[90%] bg-transparent rounded-[3rem] flex flex-col justify-center items-center'>
          {menuItems.map((item, index) => {
            const firstH1Ref = useRef(null)
            const secondH1Ref = useRef(null)
            const [toggleText, setToggleText] = useState(true)

            const handleMouseEnter = () => {
              let tl = gsap.timeline()
              if (toggleText) {
                tl.to(firstH1Ref.current, { top: '-100%', duration: 0.3, ease: 'power2.out' })
                  .to(secondH1Ref.current, { top: '0%', duration: 0.3, ease: 'power2.out' })
                  .set(firstH1Ref.current, { top: '150%' })
              } else {
                tl.to(secondH1Ref.current, { top: '-150%', duration: 0.3, ease: 'power2.out' })
                  .to(firstH1Ref.current, { top: '50%', duration: 0.3, ease: 'power2.out' })
                  .set(secondH1Ref.current, { top: '100%' })
              }
              setToggleText(!toggleText)
            }

            return (
              <Link key={index} to={item.path} className='Links h-[10vh] w-[50%] md:min-w-[20%] cursor-pointer relative overflow-hidden' onMouseEnter={handleMouseEnter} onClick={handleMenuToggle}>
                <h1 ref={firstH1Ref} className='text-[6vh] md:text-[3rem] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white uppercase'>{item.name}</h1>
                <h1 ref={secondH1Ref} className='text-[6vh] md:text-[3rem] absolute top-[100%] left-1/2 -translate-x-1/2 text-white uppercase'>{item.name}</h1>
              </Link>
            )
          })}
        </div>

        <div className='MenuDropDwon w-[60%] flex justify-center items-start overflow-hidden'>
          <button ref={menu} onClick={handleMenuToggle} className='bg-[#0f0f0f] absolute bottom-[10] md:bottom-6 flex flex-col justify-center items-center gap-[1vh] w-[25%] md:w-[15%] py-3 rounded-br-2xl rounded-bl-2xl'>
            <div ref={line1Ref} className='line h-[2px] w-10 bg-white'></div>
            <div ref={line2Ref} className='line h-[2px] w-10 bg-white'></div>
            <div ref={line3Ref} className='line h-[2px] w-10 bg-white'></div>
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar