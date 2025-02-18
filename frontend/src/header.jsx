import { cloneElement, useState } from 'react'
import { FreeroomsLogo } from './components/ui/freeroomsLogo';
import { Button } from '@/components/ui/button'
import { Search, LayoutGrid, Map, Moon } from 'lucide-react'

export function Header({ className, ...props }) {
  const [activeButton, setActiveButton] = useState("Grid View");

  const menuButtons = [
    {
      name: "Search",
      icon: <Search/>,
    },
    {
      name: "Grid View",
      icon: <LayoutGrid/>,
    },
    {
      name: "Map",
      icon: <Map/>,
    },
    {
      name: "Dark Mode",
      icon: <Moon/>,
    },
  ]

  return (
    <header
      className={`flex justify-between items-center px-3 py-2 border-b select-none ${className}`}
      {...props}
    >
      <FreeroomsLogo/>

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
            {cloneElement(obj.icon, { className: "stroke-[1.5px]" })}
          </Button>
        ))}
      </div>
    </header>
  )
}
