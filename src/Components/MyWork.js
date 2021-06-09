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
                    <div className="col-md-12">
                        <ul>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px" }}>
                                Serving as an intern, I was apart of a team
                                who took part in the Xtreme Programming development approach.  As opposed to
                                the usual 3-4 week sprints, our sprints were 1 week long. The idea is to create
                                the smallest deliverable user stories that we could think of, and implement them
                                through paired programming.
                            </li>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px" }}>
                                Participation in daily stand-up meetings to discuss our previous day's work was expected
                                and also very important to the whole team since one pair did not spend more than 2-3 days
                                on a user story.
                            </li>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px" }}>
                                We were expected to develop at the fullstack capacity with our stack being
                                Java's Spring Boot backend with a ReactJS frontend.  We were also expected to
                                approach implementation with Test Driven Development (TDD), developing test cases
                                before implementing any code.
                            </li>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px" }}>
                                Our team practiced continuous integration via maintaining
                                our codebase through github, requesting, reviewing, and approving pull requests,
                                and deploying through a Jenkins pipeline. Our application was continuously deployed
                                as microservices on Cloud Foundry where they were hosted.
                            </li>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px" }}>
                                The week concluded with a sprint review and retrospective.  We often would talk about
                                what user stories were completed, what stories need more work on, and what stories need to
                                be rewritten.  Our user stories were created and maintained via Jira.
                            </li>
                        </ul>
                    </div>
                    <h4>Purdue University Software Engineering Coursework</h4>
                    <div className="col-md-12">
                        <ul>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px", fontSize: "18px", fontWeight: "bold" }}>
                                Roomtune
                            </li>
                            <p>
                                A crowdsourced music queue for your event.  This was my senior capstone project in
                                the Software Engineering track at Purdue.  Our stack was AWS Amplify for our backend, MongoDB
                                for our database, and ReactJS with the Context API for state management.  Users would connect their
                                music streaming services to Roomtune.  They then could create a room that would display a room code
                                that others could use to connect to the room.  Guests who connected could then use the host's streaming
                                services to queue up songs.  Upvoting and downvoting songs was implemented incase a popular song wanted
                                to be prioritized.
                            </p>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px", fontSize: "18px", fontWeight: "bold" }}>
                                InClass
                            </li>
                            <p>
                                Implemented an educational web application that provided tools for both students and teachers in AngularJS
                                and Ruby on Rails. Teachers had classrooms with all instructional content provided for students along with in-class
                                teaching tools that gave students the ability to follow the instructors content as they went along the
                                course content.  Real-time quizzes could also be administered during class time that could double as
                                attendance taking and quiz taking.
                            </p>
                            <li style={{ display: "list-item", listStyle: "circle", paddingBottom: "10px", fontSize: "18px", fontWeight: "bold" }}>
                                InClass
                            </li>
                            <p>
                                Laid out a system in which users could track and plan their nutritional intake with meaningful data
                                presented to them on a dashboard. This system was built with ReactJS and Ruby on Rails.
                                Nutritional data was pulled from the USDA’s public API.
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}