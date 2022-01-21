import React from 'react'
import emailjs from 'emailjs-com'
import { Form, Button } from 'react-bootstrap'

export const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_52ozxzu',
                'template_yi97r52',
                e.target,
                'user_68efs3XOjmgTWgffSteJd'
            )
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <p>Want to get updates from us?</p>
            <form onSubmit={sendEmail}>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                />
                <Button
                    className="email"
                    size="sm"
                    variant="primary"
                    type="submit"
                    value="send"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}
