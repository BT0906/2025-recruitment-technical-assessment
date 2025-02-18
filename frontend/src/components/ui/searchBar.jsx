import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar({ className, ...props }) {
  return (
    <div className="relative">
      <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-gray-500"/>
      <Input className={`pl-8 ${className} transition-all`} type="search" placeholder="Search..." {...props} />
    </div>
  )
}
