"use client"
import { createContext } from "react";

type SidebarContextType = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};


const SidebarContext = createContext<SidebarContextType | null>(null)

export default SidebarContext