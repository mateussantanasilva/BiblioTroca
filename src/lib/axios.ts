import axios from 'axios'

export const api = axios.create({
  baseURL:
    'https://serverbibliotroca-production.up.railway.app/api/v1/bibliotroca',
})
