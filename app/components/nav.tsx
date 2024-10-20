import { Link } from "@remix-run/react";
import * as React from "react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { constants } from "~/data/siteData";

export function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the sheet on link click
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 md:py-4">
      <div className="flex items-center space-x-4">
        <Link className="flex items-center space-x-2" to="/" preventScrollReset>
          <h1 className="text-2xl font-bold">
            {constants.firstLastname}, {constants.professionalTitle}
          </h1>
        </Link>
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            className="w-12 h-12 rounded-full border border-gray-100 p-2 flex items-center justify-center"
            size="icon"
            variant="outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="sr-only">Links</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle className="text-xl font-bold">Links</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col space-y-4 mt-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-blue-600"
              onClick={handleLinkClick}
              preventScrollReset
            >
              Home
            </Link>
            <Link
              to="https://github.com/morrisonak/Remix-Shadcn-Portfolio"
              className="text-gray-800 hover:text-blue-600"
              onClick={handleLinkClick}
            >
              Github Repo
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
