import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function RoomCard({ name, picture, rating = 0.0, roomsAvailable = 0, className, ...props }) {
  return (
    <Card
      className={`border-none sm:h-48 lg:h-64 xl:h-80 bg-cover bg-center relative overflow-hidden group cursor-pointer ${className}`}
      style={{ backgroundImage: `url(${picture})` }}
      {...props}
    >
      {/* black overaly (darken) */}
      <div className="absolute inset-0 bg-black opacity-40 sm:opacity-10 group-hover:opacity-0 transition-opacity duration-300"/>

      {/* orange overlay (on hover)*/}
      <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"/>

      {/* sm layout */}
      <section className="sm:hidden flex justify-between items-center p-4 relative z-10">
        <div className="text-white font-bold">{name}</div>
        <div className="flex flex-col space-y-1 w-20">
          <Button className="p-2 bg-background text-foreground text-xs hover:bg-accent hover:ring-2 hover:ring-primary transition-all rounded-2xl">
            <div className={`w-3 h-3 rounded-full ${roomsAvailable <= 0 ? 'bg-red-500' : roomsAvailable <= 5 ? 'bg-orange-400' : 'bg-green-600'}`}/>
            <span>{roomsAvailable} / {roomsAvailable}</span>
          </Button>
          <Button className="p-2 bg-background text-foreground text-xs hover:bg-accent hover:ring-2 hover:ring-primary transition-all rounded-2xl">
            <Star className="stroke-yellow-400 fill-yellow-400"/>
            <span>{rating}</span>
          </Button>
        </div>
      </section>

      {/* md+ layout */}
      <section className="hidden sm:flex flex-col h-full w-full justify-center space-y-1 sm:justify-between p-4 relative z-10">
        <div className="self-end">
          <Button className="bg-background text-foreground text-xs hover:bg-accent hover:ring-2 hover:ring-primary transition-all">
            <div className={`w-3 h-3 rounded-full ${roomsAvailable <= 0 ? 'bg-red-500' : roomsAvailable <= 5 ? 'bg-orange-400' : 'bg-green-600'}`}/>
            {roomsAvailable} room{roomsAvailable !== 1 && 's'} available
          </Button>
        </div>
        <Button className="justify-between min-h-12 text-wrap text-start text-white hover:bg-primary hover:ring-2 hover:ring-white transition-all">
          <div>{name}</div>
          <div className="flex items-center">
            <span>{rating}</span>
            <Star className="ml-1 stroke-yellow-400 fill-yellow-400"/>
          </div>
        </Button>
      </section>
    </Card>
  )
}

