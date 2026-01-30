"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";

import { motion } from "framer-motion";

const SearchBar = ({ onSearch, value }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <motion.div style={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 1,
          mb: isMobile ? 2 : 0,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            display: "flex",
            alignItems: "center",
            borderRadius: 12,
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#0d47a1",
              boxShadow: "0 4px 24px rgba(13,71,161,0.15)",
            },
          }}
        >
          <div className="relative hidden lg:block w-full ">
            <span className="font-dm material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
              search
            </span>
            <input
              className="bg-white/5 border-white/10 outline-0 duration-500 rounded-full pl-10 pr-4 py-2 text-sm focus-within:border  focus:ring-(--primaryColor) focus:border-(--primaryColor) w-64 transition-all focus:w-96"
              placeholder="Search products..."
              type="text"
              value={value}
              onChange={onSearch}
            />
          </div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SearchBar;
