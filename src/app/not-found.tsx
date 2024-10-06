"use client";
import Layout from "./(front)/layout";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <Layout>
            <motion.div 
                className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-muted/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1 
                    className="text-8xl font-extrabold text-center text-primary mb-4"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    404
                </motion.h1>
                <motion.p 
                    className="text-2xl text-center text-muted-foreground mb-8"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                >
                    Oops! You&apos;ve stumbled upon a mystery...
                </motion.p>
                <motion.div 
                    className="w-16 h-16 border-t-4 border-primary rounded-full animate-spin mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                />
                <motion.p 
                    className="text-lg text-center text-muted-foreground max-w-md mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    Something incredible is brewing behind the scenes. Stay tuned for an experience that will redefine your expectations.
                </motion.p>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                        Return to Safety
                    </Link>
                </motion.div>
            </motion.div>
        </Layout>
    )
}