export type TFormData = {
  type: string,
  placeholder?: string,
  text?: string,
  id?: string,
}

export type TPaymentForm = {
  description: string,
  price: number,
  email: string,
  agreement: boolean,
  church: string,
  city: string,
  firstName: string,
  lastName: string,
  phone: string,
};