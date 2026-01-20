"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Box,
  InputBase,
  IconButton,
  useMediaQuery,
  useTheme,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { motion } from "framer-motion";
import axios from "axios";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const itemRefs = useRef([]);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const inputRef = useRef();

  const searchAPI = async (searchTerm) => {
    if (!searchTerm.trim()) return;

    try {
      const response = await axios.get(`/api/search?q=${searchTerm}`);
      setResults(response.data || []);
      setShowDropdown(true);
      setHighlightedIndex(-1); // Reset highlight on new search
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const debouncedSearch = useCallback(debounce(searchAPI, 500), []);
  useEffect(() => {
    if (highlightedIndex >= 0 && itemRefs.current[highlightedIndex]) {
      itemRefs.current[highlightedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);
  useEffect(() => {
    if (query.trim()) {
      debouncedSearch(query);
    } else {
      setResults([]);
      setShowDropdown(false);
    }

    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (highlightedIndex >= 0 && results[highlightedIndex]) {
      router.push(`/product-details/${results[highlightedIndex]._id}`);
    } else if (results.length > 0) {
      router.push(`/product-details/${results[0]._id}`);
    }
  };

  const handleSelect = (productId) => {
    router.push(`/product-details/${productId}`);
    setShowDropdown(false);
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (!showDropdown || results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0) {
        handleSelect(results[highlightedIndex]._id);
      }
    } else if (e.key === "Escape") {
      setShowDropdown(false);
    }
  };

  return (
    <motion.div style={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          px: 1,
          mt: isMobile && 2,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            display: "flex",
            alignItems: "center",
            borderRadius: 12,
            overflow: "hidden",
            backdropFilter: "blur(8px)",
            // border: "1px solid rgba(0,0,0,0.1)",
            // background: "rgba(255,255,255,0.85)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            transition: "all 0.3s ease",
            "&:hover": {
              borderColor: "#0d47a1",
              boxShadow: "0 4px 24px rgba(13,71,161,0.15)",
            },
          }}
        >
          {/* <InputBase
            inputRef={inputRef}
            sx={{
              flex: 1,
              px: 2,
              fontFamily: "Inter",
              fontSize: "15px",
              fontWeight: 400,
              color: "#333",
              fontFamily: "sans-serif",
              "::placeholder": {
                color: "#888",
              },
            }}
            placeholder="Search for products, brands and more…"
            inputProps={{ "aria-label": "search input" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length && setShowDropdown(true)}
            onKeyDown={handleKeyDown}
          /> */}

          <div class="relative hidden lg:block w-full">
            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
              search
            </span>
            <input
              class="bg-white/5 border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:ring-primary focus:border-primary w-64 transition-all"
              placeholder="Search aesthetics..."
              type="text"
            />
          </div>

          {/* <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}>
            <IconButton
              type="submit"
              sx={{
                backgroundColor: "var(--background)",
                height: "100%",
                px: 3,
                borderRadius: 0,
                color: "#fff",
                borderLeft: "1px solid #ddd",
                "&:hover": {
                  backgroundColor: "#08306b",
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </motion.div> */}
        </Box>
      </Box>

      {/* Autocomplete Dropdown */}
      {showDropdown && results.length > 0 && (
        <Paper
          sx={{
            position: "absolute",
            width: "100%",
            maxWidth: 630,
            zIndex: 10,
            mt: 1,
            maxHeight: 300,
            overflowY: "auto",
            left: "150px",
          }}
        >
          <List dense>
            {results.map((item, index) => (
              <ListItem
                disablePadding
                key={item._id}
                ref={(el) => (itemRefs.current[index] = el)}
                sx={{
                  backgroundColor:
                    index === highlightedIndex ? "#e3f2fd" : "transparent",
                }}
              >
                <ListItemButton onClick={() => handleSelect(item._id)}>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </motion.div>
  );
};

export default SearchBar;
