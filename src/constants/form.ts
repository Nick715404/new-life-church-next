import { TFormData } from "@/interfaces/forms"

export const formThemesVariants = [
  {
    id: 1,
    title: 'test1',
    value: 'test1',
  },
  {
    id: 2,
    title: 'test2',
    value: 'test1',
  },
  {
    id: 3,
    title: 'test3',
    value: 'test1',
  },
  {
    id: 4,
    title: 'test4',
    value: 'test4',
  },
  {
    id: 5,
    title: 'test5',
    value: 'test5',
  },
  {
    id: 6,
    title: 'test6',
    value: 'test6',
  },
  {
    id: 7,
    title: 'test7',
    value: 'test7',
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