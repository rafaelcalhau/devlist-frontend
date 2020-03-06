import axios from 'axios'
import { apiUrl as baseURL } from '../app.json'

export default axios.create({ baseURL })
