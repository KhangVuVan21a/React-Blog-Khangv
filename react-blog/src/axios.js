import 'axios'
import axios from 'axios'
const blogsAxios= axios.create({
    baseURL:'http://localhost:3000/blogs'
})
export default blogsAxios