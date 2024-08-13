import { ISocialLink } from '@/shared/interfaces/links';
import { Metadata } from 'next';

export const META_DATA: Metadata = {
	title: {
		default: 'Церковь Слово Жизни г. Челябинск',
		template: '%s - Церковь Слово Жизни г. Челябинск',
	},
	description:
		'Местная религиозная организация Христиан Веры Евангельской (Пятидесятников) Церковь "Слово жизни" г.Челябинска',
	keywords:
		'Церковь, Челябинск, Новая жизнь, Господь, Бог, Иисус, Служения, Проповеди, Христиане, Христианство, Храм, Божий, Вечеря, Пастор, Конференция веры, водное крещение, ЮС, ЮСУрал',
	verification: {
		google: 'U3Ko7BCYk-ZhXLNyBImlZxySU7QRBSXNohoMPv6WNS8',
	},
};

export const SOCIAL_LINKS: ISocialLink<string>[] = [
	{
		tag: 'telegramm',
		path: 'https://t.me/wolruschel',
	},
	{
		tag: 'vk',
		path: 'https://vk.com/wolrus.chel',
	},
	{
		tag: 'youtube-icon',
		path: 'https://youtube.com/@wolruscheltv?si=EEPoRUHLjpU4aqez',
	},
];

export const CONTACT_INFO = {
	EMAIL: 'chel.wolrus@yandex.ru',
	PHONE: '+7 (351) 261 70 01',
};
