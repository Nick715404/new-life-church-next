export const getOptions = (method: string, data?: any): RequestInit => {

  if (data) {
    return {
      method: method,
      headers: { 'Content-Type': 'application-json' },
      body: JSON.stringify(data),
    }
  }

  return {
    method: method,
    headers: { 'Content-Type': 'application-json' },
  }
};