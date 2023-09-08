import { getRequest } from 'src/api/clientAxios'

export const getFonts = async (request: any): Promise<any> => {
  return await getRequest('https://www.googleapis.com', '/webfonts/v1/webfonts', request)
}
