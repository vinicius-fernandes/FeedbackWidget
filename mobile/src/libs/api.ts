import axios from 'axios'

export const api = axios.create({
    baseURL: "https://feedbackwidget-production-40c3.up.railway.app/"
})