import React from "react";
import { motion } from "framer-motion";
import "./ChefWord.css";

const ChefWord = () => {
    return (
        <motion.section
            className="chef-word"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="chef-word-container">
                {/* Chef Message */}
                <motion.div
                    className="chef-message"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <h2 className="section-title">A Word From Our Chef</h2>
                    <blockquote className="chef-quote">
                        "Cooking is an art, and every dish tells a story. At our restaurant,
                        we blend tradition with innovation to create an unforgettable dining
                        experience for you."
                    </blockquote>
                    <p className="chef-name">- Chef John Doe</p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ChefWord;
