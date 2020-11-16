import { ENVIRONMENT } from '../environments';
import { http } from './core';

interface TypeParamsApi {
  endpoint: string;
  options: RequestInit;
}

export const Api = async ({
  endpoint,
  options
}: TypeParamsApi): Promise<Response> => {
  try {
    const response = await fetch(
      `${ENVIRONMENT['development']}${endpoint}`,
      options
    );
    if (http.statusResponse[response.status])
      throw new Error(http.statusResponse[response.status].message);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
