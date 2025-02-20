import { useState } from 'react'

export function FreeroomsLogo({ className, ...props }) {
  const [doorClosed, setDoorClosed] = useState(false);

  return (
    <div
      className={`flex items-center cursor-pointer  hover:opacity-80 transition-opacity duration-300 ${className}`}
      onClick={() => {
        const doorState = doorClosed
        setDoorClosed(!doorState)
      }}
      {...props}
    >
      <img className={`${doorClosed ? "hidden" : ""}`} src="./assets/freeRoomsLogo.png" width={50} />
      <img className={`${!doorClosed ? "hidden" : ""}`} src="./assets/freeroomsDoorClosed.png" width={50} />
      <span className="hidden sm:block text-primary font-bold text-2xl">Freerooms</span>
    </div>
  )
}
