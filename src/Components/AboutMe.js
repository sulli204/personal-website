import React from "react"

export default function AboutMe() {
    return (
        <section className="section about-me" data-section="section1">
            <div className="container">
                <div className="section-heading" id="about">
                    <h2>About Me</h2>
                    <div className="line-dec"></div>
                    <span>Hi, I'm Patrick Sullivan! I'm a recent graduate from Purdue University
                    with a degree in Computer Science.
                        Here you'll find a portfolio of my works from the latter half of college to the present.</span>
                </div>
                <div className="left-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-image">
                                <img src={process.env.PUBLIC_URL + 'template_reflux/assets/images/left-image.jpg'} alt="left-image"></img>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-text">
                                <h4>Computer Science Major with a Concentration in Software Engineering</h4>
                                <p>I attended Purdue University's main campus located in West Lafayette (my hometown).  I majored
                                    in Computer Science and tracked in Software Engineering.  I particularly decided Computer Science
                                    because of its versitality.  To me, programming is not far from being an art of itself, and that
                                    is what was so appealing to me.
                                </p>
                                {/* I facilitated the data transfer from Taxko - Club Automation to Racquet Desk for Purdue University Athletics - Schwartz Tennis Center. */}
                                <div className="white-button">
                                    <a href="github.com">Look Here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-text">
                                <h4>Involvment With the Arts</h4>
                                <p>Outside of my main studies, I had a background in acting and musical performance.  I decided to also 
                                    further my education in acting and music theory.  A story to me is best expressed visually, audibly, 
                                    or a combination of the two.  The arts hold a large space in my heart.
                                </p>
                            </div>
                            <div className="white-button">
                                <a href="github.com">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src={process.env.PUBLIC_URL + 'template_reflux/assets/images/right-image.jpg'} alt="left-image"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-image-post">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="left-text">
                                <h4>Passions Outside of School</h4>
                                <p>Beyond my studies, I spent and still spend a lot of time into composing and producing music under
                                    a pseudonym, Perint.  Typically, I make electronic music with heavy influences from Porter Robinson,
                                    Madeon, Laxcity, and Instupendo.  Also, I love creating visual arts! Specifically 3D rendering through
                                    Blender and effects through Adobe After Effects.
                                </p>
                            </div>
                            <div className="white-button">
                                <a href="github.com">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="right-image">
                                <img src={process.env.PUBLIC_URL + 'template_reflux/assets/images/right-image.jpg'} alt="left-image"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}