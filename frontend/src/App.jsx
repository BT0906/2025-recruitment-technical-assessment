import { ThemeProvider } from '@/components/themeProvider'
import { FilterButton } from '@/components/ui/filterButton'
import { SearchBar } from '@/components/ui/searchBar'
import { SortButton } from '@/components/ui/sortButton'
import { RoomCard } from '@/components/ui/roomCard'
import roomData from '../data.json'
import { Header } from './header'

function App() {
  const ASSET_PATH = '/assets/';

  return (
    <ThemeProvider defaultTheme="light">
      <Header/>
      <section className="mx-auto container">
        <div className="p-3 flex justify-between items-center space-x-2">
          <FilterButton/>
          <div className="w-full">
            <SearchBar className="w-full" placeholder="Search for a building..."/>
          </div>
          <SortButton/>
        </div>
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
    </ThemeProvider>
  )
}

export default App
