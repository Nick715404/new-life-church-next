import { TBussinesPaymentForm, TYouthPaymentForm } from "@/interfaces/forms";
import { getOptions } from "./options";

export const getPayment = async (data: TBussinesPaymentForm | TYouthPaymentForm) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/orders/payment`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return await response.text();
  }
  catch (error: any) {
    throw new Error(error);
  }
};

export const getPaymentStatus = async () => {
  const options = getOptions('POST');

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/orders/payment/status`, { ...options });

    if (!response.ok) {
      console.log(response);
      throw new Error('Кажется что то пошло не так, повторите попытку позже.');
    }

    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error: any) {
    throw new Error(error);
  }
}

type TDonation = {
  price: number,
}

export const getDonation = async (data: TDonation) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/orders/donation`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    return await response.text();
  }
  catch (error: any) {
    throw new Error(error);
  }
};