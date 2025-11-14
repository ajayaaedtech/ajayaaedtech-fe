"use client";

import Link from "next/link";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { X, Home, User, Briefcase, Mail, Settings, Info, LogOut } from "lucide-react";

// SAFE icon mapping
const getMenuIcon = (title) => {
  const icons = {
    "Home": Home,
    "Our Courses": Briefcase,
    "About Us": Info,
    "Contact": Mail,
    "New Batches": Settings,
  };

  const Icon = icons[title] || Home;
  return <Icon size={20} />;
};

export default function MobileMenu({ isOpen, toggleDrawer, menuItems, isLoggedIn, handleLogout }) {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          width: "300px",
          boxSizing: "border-box",
          backgroundColor: "rgba(30,58,138,0.95)",
          backdropFilter: "blur(12px)",
          borderLeft: "1px solid rgba(59,130,246,0.4)",
        },
      }}
    >
      <Box className="h-full relative">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-blue-300/20">
          <div className="text-white font-semibold text-lg border-b-4 border-orange-500">
            Ajayaa EdTech
          </div>

          <button
            onClick={toggleDrawer(false)}
            className="text-blue-200 hover:text-white transition-all p-2 rounded-full hover:bg-blue-600/30"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <List className="px-4 py-2">
          {menuItems.map((item) => (
            <ListItem key={item.title} disablePadding sx={{ mb: "6px" }}>
              <ListItemButton
                component={Link}
                href={item.link}
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: "12px",
                  padding: "12px 16px",
                  backgroundColor: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  "&:hover": {
                    backgroundColor: "rgba(59,130,246,0.25)",
                    transform: "translateX(8px)",
                    borderColor: "rgba(59,130,246,0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-blue-300">{getMenuIcon(item.title)}</div>

                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#e2e8f0",
                    }}
                  />
                </div>
              </ListItemButton>
            </ListItem>
          ))}

          {/* Login / Logout SECTION */}
          <ListItem disablePadding sx={{ mt: 2 }}>
            {isLoggedIn ? (
              <ListItemButton
                onClick={() => {
                  handleLogout();
                  toggleDrawer(false)();
                }}
                sx={{
                  borderRadius: "12px",
                  padding: "12px 16px",
                  backgroundColor: "rgba(220,38,38,0.15)",
                  border: "1px solid rgba(220,38,38,0.3)",
                  "&:hover": {
                    backgroundColor: "rgba(220,38,38,0.3)",
                    transform: "translateX(8px)",
                    borderColor: "rgba(220,38,38,0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex items-center gap-3">
                  <LogOut size={20} className="text-red-400" />
                  <ListItemText
                    primary="Logout"
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#fecaca",
                    }}
                  />
                </div>
              </ListItemButton>
            ) : (
              <ListItemButton
                component={Link}
                href="/auth"
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: "12px",
                  padding: "12px 16px",
                  backgroundColor: "rgba(59,130,246,0.12)",
                  border: "1px solid rgba(59,130,246,0.25)",
                  "&:hover": {
                    backgroundColor: "rgba(59,130,246,0.25)",
                    transform: "translateX(8px)",
                  },
                }}
              >
                <div className="flex items-center gap-3">
                  <User size={20} className="text-blue-300" />
                  <ListItemText
                    primary="Login"
                    primaryTypographyProps={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: "#e2e8f0",
                    }}
                  />
                </div>
              </ListItemButton>
            )}
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
