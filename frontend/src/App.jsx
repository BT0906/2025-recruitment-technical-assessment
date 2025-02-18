import { cloneElement, useState } from 'react'
import { Button } from '@/components/ui/button'
import { SearchBar } from '@/components/ui/searchBar'
import { RoomCard } from './components/ui/roomCard'
import roomData from '../data.json'

function App() {
  const [doorClosed, setDoorClosed] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const menuButtons = [
    {
      name: "Search",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>
      ),
    },
    {
      name: "Grid View",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520Z"/></svg>
      ),
    },
    {
      name: "Map",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Z"/></svg>
      ),
    },
    {
      name: "Dark Mode",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
      ),
    },
  ]

  const ASSET_PATH = '/assets/'

  return (
    <>
      <header className="flex justify-between items-center px-3 py-2 border-b select-none">
        {/* LOGO */}
        <div
          className="flex items-center cursor-pointer  hover:opacity-80 transition-opacity duration-300"
          onClick={() => {
            const doorState = doorClosed
            setDoorClosed(!doorState)
          }}
        >
          <img className={`${doorClosed ? "hidden" : ""}`} src="./assets/freeRoomsLogo.png" width={50} />
          <img className={`${!doorClosed ? "hidden" : ""}`} src="./assets/freeroomsDoorClosed.png" width={50} />
          <span className="text-primary font-bold text-2xl">Freerooms</span>
        </div>
        <div className="flex space-x-2">
          {menuButtons.map(obj => (
            <Button
              key={obj.name}
              variant={activeButton === obj.name ? "default" : "outline"}
              size="icon"
              className="p-2 cursor-pointer"
              asChild
              onClick={() => setActiveButton(obj.name)}
            >
              {cloneElement(obj.icon)}
            </Button>
          ))}
        </div>
      </header>
      <section className="mx-auto container">
        <section className="p-3 flex justify-between items-center space-x-2">
          <Button variant="outline" className="px-5">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M440-160q-17 0-28.5-11.5T400-200v-240L168-736q-15-20-4.5-42t36.5-22h560q26 0 36.5 22t-4.5 42L560-440v240q0 17-11.5 28.5T520-160h-80Z"/>
            </svg>
            <span className="select-none">Filters</span>
          </Button>
          <div className="w-full">
            <SearchBar className="w-full"placeholder="Search for a building..."/>
          </div>
          <Button variant="outline" className="px-5">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
              <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z"/>
            </svg>
            <span className="select-none">Sort</span>
          </Button>
        </section>
        <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {roomData.map(obj => (
            <RoomCard
              key={obj.name}
              name={obj.name}
              roomsAvailable={obj.rooms_available}
              picture={ASSET_PATH + obj.building_picture}
              rating="4.4"
            />
          ))}
        </div>
      </section>
    </>
  )
}

export default App
