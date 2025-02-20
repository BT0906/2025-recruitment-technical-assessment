import { Button } from '@/components/ui/button'
import { ListFilter } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

export function SortButton({ className, ...props }) {
  const [sort, setSort] = useState("alphabetical");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="px-5">
          <ListFilter/>
          <span className="select-none">Sort</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuRadioItem value="alphabetical">Alphabetical</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="nearest"> Nearest</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="mostAvailable">Most available rooms</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
