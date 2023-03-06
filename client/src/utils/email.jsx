const { Container } = require('@react-email/container');
const { Head } = require('@react-email/head');
const { Html } = require('@react-email/html');
const { Img } = require('@react-email/img');
const { Preview } = require('@react-email/preview');
const { Section } = require('@react-email/section');
const { Text } = require('@react-email/text');

const Email = (props) => {

    const { email, message } = props

    return (
        <Html>
            <Head />
            <Preview>Received a message</Preview>
            <Section style={main}>
                <Container style={container}>
                    <Section>
                        <Img
                            src="https://i.imgur.com/8hPx4IA.png"
                            width="45"
                            height="45"
                            alt="Alex"
                            style={userImage}
                        />
                    </Section>
                    <Text style={heading2}>A message from:</Text>
                    <Text style={heading}>{email}</Text>

                    <Text style={review}>
                        {message}
                    </Text>
                    
                </Container>
            </Section>
        </Html>
    );
}

const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

const main = {
    backgroundColor: '#ffffff',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
};

const userImage = {
    margin: '0 auto',
    marginBottom: '16px',
    marginTop: '20px'
};

const heading = {
    fontFamily,
    fontSize: '32px',
    fontWeight: '400',
    color: '#484848',
};

const heading2 = {
    fontFamily,
    fontSize: '24px',
    fontWeight: '700',
    color: '#484848',
};

const paragraph = {
    fontFamily,
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848',
};

const review = {
    ...paragraph,
    padding: '24px',
    backgroundColor: '#f2f3f3',
    borderRadius: '4px',
    marginTop: '35px'
};

export default Email;