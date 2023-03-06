const express = require('express');
const app = express();
const Email = require('../client/src/utils/email')
const sendgrid = require('@sendgrid/mail');
const render = require('@react-email/render');


app.post('/sendEmail', async (req, res) => {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    try {
        const { email, message } = req.body

        const emailHtml = render(<Email email={email} message={message} />);

        const options = {
            from: 'alexisken1432@gmail.com',
            to: 'alexisken1432@gmail.com',
            subject: 'TraderAI',
            html: emailHtml,
        };

        await sendgrid.send(options).then(() => {
            console.log('Email sent')
        })
            .catch((error) => {
                console.error(error)
            });

        res.status(200).json({ message: "SUCCESS", success: true })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error })
    }
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
