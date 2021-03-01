import Mock from 'mockjs'
import { login } from './login'
import { getTableData } from './data'

Mock.mock(/\/auth\/login/, login)
Mock.mock(/\/data\/table/, getTableData)

export default Mock