import React from 'react'
import "../Header/header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitlesSm">
                    REACT AND NODE
                </span>
                <span className="headerTitlesLg">
                    Blog
                </span>
                <img className="headerImg"
                 src="https://images.unsplash.com/photo-1499810631641-541e76d678a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FsbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                 alt="" srcset="" />
            </div>
        </div>
    )
}

export default Header
