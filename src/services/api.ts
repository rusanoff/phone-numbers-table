import { SendPhonesRequest } from '../types/api';

export const sendPhones = async (data: SendPhonesRequest) => {
  const result = await fetch('/api/getExcel', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return result.blob();
};
