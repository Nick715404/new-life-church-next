import { ISocialLink } from "@/interfaces/links";
import { Metadata } from "next";

export const META_DATA: Metadata = {
  title: 'New Life Church',
  description: 'Местная религиозная организация Христиан Веры Евангельской (Пятидесятников) Церковь «Новая жизнь» г.Челябинска',
  keywords: 'Церковь, Челябинск, Новая жизнь, Господь, Бог, Иисус, Служения, Проповеди, Христиане, Христианство, Храм, Божий, Вечеря, Пастор, Конференция веры, водное крещение, ЮС, ЮСУрал',
};

export const SOCIAL_LINKS: ISocialLink<string>[] = [
  {
    tag: 'twitter',
    path: 'https://vk.com/nicklllson',
  },
  {
    tag: 'instagram',
    path: 'https://vk.com/nicklllson',
  },
  {
    tag: 'facebook',
    path: 'https://vk.com/nicklllson',
  },
];

export const CONTACT_INFO = {
  EMAIL: 'hello@example.com',
  PHONE: '+7 (900) 345-67-89',
};