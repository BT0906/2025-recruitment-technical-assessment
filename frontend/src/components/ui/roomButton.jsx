import { Button } from "@/components/ui/button"

export function RoomButton({ roomsAvailable = 0, className, ...props }) {
  // assuming orange indicator at <= 5 available rooms left
  return (
    <>
      {/* SM BUTTON */}
      <Button
        className={`p-2 flex sm:hidden bg-background text-black text-xs hover:bg-accent hover:ring hover:ring-2 hover:ring-primary transition-all rounded-2xl ${className}}`}
        {...props}
      >
        <div className={`w-3 h-3 rounded-full ${roomsAvailable <= 0 ? 'bg-red-500' : roomsAvailable <= 5 ? 'bg-orange-400' : 'bg-green-600'}`}/>
        <span>{roomsAvailable} / {roomsAvailable}</span>
      </Button>

      {/* MD+ BUTTON */}
      <Button
        className={`hidden sm:flex bg-background text-black text-xs hover:bg-accent hover:ring hover:ring-2 hover:ring-primary transition-all ${className}}`}
        {...props}
      >
        <div className={`w-3 h-3 rounded-full ${roomsAvailable <= 0 ? 'bg-red-500' : roomsAvailable <= 5 ? 'bg-orange-400' : 'bg-green-600'}`}/>
        {roomsAvailable} room{roomsAvailable !== 1 && 's'} available
      </Button>
    </>
  )
}

