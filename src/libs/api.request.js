import Httpqeruest from './axios'
import config from '@/config'

export const axios = new Httpqeruest(config.apiBaseUrl)