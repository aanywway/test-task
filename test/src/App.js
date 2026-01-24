import './App.css';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 1000,
    config: { mass: 1, tension: 20, friction: 10},
  });
  return <animated.span>{number.to((n) => n.toFixed(2))}</animated.span>
}

function App() {
  const [LanguageIsOpen, setLanguageOpen] = useState(false);
  const [SearchIsOpen, setSearchOpen] = useState(false);
  const [CartIsVisible, setCartVisible] = useState(false);
  const [color, setColor] = useState('black');
  const [background, setBackground] = useState('#F8F7F7');

  const HandleClick = () => {
    setCartVisible(!CartIsVisible);
    setColor(color === 'black' ? 'white' : 'black');
    setBackground(background === '#F8F7F7' ? '#272727' : '#F8F7F7')
  }

  return (
    <div className="App">
      <div className="Container">
        <div className='Navbar'>
          <div className='NavbarLeftSide'>
            <div className='Menu'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='IconMenu'>
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="10" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="18" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="10" r="2" fill="currentColor"></circle>
                <circle cx="10" cy="10" r="2" fill="currentColor"></circle>
                <circle cx="18" cy="10" r="2" fill="currentColor"></circle> 
                <circle cx="2" cy="18" r="2" fill="currentColor"></circle>
                <circle cx="10" cy="18" r="2" fill="currentColor"></circle>
                <circle cx="18" cy="18" r="2" fill="currentColor"></circle>
              </svg>
            </div>
            <div className='Language' onClick={() => setLanguageOpen(!LanguageIsOpen)}>
              <p><b>RU</b></p>
            </div>
            {LanguageIsOpen && (
              <div className='LanguageDropdown'>
                <p><b>EN</b></p>
                <p><b>PL</b></p>
                <p><b>GR</b></p>
              </div>
            )}
            <div className='Search' onClick={() => setSearchOpen(!SearchIsOpen)}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7.89062 0.00976562C11.8554 0.210867 15.0086 3.48918 15.0088 7.50391L14.999 7.89062C14.9198 9.45317 14.3598 10.8876 13.4678 12.0547L17.6348 16.2217L17.7031 16.2969C18.0237 16.6897 18.001 17.2695 17.6348 17.6357C17.2686 18.0019 16.6887 18.0247 16.2959 17.7041L16.2207 17.6357L12.0547 13.4697C10.792 14.4343 9.21538 15.0088 7.50391 15.0088L7.11816 14.999C3.28108 14.8046 0.204387 11.7277 0.00976562 7.89062L0 7.50391C0.00016827 3.35969 3.35969 0.000168274 7.50391 0L7.89062 0.00976562ZM7.50391 2C4.46426 2.00017 2.00017 4.46426 2 7.50391C2 10.5437 4.46415 13.0086 7.50391 13.0088C10.5438 13.0088 13.0088 10.5438 13.0088 7.50391C13.0086 4.46415 10.5437 2 7.50391 2Z" fill="#0F0F0F"/>
              </svg>
            </div>
            {SearchIsOpen && (
              <input type='search' className='SearchField'></input>
            )}
          </div>
          <div className='NavbarRightSide'>
            <div className='Cart' onClick={HandleClick} style={{color: color, backgroundColor: background}}>
              <svg width="23" height="21" viewBox="0 0 23 21" fill="none">
                <path d="M20.8333 8.125L19.1002 16.9452C18.8864 18.0334 18.7795 18.5775 18.5004 18.9844C18.2543 19.3433 17.9155 19.626 17.5215 19.8012C17.0747 20 16.5296 20 15.4394 20H7.5606C6.47038 20 5.92527 20 5.47847 19.8012C5.08446 19.626 4.7457 19.3433 4.49958 18.9844C4.22048 18.5775 4.11358 18.0334 3.89977 16.9452L2.16667 8.125M1 8.125H22M6.83333 11.6875V11.6994M16.1667 11.6875V11.6994M4.5 8.125L8 1M18.5 8.125L15 1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
              <p><Number n={5827.50}></Number> &#x20bd;</p>
            </div>
          </div>
        </div>
        <div className='ContainerContent'>
          <div className='Content'></div>
        {CartIsVisible && (
          <div className='ContentCart'>
            <p>Корзина</p>
            <div onClick={HandleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 50 50">
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default App;
