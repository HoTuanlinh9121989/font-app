export const BASE_URL = '/'

export const FETCH_STATE = {
  IDLE: 'idle',
  LOADING: 'loading',
  FAILED: 'failed',
}

export const CHANNEL_CODE = {
  VL24H: 'vl24h',
}

export const COOKIES = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refresh',
}

export const LOCALSTORAGE = {
  FE_TOKEN: 'token_FE',
}

export const FORMAT_TIME_DEFAULT = 'DD/MM/YYYY HH:mm:ss'

export const VALIDATE_PATTERN = {
  EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  DECIMAL: /^[-,0-9]+$/,
  ONLY_NUMBER: /^[0-9]+$/,
  ASCII_CHARACTER: /[\x20-\x7E]/,
}

export const MODAL = {
  ERROR: 'errorModal',
  SUCCESS: 'successModal',
  LOADING: 'loadingModal',
}

export enum LIST_ENV {
  QC = 'qc',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export enum LOCAL_PAGE {
  profile = 'Hồ sơ cá nhân',
}

/**
 * STATUS CODE API
 */
export const CODE_SUCCESS = 200
export const CODE_SUCCESS_CREATE = 201
export const CODE_BYPASS_ERROR_ARRAY = [200, 201, 202, 203, 204, 205]
export const CODE_NON_RECORD = 1001
export const CODE_EXPIRED_TOKEN = 440
export const CODE_NOT_AUTH_TOKEN = 401
export const CODE_ACCESS_DENY = 1000
export const CODE_VALIDATION_FAIL = 422
export const CODE_VALIDATION_DUPLICATE = 1008
export const CODE_RES_CONFIRM = 8005
export const CODE_RES_ALERT = 8006
export const CODE_RES_CONFIRM_UPDATE_END_DATE = 8007
export const CODE_FILE_TOO_BIG = 413
export const CODE_SQL_ERROR = '22007'

/**
 * STATUS Config
 */
export const STATUS_ACTIVED = 1
export const STATUS_INACTIVED = 2
export const STATUS_DISABLED = 3
export const STATUS_COMPLETE = 4
export const STATUS_LOCKED = 5
export const STATUS_DELETED = 99

export const STATUS_PRICE_BOOK_DRAFT = 4

/**
 * IsParent
 */
export const IS_PARENT_NO = 0

/**
 * allowUsingSingle
 */

export const ALLOW_USING_SINGLE = 1

export const API_KEY = 'AIzaSyAtIpXk1W3rvqJ63Tpoat2Q3HYhhiHnqPo'
