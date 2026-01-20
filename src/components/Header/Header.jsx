"use client";

// import React, { useState } from "react";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   Divider,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import { headerStyles } from "./Header.styles";
// import AddressBar from "./AddressBar";
// import SearchBar from "./SearchBar";
// import AuthSection from "./AuthSection";
import Image from "next/image";
// import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import styled from "styled-components";
// const navItems = [
//   { label: "Home", href: "/" },
//   { label: "Product", href: "/product" },
//   { label: "About Us", href: "/about" },
//   { label: "Contact Us", href: "/contact-us" },
//   { label: "Blogs", href: "/blog" },
// ];

// const GlassAppBar = styled(AppBar)(() => ({
//   backgroundColor: "rgb(16 29 34 / 0.8)",
//   boxShadow: "0 4px 30px rgba(0, 0, 0, 0.01)",
// }));

// const Header = () => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   const pathname = usePathname();

//   const toggleDrawer = (open) => () => {
//     setDrawerOpen(open);
//   };

//   const isActive = (href) =>
//     href === "/" ? pathname === "/" : pathname?.startsWith(href);

//   return (
//     <motion.div
//       initial={{ y: -80, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       <Box sx={headerStyles.wrapper}>
//         {/* Show AddressBar only on desktop */}
//         {/* {!isMobile && <AddressBar />} */}

//         <GlassAppBar>
//           <Toolbar sx={headerStyles.mainHeader}>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//               {isMobile && (
//                 <IconButton onClick={toggleDrawer(true)}>
//                   <MenuIcon sx={{ color: "#606872" }} />
//                 </IconButton>
//               )}
//               <Link href={"/"}>
//                 <Image
//                   src={logo}
//                   alt="Inhyma Logo"
//                   height={40}
//                   width={140}
//                   style={{
//                     objectFit: "contain",
//                     cursor: "pointer",
//                     height: "40px",
//                   }}
//                 />
//               </Link>
//             </Box>

//             {!isMobile && <SearchBar />}
//             {!isMobile && <div></div>}
//           </Toolbar>
//         </GlassAppBar>
//       </Box>

//       {/* Mobile Drawer */}
//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
//         <motion.div
//           initial={{ x: -280 }}
//           animate={{ x: 0 }}
//           exit={{ x: -280 }}
//           transition={{ type: "tween", duration: 0.4 }}
//         >
//           <Box
//             sx={{
//               width: 280,
//               display: "flex",
//               flexDirection: "column",
//               height: "100vh", // Full height to ensure footer sticks
//               backgroundColor: "#fff",
//             }}
//             role="presentation"
//             onClick={toggleDrawer(false)}
//             onKeyDown={toggleDrawer(false)}
//           >
//             {/* Scrollable main section */}
//             <Box sx={{ flex: 1, overflowY: "auto" }}>
//               <List sx={{ py: 0 }}>
//                 <ListItem sx={{ justifyContent: "center", py: 2 }}>
//                   <Link href={"/"}>
//                     <Image
//                       src="/INHYMA_FINAL_LOGO_C2C 1 (1).png"
//                       alt="Inhyma Logo"
//                       height={40}
//                       width={140}
//                       style={{ objectFit: "contain", cursor: "pointer" }}
//                     />
//                   </Link>
//                 </ListItem>

//                 {/* Soft gradient line */}
//                 <Box
//                   sx={{
//                     height: "2px",
//                     background:
//                       "linear-gradient(to right, #d1d1d1, #f5f5f5, transparent)",
//                     mx: 3,
//                     mb: 1,
//                     borderRadius: 2,
//                   }}
//                 />

//                 {navItems.map((item) => (
//                   <ListItem
//                     key={item.label}
//                     sx={{
//                       px: 3,
//                       py: 1.2,
//                       backgroundColor: isActive(item.href)
//                         ? "#F2F7FD"
//                         : "transparent",
//                       borderLeft: isActive(item.href)
//                         ? "4px solid #1955A6"
//                         : "4px solid transparent",
//                       transition: "all 0.3s ease",
//                       "&:hover": {
//                         backgroundColor: "#f8f8f8",
//                       },
//                     }}
//                   >
//                     <Link
//                       href={item.href}
//                       style={{
//                         textDecoration: "none",
//                         color: isActive(item.href) ? "#1955A6" : "#333",
//                         fontWeight: 500,
//                         width: "100%",
//                         display: "block",
//                       }}
//                     >
//                       {item.label}
//                     </Link>
//                   </ListItem>
//                 ))}

//                 <Divider sx={{ my: 2 }} />
//                 <ListItem>{/* Optional Auth/Search here */}</ListItem>
//               </List>
//             </Box>

//             {/* Sticky bottom AddressBar */}
//             <Box
//               sx={{
//                 px: 1,
//                 py: 1,
//                 borderTop: "1px solid #eee",
//                 backgroundColor: "#fff",
//               }}
//             >
//               <AddressBar />
//             </Box>
//           </Box>
//         </motion.div>
//       </Drawer>
//     </motion.div>
//   );
// };

// export default Header;

import Link from "next/link";
import React from "react";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-background-dark/80 backdrop-blur-md">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-12">
          <div class="flex items-center gap-3">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="Inhyma Logo"
                height={40}
                width={140}
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  height: "40px",
                }}
              />
            </Link>
          </div>
          <nav class="hidden md:flex items-center gap-8">
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Collections
            </a>
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Shop by Room
            </a>
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Textures
            </a>
            <a
              class="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              Bespoke
            </a>
          </nav>
        </div>
        <div class="flex items-center gap-6">
          <div class="relative hidden lg:block">
            {/* <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
              search
            </span> */}
            <SearchBar />
            {/* <input
              class="bg-white/5 border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary w-64 transition-all"
              placeholder="Search aesthetics..."
              type="text"
            /> */}
          </div>
          <button class="material-symbols-outlined text-white/70 hover:text-white">
            favorite
          </button>
          <button class="material-symbols-outlined text-white/70 hover:text-white relative">
            shopping_bag
            <span class="absolute -top-1 -right-1 bg-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </button>
          <button class="bg-[#00D4C8] hover:bg-[#00D4C8]/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
