import 'axios'
import axios from 'axios'
const blogsAxios= axios.create({
    baseURL:'http://localhost:8083/Blog'
})
export default blogsAxios