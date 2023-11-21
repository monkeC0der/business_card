import { useState } from 'react';
import About from "../components/About"
import Info from "../components/Info"
import Footer from "../components/Footer"

export default function Card() {
    return (
        <div className="card">
            <About/>
            <Info/>
            <Footer/>
        </div>
    )
}