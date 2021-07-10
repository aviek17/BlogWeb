import React from 'react'
import "../Home/home.css"
import Header from "../Header/Header"
import Post from "../AddPost/Post"
import Sidebar from "../SideBar/Sidebar"

const Home = () => {
    return (
        <>
            <Header/>
            <div className="home">
                <Post/>
                <Sidebar/>
                
            </div>
        </>
    )
}

export default Home
