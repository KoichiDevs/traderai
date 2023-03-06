const express = require('express');
const app = express();
const sendgrid = require('@sendgrid/mail');

require('dotenv').config()

const cors = require("cors");

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
// middleware to parse the request body
app.use(express.json());


app.post('/sendEmail', async (req, res) => {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    const email = req.body.email
    const message = req.body.message

    try {
        const options = {
            from: 'alexisken1432@gmail.com',
            to: 'alexisken1432@gmail.com',
            subject: 'TraderAI',
            html: `
            <!DOCTYPE html>
            <html>
              <head>
                <title>TraderAI Email</title>
                <style>
                  /* Center the image */
                  .center {
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                    width: 50%;
                  }
                </style>
              </head>
              <body>
                <img class="center" src="https://i.imgur.com/8hPx4IA.png" alt="Logo" />
                <h1>Message from ${email}</h1>
                <p>${message}</p>
              </body>
            </html>
          `,
    };

    await sendgrid.send(options).then(() => {
        console.log('Email sent')
    })
        .catch((error) => {
            console.error(error)
        });

    res.status(200).json({ message: "success", success: true })

} catch (error) {
    console.log(error)
    res.status(400).json({ message: error })
}
});

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});

