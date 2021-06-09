import React, { setState } from "react"
import { render } from "react-dom";
import{ init } from 'emailjs-com';

init("user_Tpf3BKCNb2r6MBUHFW1cI");

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Write a message', name: 'Name', email: 'Email' };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.sendEmail = this.sendEmail.bind(this)
    }

    handleChange(val, event) {
        // event.preventDefault
        this.setState({ [val]: event.target.value })
    }

    handleSubmit (event) {
        event.preventDefault();
        console.log(this.state)
        const templateId = "template_id";

        this.sendEmail(templateId, {message: this.state.message, from_name: this.state.name, reply_to: this.state.email})
    }

    sendEmail (templateId, vars) {
        window.emailjs.send(
            'service_g9p59xd', "template_t861gkh", vars
        ).then(res => {
            console.log("Email Sent!")
        })
        .catch(err => console.error("Eamil did not send.", err))
    }

    render() {
        return (
            <section class="section contact-me" data-section="section4">
                <div class="container">
                    <div class="section-heading" id="contact">
                        <h2>Contact Me</h2>
                        <div class="line-dec"></div>
                        <span>If you would like to contact me, please fill out this form below!</span>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="container">
                                <form id="contact">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <fieldset>
                                                <input id="name" placeholder="Name" type="text" value={this.state.name} onChange={event => this.handleChange("name",event)}/>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <input name="email" type="text" class="form-control" id="email" placeholder="Email" value={this.state.email} onChange={event => this.handleChange("email",event)}/>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12">
                                            <fieldset>
                                                <textarea name="message" rows="6" class="form-control" id="message" placeholder="Your message..." value={this.state.message} onChange={event => this.handleChange("message",event)}/>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-12">
                                            <fieldset>
                                                <button id="form-submit" class="button" onClick={this.handleSubmit}>Send Message</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Contact;