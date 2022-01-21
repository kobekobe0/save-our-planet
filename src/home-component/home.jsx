import React from 'react'
import './home.css'
import { motion } from 'framer-motion'
import { Mailer } from './emaiJs'
import { NavLink } from 'react-router-dom'

export function Home() {
    const mystyle = {
        color: 'white',
        textDecoration: 'none',
    }
    return (
        <motion.div
            className="homeContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <section>
                <h1>
                    Become Part of <br />
                    the Movement
                </h1>
                <p>We need collective efforts in order to save our planet</p>
                <button className="submit">
                    <NavLink style={mystyle} exact to="/contribute">
                        SUPPORT
                    </NavLink>
                </button>
            </section>

            <footer>
                <Mailer />
            </footer>
        </motion.div>
    )
}
