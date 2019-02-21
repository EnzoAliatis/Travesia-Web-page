import React from 'react'
import Router from 'next/router'

import TouchCarousel, { clamp } from 'react-touch-carousel'
import touchWithMouseHOC from 'react-touch-carousel/lib/touchWithMouseHOC'
import NonPassiveTouchTarget from './NonPassiveTouchTarget'
import NavBar from '../containers/Navbar'

import {
  CARUSEL_IMAGES,
  CARUSEL_IMAGES_KITE,
  CARUSEL_IMAGES_ROOMS,
  CARUSEL_IMAGES_HOTEL,
  CARUSEL_IMAGES_BAR
} from '../data'

let images = CARUSEL_IMAGES

const cardPadCount = 2

function CarouselContainer (props) {
  const { cursor, carouselState, ...rest } = props
  return (
    <NonPassiveTouchTarget className='carousel-container'>
      <NonPassiveTouchTarget className='carousel-track' {...rest} />
    </NonPassiveTouchTarget>
  )
}
const Container = touchWithMouseHOC(CarouselContainer)

export default class Hero extends React.Component {
  renderCard (index, modIndex, cursor) {
    Router.events.on('routeChangeStart', url => {
      if (url === '/') {
        images = CARUSEL_IMAGES
      }
      if (url === '/rooms') {
        images = CARUSEL_IMAGES_ROOMS
      }
      if (url === '/hotel') {
        images = CARUSEL_IMAGES_HOTEL
      }
      if (url === '/loungebar') {
        images = CARUSEL_IMAGES_BAR
      }
      if (url === '/santa-marianita') {
        images = CARUSEL_IMAGES
      }
      if (url === '/contact') {
        images = CARUSEL_IMAGES_HOTEL
      }
      if (url === '/kitesurf') {
        images = CARUSEL_IMAGES_KITE
      }
    })
    const item = images[modIndex]
    const opacity = 1 - 1.5 * Math.abs(index + cursor)
    const zIndex = opacity * images.length
    return (
      <div
        key={index}
        className='carousel-card'
        style={{
          opacity: clamp(opacity, 0, 1),
          zIndex
        }}
      >
        <img src={`/static/${item.src}`} alt='item' />
      </div>
    )
  }
  render() {
    return (
      <div className='container'>
        <div className='navbarContainer'>
          <NavBar />
        </div>
        <TouchCarousel
          component={Container}
          cardCount={CARUSEL_IMAGES.length}
          cardPadCount={cardPadCount}
          autoplay={3000}
          renderCard={this.renderCard}
          stiffness={100}
        />
        <div className='bookNow'>
          <a className='bookingButtom'
            href='https://www.booking.com/hotel/ec/cabanas-la-travesia.en-gb.html?aid=356980;label=gog235jc-1DCAsoQUITY2FiYW5hcy1sYS10cmF2ZXNpYUgzWANoQYgBAZgBCbgBB8gBDNgBA-gBAYgCAagCAw;sid=13bd436102878bbd069e61052597e031;dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&'
            target='_blank'
          >
            BOOK NOW
          </a>
        </div>
        <style jsx>{`
          @media only screen  and (min-width : 1024px) {
            .container {
              height: 100vh;
              position: relative;
            }
            .bookingButtom {
              color: white;
              text-decoration: none;
              background-color: #07c;
              padding: 13px 33px;
              border-radius: 5px;
              font-weight: 400;
            }
            .bookNow {
              position: absolute;
              z-index: 999;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(4, 4, 4, 0.29);
              height: 100px;
            }
          }
          @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
            .container {
              position: relative;
              height: 230px;
            }
            .bookNow {
              position: absolute;
              z-index: 999;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(4, 4, 4, 0.29);
              height: 30%;
            }
            .bookingButtom {
              color: white;
              text-decoration: none;
              background-color: #07c;
              padding: 13px 33px;
              border-radius: 5px;
              font-weight: 400;
            }
            .navbarContainer {
              display: none;
            }
          }
          
        `}</style>
      </div>
    )
  }
}
