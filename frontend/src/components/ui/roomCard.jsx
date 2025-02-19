import { Card } from "@/components/ui/card"
import { RoomButton } from "./roomButton"
import { RatingButton } from "./ratingButton"

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
          <RoomButton roomsAvailable={roomsAvailable}/>
          <RatingButton className="sm:w-full" buildingName={name} rating={rating}/>
        </div>
      </section>

      {/* md+ layout */}
      <section className="hidden sm:flex flex-col h-full w-full justify-center space-y-1 sm:justify-between p-4 relative z-10">
        <div className="self-end">
          <RoomButton roomsAvailable={roomsAvailable}/>
        </div>
        <RatingButton className="sm:w-full" buildingName={name} rating={rating}/>
      </section>

    </Card>
  )
}

