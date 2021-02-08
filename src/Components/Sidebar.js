import React from "react"

export default function Sidebar () {
    return (
        <div className="responsive-nav">
            <i className="fa fa-bars" id="menu-toggle"></i>
            <div id="menu" className="menu">
                <i className="fa fa-times" id="menu-toggle"></i>

                <div className="container">
                    <div className="image">
                        <a href="#">
                            <img src={process.env.PUBLIC_URL + "template_reflux/assets/images/patrick-square.jpg"} alt="patrick-image"/>   
                        </a>
                    </div>
                    <div className="author-content">
                        <h4>Patrick Sullivan</h4>
                        <span>Developer and Musician</span>
                    </div>
                    
                    <nav className="main-nav" role="navigation">
                        <ul className="main-menu">
                            <li>
                                <a href="#section1">About Me</a>
                            </li>
                            <li>
                                <a href="#section2">My Skills</a>
                            </li>
                            <li>
                                <a href="#section3">My Works</a>
                            </li>
                            <li>
                                <a href="#section4">Contact Me</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="social-network">
                        <ul className="soial-icons">
                            <li>
                                <a href="https://www.linkedin.com/in/pattywack/">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/sulli204">
                                    <i className="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://open.spotify.com/artist/2RWNZvSQh0n6fHseIQZhWJ?si=r0LDajOKR7WXyvpWlEOw4g">
                                    <i className="fa fa-spotify"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://soundcloud.com/perint">
                                    <i className="fa fa-soundcloud"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}