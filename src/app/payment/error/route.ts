import {
	deleteBusinessPerson,
	deleteYouthuralPerson,
	findUniquePersonOfBusiness,
	findUniquePersonOfYouthUral,
} from '@/api/register';

export async function POST(req: Request) {
	try {
		const formData = await req.formData();
		const invId = formData.get('InvId')?.toString();

		const findPersonFunctions = [
			{ findPerson: findUniquePersonOfBusiness, tableName: 'business' },
			{ findPerson: findUniquePersonOfYouthUral, tableName: 'youthural' },
		];

		let currentPerson = null;
		let currentTableName = '';

		for (let { findPerson, tableName } of findPersonFunctions) {
			currentPerson = await findPerson(`${invId}`);
			if (currentPerson) {
				currentTableName = tableName;
				break;
			}
		}

		if (currentPerson && invId) {
			if (currentTableName === 'business') {
				await deleteBusinessPerson(currentPerson.id);
			} else if (currentTableName === 'youthural') {
				await deleteYouthuralPerson(currentPerson.id);
			}

			return new Response(`Person has been removed`, { status: 200 });
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log(error.message);
			return;
		}
	}
}
