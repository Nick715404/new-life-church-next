export type TFormData = {
  type: string,
  placeholder?: string,
  text?: string,
  id?: string,
}

export type TPaymentForm = {
  price: number,
  email: string,
  agreement: boolean,
  church: string,
  city: string,
  firstName: string,
  lastName: string,
  phone: string,
  eventType: string,
};