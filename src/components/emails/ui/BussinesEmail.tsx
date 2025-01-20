import * as React from 'react';
import { Container, Heading, Html } from '@react-email/components';

type BussinesEmailProps = {
	first_name: string;
	last_name: string;
};

export default function BussinesEmail(props: BussinesEmailProps) {
	const { first_name, last_name } = props;

	return (
		<Html className=''>
			<h1>Hello there!</h1>
			<Container>
				<Heading as='h1'>
					Уважаемый {first_name} {last_name}, спасибо за регистрацию!
				</Heading>
			</Container>
		</Html>
	);
}
