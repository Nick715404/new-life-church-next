import { ISocialLink } from "@/interfaces/links";
import { Metadata } from "next";

export const META_DATA: Metadata = {
  title: {
    default: "Церковь Слово Жизни г. Челябинск",
    template: "%s - Церковь Слово Жизни г. Челябинск"
  },
  description: 'Местная религиозная организация Христиан Веры Евангельской (Пятидесятников) Церковь "Слово жизни" г.Челябинска',
  keywords: 'Церковь, Челябинск, Новая жизнь, Господь, Бог, Иисус, Служения, Проповеди, Христиане, Христианство, Храм, Божий, Вечеря, Пастор, Конференция веры, водное крещение, ЮС, ЮСУрал',
};

export const SOCIAL_LINKS: ISocialLink<string>[] = [
  {
    tag: 'telegramm',
    path: 'https://t.me/wolruschel',
  },
  {
    tag: 'vk',
    path: 'https://vk.com/newlifechel',
  },
  {
    tag: 'youtube-icon',
    path: 'https://www.youtube.com/@NewLifeChelTV',
  },
];

export const CONTACT_INFO = {
  EMAIL: 'https://t.me/wolruschel',
  PHONE: '+7 (351) 261 70 01',
};