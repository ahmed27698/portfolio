import ModeToggle from "./toggling"
import Logo from "./Logo"
export default function Nav() {
  return (
    <div className="flex justify-between items-center lg:px-24 md:px-16 px-4 py-4">
        <div className="flex gap-5 items-center">
          <Logo/>
          <ModeToggle/>
        </div>
        <div>
          
        </div>
    </div>
  )
}
