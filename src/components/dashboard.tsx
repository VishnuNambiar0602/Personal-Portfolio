
"use client"

import * as React from "react"
import {
  AppWindow,
  ArrowLeftRight,
  BarChart,
  ChevronLeft,
  Settings,
  User,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

import AboutSection from "./about-section"
import ContactSection from "./contact-section"
import ExperienceSection from "./experience-section"
import ProjectsSection from "./projects-section"

export default function Dashboard() {
  const [activeSection, setActiveSection] = React.useState("about")

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection />
      case "projects":
        return <ProjectsSection />
      case "experience":
        return <ExperienceSection />
      case "contact":
        return <ContactSection />
      default:
        return <AboutSection />
    }
  }

  return (
    <SidebarProvider>
      <Sidebar side="left" collapsible="icon">
        <SidebarHeader>
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white"/>
                        <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0V20Z" fill="#F7CCAF"/>
                    </svg>
                </div>
                <h2 className="text-xl font-semibold tracking-tight text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                    My Digital Stage
                </h2>
            </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActiveSection('about')} isActive={activeSection === 'about'} tooltip="About">
                <Users />
                <span>About</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton onClick={() => setActiveSection('projects')} isActive={activeSection === 'projects'} tooltip="Projects">
                <ArrowLeftRight />
                <span>Projects</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveSection('experience')} isActive={activeSection === 'experience'} tooltip="Experience">
                    <BarChart />
                    <span>Experience</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
             <SidebarMenuItem>
                <SidebarMenuButton onClick={() => setActiveSection('contact')} isActive={activeSection === 'contact'} tooltip="Contact">
                    <Settings />
                    <span>Contact</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        {renderSection()}
      </SidebarInset>
    </SidebarProvider>
  )
}
