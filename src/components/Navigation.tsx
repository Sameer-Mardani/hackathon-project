import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/components/ui/Logo"; // Adjust the import path to match your Logo.tsx location

const Navigation = () => {
  const navigate = useNavigate();
  
  const menuItems = [
    { name: "Human Care", description: "Professional therapy support", path: "/human-care" },
    { name: "Mini Games", description: "Relaxing games to calm your mind", path: "/mini-games" },
    { name: "Forum", description: "Share and connect with others", path: "/forum" },
    { name: "Anonymous Peer Support", description: "Chat with understanding peers", path: "/peer-support" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-wellness-purple">
          <Logo />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="group border border-[#76C7C0] rounded-md hover:border-[#76C7C0]/70 transition-colors"
            >
              <Menu className="h-6 w-6 text-[#76C7C0] group-hover:text-[#A0AEC0] transition-colors" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-6 mt-8">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="group cursor-pointer"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <div className="text-lg font-medium">{item.name}</div>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navigation;