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
                                <h4>Reflux HTML CSS Template</h4>
                                <p>Donec tristique feugiat lacus, at sollicitudin nunc euismod sed. Mauris viverra, erat non sagittis gravida,
                                elit dui mollis ante, sit amet eleifend purus ligula eget eros. Sed tincidunt quam vitae neque pharetra
                                    dignissim eget ut libero.</p>
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
                                <h4>Sed sagittis rhoncus velit</h4>
                                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                Vestibulum fermentum eleifend nibh, vitae sodales elit finibus pretium. Suspendisse potenti.
                                    Ut sollicitudin risus a sollicitudin semper.</p>
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