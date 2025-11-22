import { TBusinessPerson } from '@/types/persons';

type TBusinesEvent = {
  church: string;
  city: string;
  eventType: 'business';
  first_name: string;
  last_name: string;
  sur_name: string;
  occupation: null | string;
  pastor_type: string;
  source: string;
  vector: string;
  phone: string;
  email: string;
  personType: string;
  status: 'pending' | 'payed' | 'notPayed';
  personId: string;
};

export const sendDataToBusiness = async (
  data: TBusinesEvent,
): Promise<{ status: 'done' }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ data }),
      },
    );

    return { status: 'done' };
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка в регистрации пользователя на Бизнес конференцию');
  }
};

export const findUniquePersonOfBusiness = async (
  invId: string,
): Promise<TBusinessPerson | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas?filters[personId][$eq]=${invId}`,
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const updateBusinessPersonStatus = async (
  userId: number,
  newStatus: 'payed' | 'notPayed' | 'pending',
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { status: newStatus } }),
      },
    );

    const data = await res.json();
    console.log(data);

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const deleteBusinessPerson = async (userId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/biznes-konferencziyas/${userId}`,
      {
        method: 'DELETE',
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

// -------------------------

type TSendDataToEvent = {
  church: string;
  city: string;
  email: string;
  eventType: 'youthural' | 'business' | 'faithconf' | 'chelfire';
  first_name: string;
  home_cover: false;
  last_name: string;
  personType: string;
  phone: string;
  promocode?: string;
  price?: string;
};

export const sendDataToYouthUral = async (
  data: TSendDataToEvent,
): Promise<{ status: 'done' }> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ data }),
    });

    return { status: 'done' };
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка в регистрации пользователя на ЮС Урал');
  }
};

export const findUniquePersonOfYouthUral = async (
  invId: string,
): Promise<TBusinessPerson | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals?filters[personId][$eq]=${invId}`,
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const updateYouthuralPersonStatus = async (
  userId: number,
  newStatus: 'payed' | 'notPayed' | 'pending',
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { status: newStatus } }),
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const deleteYouthuralPerson = async (userId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/yus-urals/${userId}`,
      {
        method: 'DELETE',
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

// -------------------------

export const sendDataToFaithConf = async (
  data: TSendDataToEvent,
): Promise<{ status: 'done' }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/faith-confs`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ data }),
      },
    );

    return { status: 'done' };
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка в регистрации пользователя на УКВ');
  }
};

export const findUniquePersonOfFaithConf = async (
  invId: string,
): Promise<TBusinessPerson | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/faith-confs?filters[personId][$eq]=${invId}`,
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const updateFaithConfPersonStatus = async (
  userId: number,
  newStatus: 'payed' | 'notPayed' | 'pending',
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/faith-confs/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { status: newStatus } }),
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const deleteFaithConfsPerson = async (userId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/faith-confs/${userId}`,
      {
        method: 'DELETE',
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

// -------------------------

export const sendDataToChelFire = async (
  data: TSendDataToEvent,
): Promise<{ status: 'done' }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/fire-chels`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ data }),
      },
    );

    return { status: 'done' };
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка в регистрации пользователя на УКВ');
  }
};

export const findUniquePersonOfChelFire = async (
  invId: string,
): Promise<TBusinessPerson | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/fire-chels?filters[personId][$eq]=${invId}`,
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const updateChelFirePersonStatus = async (
  userId: number,
  newStatus: 'payed' | 'notPayed' | 'pending',
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/fire-chels/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { status: newStatus } }),
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const deleteChelFirePerson = async (userId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/fire-chels/${userId}`,
      {
        method: 'DELETE',
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

// ------------------------------------------------------------

export const sendDataToYouthMgn = async (
  data: TSendDataToEvent,
): Promise<{ status: 'done' }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/youth-mgns`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ data }),
      },
    );

    return { status: 'done' };
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка в регистрации пользователя на Юс Магнитогорск');
  }
};

export const findUniquePersonOfYouthMgn = async (
  invId: string,
): Promise<TBusinessPerson | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/youth-mgns?filters[personId][$eq]=${invId}`,
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const findUniquePersonOfLeaderSummit = async (
  invId: string,
): Promise<TBusinessPerson | undefined> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/leader-summits?filters[personId][$eq]=${invId}`,
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const updateYouthMgnPersonStatus = async (
  userId: number,
  newStatus: 'payed' | 'notPayed' | 'pending',
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/youth-mgns/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { status: newStatus } }),
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const updateLeaderSummitPersonStatus = async (
  userId: number,
  newStatus: 'payed' | 'notPayed' | 'pending',
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/leader-summits/${userId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: { status: newStatus } }),
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const deleteYouthMgnPerson = async (userId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/youth-mgns/${userId}`,
      {
        method: 'DELETE',
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

export const deleteLeaderSummitPerson = async (userId: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/leader-summit/${userId}`,
      {
        method: 'DELETE',
      },
    );

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
      return;
    }
  }
};

// -------------------------

export const sendDataToLeaderSummit = async (
  data: TSendDataToEvent,
): Promise<{ status: 'done' }> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/leader-summits`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ data }),
      },
    );

    return { status: 'done' };
  } catch (error) {
    console.error(error);
    throw new Error('Ошибка в регистрации пользователя на ГСЛ');
  }
};
