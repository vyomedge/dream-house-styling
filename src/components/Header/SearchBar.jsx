"use client";

import { Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

const SearchBar = ({ onSearch, value }) => {
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div style={{ position: "relative" }}>
      <Box sx={{ display: "flex", justifyContent: "center", px: 1 }}>
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
          }}
        >
          <div className="relative w-full">
            {isBelowLg && (
              <span
                className="material-symbols-outlined text-white/70 hover:text-white text-xl cursor-pointer p-2"
                onClick={() => setIsExpanded(true)}
              >
                search
              </span>
            )}

            {!isBelowLg && (
              <>
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
                  search
                </span>
                <input
                  className="    bg-[#101d22]  border border-white/20 rounded-full  pl-10 pr-4 py-2  text-sm w-64 focus:w-96 transition-all  text-white focus:outline-none  focus:border-[var(--primaryColor)] focus:ring-1  focus:ring-[var(--primaryColor)]"
                  placeholder="Search products..."
                  type="text"
                  value={value}
                  onChange={onSearch}
                />
              </>
            )}
          </div>
        </Box>
      </Box>

      {/* MOBILE FULLSCREEN SEARCH */}
      {isBelowLg && isExpanded && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-[#101d22]/90"
            onClick={() => setIsExpanded(false)}
          />
          <div
            className="relative z-[110] flex items-center gap-3 p-4 border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="material-symbols-outlined text-white text-2xl"
            >
              arrow_back
            </button>
            <div className="flex-1 relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
                search
              </span>
              <input
                className="    bg-[#101d22]  border border-transparent rounded-full  pl-10 pr-4 py-2  text-sm w-full text-white focus:outline-none  focus:border-[var(--primaryColor)] focus:ring-1 focus:ring-[var(--primaryColor)]"
                placeholder="Search products..."
                value={value}
                onChange={onSearch}
                autoFocus
                type="text"
              />
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="material-symbols-outlined text-white/70 hover:text-white text-2xl"
            >
              close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default SearchBar;
