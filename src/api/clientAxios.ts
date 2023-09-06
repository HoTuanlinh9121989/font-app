import { CODE_VALIDATION_FAIL, CODE_BYPASS_ERROR_ARRAY } from 'utils/constants'
import axios, { AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios'

enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export const getRequest = async (url: string, endpoint: string, payload?: any) => {
  return await Request(HttpMethods.GET, url, endpoint, payload)
}

export const postRequest = async (url: string, endpoint: string, payload?: any) => {
  return await Request(HttpMethods.POST, url, endpoint, payload)
}

export const putRequest = async (url: string, endpoint: string, payload?: any) => {
  return await Request(HttpMethods.PUT, url, endpoint, payload)
}

export const patchRequest = async (url: string, endpoint: string, payload?: any) => {
  return await Request(HttpMethods.PATCH, url, endpoint, payload)
}

export const deleteRequest = async (url: string, endpoint: string, payload?: any) => {
  return await Request(HttpMethods.DELETE, url, endpoint, payload)
}

const Request = async (methodHttp: HttpMethods, baseUrl: string, endpoint: string, body: any = undefined) => {
  const headers: RawAxiosRequestHeaders = {
    'Content-Type': 'application/json',
  }

  try {
    const payload: AxiosRequestConfig = {
      url: endpoint,
      baseURL: baseUrl,
      method: methodHttp,
      headers: headers,
      timeout: 10000,
    }
    if (methodHttp === HttpMethods.GET) {
      payload.params = body
      payload.paramsSerializer = {
        indexes: true,
      }
    } else {
      payload.data = JSON.stringify(body)
    }
    const res = await axios(payload)
    if (!res) {
      return null
    }
    if (!CODE_BYPASS_ERROR_ARRAY.includes(res?.status)) {
      if (res?.status !== CODE_VALIDATION_FAIL) {
        console.log(res?.statusText)
      }
      return { code: res.status, message: res.data?.error?.message }
    }
    return res.data
  } catch (err: any) {
    console.error('err.response', err)
    if (err.response) {
      return err.response.data
    }
    return { code: '404', message: 'error' }
  }
}
