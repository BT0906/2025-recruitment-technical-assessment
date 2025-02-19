import { Button } from "@/components/ui/button"

export function RatingButton({ buildingName, rating = 0, className, ...props }) {
  return (
    <>
      {/* SM BUTTON */}
      <Button
        className={`p-2 flex sm:hidden bg-background text-foreground text-xs hover:bg-accent hover:ring hover:ring-2 hover:ring-primary transition-all rounded-2xl ${className}}`}
        {...props}
      >
        <svg className="ml-1 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
        </svg>
        <span>{rating}</span>
      </Button>

      {/* MD+ BUTTON */}
      <Button className={`hidden sm:flex justify-between min-h-12 text-wrap text-start text-white hover:bg-primary hover:ring hover:ring-2 hover:ring-white transition-all ${className}`} {...props}>
        <div>{buildingName}</div>
        <div className="flex items-center">
          <span>{rating}</span>
          <svg className="ml-1 text-yellow-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
          </svg>
        </div>
      </Button>
    </>
  )
}

