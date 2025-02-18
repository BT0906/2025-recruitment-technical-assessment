import { Button } from '@/components/ui/button'
import { SearchBar } from '@/components/ui/searchBar'
import { RoomCard } from './components/ui/roomCard'
import roomData from '../data.json'

import { Filter, ListFilter } from 'lucide-react'
import { Header } from './header'

function App() {
  const ASSET_PATH = '/assets/'

  return (
    <>
      <Header/>
      <section className="mx-auto container">
        <section className="p-3 flex justify-between items-center space-x-2">
          <Button variant="outline" className="px-5">
            <Filter className="fill-primary"/>
            <span className="select-none">Filters</span>
          </Button>
          <div className="w-full">
            <SearchBar className="w-full"placeholder="Search for a building..."/>
          </div>
          <Button variant="outline" className="px-5">
            <ListFilter/>
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
