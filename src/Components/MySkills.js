import React from 'react'
// import { CanvasJSReact } from "canvasjs"


export default function MySkills() {

    return (
        <section class="section my-services" data-section="section2">
            <div class="container">
                <div class="section-heading" id="skills">
                    <h2>What I’m good at</h2>
                    <div class="line-dec"></div>
                    <span>Here are the skills I have garnered over the years in college with a mix of formal teaching and self teaching.
                    My Computer Science and programming background comes from my time at Purdue University where I specialized
                         in Software Engineering.</span>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="first-service-icon service-icon"></div>
                            <h4>SCRUM/Agile Development</h4>
                            <p>Purdue emphasized the industry standard software development life cycle, SCRUM and Agile.  For three school projects,
                                we practiced with month long sprints over a semester, one with a testing approach and emphasis.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="second-service-icon service-icon"></div>
                            <h4>Full Stack Development</h4>
                            <p>In my time at Purdue and at my internship at Discover Financial Services, we were expected to be Full-Stack developers.
                            Our goals were to deliver working web applications from the backend, to middleware, to the frontend using current technologies and frameworks, some being React, Ruby on Rails,
                            and MongoDB.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="third-service-icon service-icon"></div>
                            <h4>Test Driven Development</h4>
                            <p>During my time at Discover, our team practiced Test Driven Development to ensure our code was robust and up to
                            standard to be launched into live production.  We always tested from unit tests to complete end-to-end tests before
                            sending our code through our pipeline into production.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="fourth-service-icon service-icon"></div>
                            <h4>Clear Communication</h4>
                            <p>I always placed an emphasis on making meetings and clearly writing out my ideas, my issues, and possible solutions
                            that needed to be addressed.  Having that in the midst of a project and sprint was paramount for us to be successful.
                            It helped the team as a whole to clear up any of their problems as well, in the case that we had dependencies on
                            each other.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}