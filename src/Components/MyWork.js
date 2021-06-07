import React from "react"

export default function MyWork() {
    return (
        <section className="section my-work" data-section="section3">
            <div className="container">
                <div className="section-heading" id="works">
                    <h2>Experience</h2>
                    <div className="line-dec"></div>
                    <span>Here, I will go in depth of my professional experience during school.</span>
                </div>
                <div className="row">
                    <h4>Discover Financial Services</h4>
                    <br/>
                    <div className="col-md-12">
                        <p>My professional career as a developer started at Discover Financial Services 
                            located in Riverwoods, Illinois.  Serving as an intern, I was apart of a team 
                            who took part in the Xtreme Programming development approach.  As opposed to 
                            the usual 3-4 week sprints, our sprints were 1 week long.  The idea is to create
                            the smallest deliverable user stories that we could think of, and implement them
                            through paired programming.
                        </p>
                    </div>
                    <div className="col-md-12">
                        <p>We were expected to develop at the fullstack capacity with our stack being 
                            Java's Spring Boot backend with a ReactJS frontend.  We were also expected to 
                            approach implementation with Test Driven Development (TDD), developing test cases 
                            before implementing any code.  We also practiced continuous integration via maintaining
                            our codebase through github, requesting, reviewing, and approving pull requests, 
                            and deploying through a Jenkins pipeline.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}