type TMethods = 'POST' | 'GET';

export const getOptions = (method: TMethods, data?: any): RequestInit => {

  if (data || method === 'POST') {
    return {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  }

  return {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  }
};