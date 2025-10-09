"use client";

import React from "react";
import { motion } from "framer-motion";

function Notification() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-12 bg-amber-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer"
    >
      Special offer: 20% off for first-time customers!
    </motion.div>
  );
}

export default Notification;
