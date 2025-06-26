"use client";
import Link from "next/link";
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { X, Home, User, Briefcase, Mail, Settings, Info } from "lucide-react";

// Icon mapping for common menu items
const getMenuIcon = (itemName) => {
  const iconMap = {
    'Home': Home,
    'About': Info,
    'Services': Settings,
    'Portfolio': Briefcase,
    'Contact': Mail,
    'Profile': User,
  };

  // Default to Home icon if no match found
  const IconComponent = iconMap[itemName] || Home;
  return <IconComponent size={20} />;
};

export default function MobileMenu({ isOpen, toggleDrawer, menuItems }) {
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '300px',
          boxSizing: 'border-box',
          backgroundColor: 'rgba(30, 58, 138, 0.95)', // Semi-transparent blue
          backdropFilter: 'blur(10px)',
          borderLeft: '1px solid rgba(59, 130, 246, 0.3)',
        },
      }}
    >
      <Box
        role="presentation"
        className="h-full relative"
      >
        {/* Header with close button */}
        <div className="flex justify-between items-center p-6 border-b border-blue-400/20">
          <div className="text-white font-semibold text-lg mt-4 inline-block border-b-4 border-orange-500">
            Ajaya EdTech
          </div>

          <button
            onClick={toggleDrawer(false)}
            className="text-blue-200 hover:text-white transition-all duration-200 p-2 rounded-full hover:bg-blue-600/30"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu Items */}
        <List className="px-4 py-2">
          {menuItems.map((item, index) => (
            <ListItem key={item.name} disablePadding className="mb-2">
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={toggleDrawer(false)}
                sx={{
                  borderRadius: '12px',
                  padding: '12px 16px',
                  marginBottom: '4px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(59, 130, 246, 0.25)',
                    transform: 'translateX(8px)',
                    borderColor: 'rgba(59, 130, 246, 0.4)',
                  },
                }}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className="text-blue-300 hover:text-white transition-colors">
                    {getMenuIcon(item.name)}
                  </div>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#e2e8f0',
                    }}
                  />
                </div>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>

        {/* Optional: Add some decorative SVG patterns */}
        <div className="absolute top-20 right-4 opacity-10 pointer-events-none">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="2" className="text-blue-300" />
            <circle cx="30" cy="30" r="15" stroke="currentColor" strokeWidth="1" className="text-blue-400" />
            <circle cx="30" cy="30" r="5" fill="currentColor" className="text-blue-500" />
          </svg>
        </div>

        <div className="absolute bottom-20 left-4 opacity-10 pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="10" y="10" width="20" height="20" stroke="currentColor" strokeWidth="2" className="text-blue-300" rx="4" />
            <rect x="15" y="15" width="10" height="10" fill="currentColor" className="text-blue-400" rx="2" />
          </svg>
        </div>
      </Box>
    </Drawer>
  );
}