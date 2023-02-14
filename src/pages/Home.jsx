import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
import './Home.css'

const Home = () => {

    useEffect(() => {
        axios.get('http://localhost:5000/')
            .then((res) => console.log("first", res))
            .catch((err) => console.log("first", err))
    }, [])

    return (
        <>
            {/* <Navbar /> */}
            <div>Home</div>
            <div className='headerD'>

                <section className="h-txt">
                    <span>Enjoy</span>
                    <h1>International Travel Agency</h1>
                    <br />
                    <a href="#">Book your Trip</a>
                </section>

            </div>
        </>
    )
}

export default Home