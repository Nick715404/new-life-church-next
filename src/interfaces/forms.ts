export type TFormData = {
  type: string,
  placeholder?: string,
  text?: string,
  id?: string,
}

export type TStandartForm = {
  price: number,
  email: string,
  agreement: boolean,
  church: string,
  city: string,
  firstName: string,
  lastName: string,
  phone: string,
  eventType: string,
  role: string,
};

export type TYouthPaymentForm = TStandartForm & {
  settlement?: boolean,
}

export type TBussinesPaymentForm = TStandartForm & {
  career: string,
}

export type IFormType = 'uralFaithCond' | 'youthUral' | 'teensUral' | 'business' | 'worshipConf' | 'default';