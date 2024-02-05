'use client'
import React from 'react'
import { motion } from "framer-motion"

export default function Motion({ children, duration, className }) {
    return (
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: duration }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
