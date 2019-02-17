import React from 'react'
import Link from 'next/link'
import Router from 'next/router'


Router.events.on('routeChangeStart', url => {
  const element = document.getElementById('menuItems')
  const arrow = document.getElementById('arrow')
  arrow.classList.add('arrow-down')
  arrow.classList.remove('arrow-up')
  element.classList.remove('height200')
})

export default class NavBar extends React.Component {

  onMenuClick = () => {
    const element = document.getElementById('menuItems')
    const arrow = document.getElementById('arrow')

    arrow.classList.toggle('arrow-down')
    arrow.classList.toggle('arrow-up')
    element.classList.toggle('height200')
  }

  render() {
    return (
      <nav className='navbar'>
        <Link href='/'>
          <img src='/static/logos/logo.png' alt='Logo' />
        </Link>
        <div className='menu' id='menu'
          onClick={this.onMenuClick}>
          <div id='arrow' className='arrow-down' />
        </div>
        <ul className='menuItems' id='menuItems'>
          <li></li>
          <Link href='/'><li>Home</li></Link>
          <Link href='/rooms'><li>Habitaciones</li></Link>
          <Link href='/hotel'><li>Hotel</li></Link>
          <Link href='/loungebar'><li>Lounge Bar</li></Link>
          <Link href='/santa-marianita'><li>Santa Marianita</li></Link>
          <Link href='/kitesurf'><li>Kitesurf</li></Link>
          <Link href='/contact'><li>Contacto</li></Link>
        </ul>

        <style jsx>{`
          @media only screen  and (min-width : 1024px) {
            /* Styles */
            .navbar {
              background: rgba(0, 0, 0, 0.5);
              display: grid;
              grid-template: 120px / 500px 600px;
              color: white;
              align-items: flex-end;
              justify-content: center;
              position: absolute;
              z-index: 999;
              top: 0;
              left: 0;
              right: 0;
            }
            .menu {
              display: none;
            }
            .menuItems {
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              padding: 0;
            }
            .menuItems li {
              list-style-type: none;
            }
          
          }
          /* Smartphones (portrait and landscape) ----------- */
          @media only screen and (min-device-width : 320px) and (max-device-width : 1024px) {
            .navbar {
              background: rgb(33,38,40);
              display: grid;
              grid-template-rows: 100px 30px;
              grid-row-gap: 10px;
              justify-content: center;
              align-content: center;
              padding-top: 20px;
              color: white;
            }
            .menu {
              align-self: center;
              width: 100%;
              text-align: center;
            }
            .height200 {
              height: 200px;
            }
            .menuItems {
              padding: 0;
              text-align: center;
              overflow: hidden;
            }
            .menuItems li {
              list-style-type: none;
              padding-bottom: 8px;
            }
            .arrow-up {
              width: 0; 
              height: 0; 
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 12px solid white;
              display: inline-block;
            }
            .arrow-down {
              width: 0; 
              height: 0; 
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              display: inline-block;              
              border-top: 12px solid white;
            }

            ul {
              height: 0px;
              -webkit-transition: height 0.2s linear;
              -moz-transition: height 0.2s linear;
              -ms-transition: height 0.2s linear;
              -o-transition: height 0.2s linear;
              transition: height 0.2s linear;
              margin: 0;
            }
            ul > li:first-child {
              border-top: solid white 1px;
            }
          }

        `}</style>
      </nav>
    )
  }
}
