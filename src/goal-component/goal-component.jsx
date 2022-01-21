import React from 'react'
import './goal.css'
import { motion } from 'framer-motion'
import ScrollAnimation from 'react-animate-on-scroll'

export function Goal() {
    return (
        <motion.div
            className="goal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="upperGoal">
                <h1>Our Mission</h1>
            </div>

            <div className="lowerGoal">
                <ScrollAnimation animateIn="fadeIn" className="cardGoal">
                    <img src="carbon.jpg" alt="serene" />

                    <div>
                        <h2>Reduce Carbon Emission</h2>
                        <p>
                            Lorem Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Iste tenetur doloremque ut, eum
                            molestias modi? ipsum dolor sit amet consectetur
                            adipisicing elit. Ducimus eligendi illum distinctio
                            accusamus odit expedita consectetur quisquam
                            consequatur obcaecati libero.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" className="cardGoal">
                    <img src="poverty.jpg" alt="serene" />

                    <div>
                        <h2>Fight Poverty</h2>
                        <p>
                            Lorem Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Iste tenetur doloremque ut, eum
                            molestias modi? ipsum dolor sit amet consectetur
                            adipisicing elit. Ducimus eligendi illum distinctio
                            accusamus odit expedita consectetur quisquam
                            consequatur obcaecati libero.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" className="cardGoal">
                    <img src="education.jpg" alt="serene" />

                    <div>
                        <h2>Give Awareness</h2>
                        <p>
                            Lorem Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Iste tenetur doloremque ut, eum
                            molestias modi? ipsum dolor sit amet consectetur
                            adipisicing elit. Ducimus eligendi illum distinctio
                            accusamus odit expedita consectetur quisquam
                            consequatur obcaecati libero.
                        </p>
                    </div>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeIn" className="cardGoal">
                    <img src="ecosystem.jpg" alt="serene" />

                    <div>
                        <h2>Balanced Ecosystem</h2>
                        <p>
                            Lorem Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Iste tenetur doloremque ut, eum
                            molestias modi? ipsum dolor sit amet consectetur
                            adipisicing elit. Ducimus eligendi illum distinctio
                            accusamus odit expedita consectetur quisquam
                            consequatur obcaecati libero.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>

            <div className="footerGoal"></div>
        </motion.div>
    )
}
