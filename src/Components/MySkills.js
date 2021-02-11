import React from 'react'

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
                                Our goals were to deliver working web applications using current technologies and frameworks, some being React, Ruby on Rails,
                                and MongoDB.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="third-service-icon service-icon"></div>
                            <h4>Easy Customize</h4>
                            <p>Integer suscipit condimentum aliquet. Nam quis risus metus. Nullam faucibus quam eget arcu pretium tincidunt. Nam libero dui.</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="service-item">
                            <div class="fourth-service-icon service-icon"></div>
                            <h4>Admin Dashboard</h4>
                            <p>Vivamus et dui a massa venenatis fringilla. Proin lacus massa, eleifend sed fermentum in, dignissim vel metus. Nunc accumsan leo nec felis porttitor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}