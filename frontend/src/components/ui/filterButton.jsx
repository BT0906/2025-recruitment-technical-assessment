import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Filter, School, Users, MapPin } from 'lucide-react'
import { useState } from 'react'

export function FilterButton({ className, ...props }) {
  const [roomType, setRoomType] = useState("auditorium");
  const [capacity, setCapacity] = useState();
  const [location, setLocation] = useState();

  const handleClear = () => {
    setRoomType(null);
    setCapacity(null);
    setLocation(null);
  }

  return (
    <DropdownMenu className={`${className}`} {...props}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-5">
          <Filter className="fill-primary"/>
          <span className="select-none">Filters</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>
          <div className="flex justify-between">
            <span>Filters</span>
            <span
              className="font-normal text-primary hover:text-primary/80 cursor-pointer"
              onClick={handleClear}
            >Clear</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator/>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={roomType ? 'bg-primary/10 dark:bg-primary/25' : ''}>
            <School/>
            <span>Room type</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={roomType} onValueChange={setRoomType}>
                <DropdownMenuRadioItem value="auditorium">Auditorium</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="computerLab">Computer Lab</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lectureHall">Lecture Hall</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={capacity ? 'bg-primary/10 dark:bg-primary/25' : ''}>
            <Users/>
            <span>Capacity</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={capacity} onValueChange={setCapacity}>
                <DropdownMenuRadioItem value="25+">25+</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="50+">50+</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="100+">100+</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className={location ? 'bg-primary/10 dark:bg-primary/25' : ''}>
            <MapPin/>
            <span>Location</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup value={location} onValueChange={setLocation}>
                <DropdownMenuRadioItem value="upper">Upper Campus</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="lower">Lower Campus</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
