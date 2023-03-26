export interface Config {
  REACT_APP_API_URL: string
  TIMEOUT_REQUEST: number
}

export const config: Config = {
  REACT_APP_API_URL: process.env.REACT_APP_API_URL || '',
  TIMEOUT_REQUEST: Number(process.env.TIMEOUT_REQUEST) || 300000,
}

export default config
