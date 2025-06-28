import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">MyApp</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/dashboard">Dashboard</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
           <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
        </div>
      </div>
    </header>
  );
}