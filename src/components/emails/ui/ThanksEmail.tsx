import {
	Html,
	Body,
	Container,
	Section,
	Heading,
	Link,
	Text,
} from '@react-email/components';

type TThankYouEmailProps = {
	name: string;
	eventName: string;
	message: string;
};

const ThankYouEmail = ({ name, eventName, message }: TThankYouEmailProps) => {
	return (
		<Html>
			<Body>
				<Container style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
					<Heading as='h1' style={{ color: '#333', textAlign: 'center' }}>
						Спасибо за регистрацию!
					</Heading>
					<Section style={{ marginBottom: '20px' }}>
						<Text>
							Здравствуйте, <strong>{name}</strong>!
						</Text>
						<Text>
							Спасибо за регистрацию на мероприятие:{' '}
							<strong>{eventName}</strong>
						</Text>
						<Text>{message}</Text>
					</Section>
					<Section style={{ textAlign: 'center' }}>
						<Link
							href='/'
							style={{
								textDecoration: 'none',
								color: '#fff',
								backgroundColor: '#007BFF',
								padding: '10px 20px',
								borderRadius: '5px',
							}}
						>
							Перейти на сайт
						</Link>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ThankYouEmail;
