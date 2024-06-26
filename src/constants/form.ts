import { TFormData } from "@/interfaces/forms"

export const formThemesVariants = [
  {
    id: 1,
    title: 'Служение',
    value: 'Служение',
  },
  {
    id: 2,
    title: 'Домашние группы',
    value: 'Домашки',
  },
  {
    id: 3,
    title: 'Мероприятия',
    value: 'Мероприятия',
  },
  {
    id: 4,
    title: 'Молитвенная нужда',
    value: 'Молитв. нужда',
  },
  {
    id: 5,
    title: 'Благодарение',
    value: 'Благодарение',
  },
  {
    id: 6,
    title: 'Свободная тема',
    value: 'Свободная тема',
  },
]

export const formData: TFormData[] = [
  {
    type: 'text',
    placeholder: 'Фамилия',
    id: 'lastName',
  },
  {
    type: 'text',
    placeholder: 'Имя',
    id: 'firstName',
  },
  {
    type: 'text',
    placeholder: 'Город',
    id: 'city',
  },
  {
    type: 'text',
    placeholder: 'Церковь',
    id: 'church',
  },
  {
    type: 'email',
    placeholder: 'Почта',
    id: 'email',
  },
  {
    type: 'tel',
    placeholder: 'Номер телефона',
    id: 'phone',
  },
]