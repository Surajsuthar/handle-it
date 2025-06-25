"use client"
import { Home, Settings, User, ChevronUp } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator 
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useSidebar } from "@/context/useSidebar";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ 
    className 
}: SidebarProps) => {

  const { isMobile, open } = useSidebar()
  const { data: session, status } = useSession();
  console.log("session", session, status)
  
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Settings, label: "Settings", href: "/settings" },
    { icon: User, label: "Profile", href: "/profile" },
  ];

  return (
    <section className={`w-full flex flex-col justify-between h-full p-1.5 relative ${className}`}>
      <div className="h-[50px] w-full flex items-center justify-center rounded-md">
        { isMobile || !open ? (
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <span className="font-black text-lg text-primary-foreground">H</span>
          </div>
        ) : (
          <h1 className="font-black text-xl">Handle-it</h1>
        )}
      </div>

      <section className="flex-1 py-4">
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={item.label}
                variant="ghost"
                className={`w-full ${isMobile || !open ? 'justify-center px-2' : 'justify-start gap-3 px-3'} h-12 text-left cursor-pointer`}
                title={isMobile || !open ? item.label : undefined }
              >
                <IconComponent className="h-8 w-8" />
                {(isMobile || !open) || (
                  <span className="font-bold">{item.label}</span>
                )}
              </Button>
            );
          })}
        </nav>
      </section>

      <div className="w-full mt-auto">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={`h-[60px] flex w-full p-3 ${isMobile || !open ? 'justify-center' : 'justify-between'} items-center cursor-pointer rounded-md`}
            >
              {isMobile || !open ? (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={session?.user?.image as string} alt="User avatar" />
                  <AvatarFallback className="font-semibold text-xs">
                    {session?.user?.name ? session?.user?.name?.charAt(0) : "UK"}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session?.user?.image as string} alt="User avatar" />
                      <AvatarFallback className="font-semibold">
                        {session?.user?.name ? session?.user?.name?.charAt(0) : "UK"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-sm">{session?.user?.name}</p>
                      <p className="text-xs">{session?.user?.email}</p>
                    </div>
                  </div>
                  <ChevronUp className="h-4 w-4" />
                </>
              )}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56"
            side={isMobile ? "bottom" : "right"}
            >
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="">
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
};