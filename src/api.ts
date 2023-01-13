import axios from 'axios'

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getAllPosts: async () => {
        /* USANDO .THEN
        let response = await fetch(`${BASE}/posts`)
        let json = await response.json()
        return json
        */

        //USANDO AXIOS
        let response = await http.get('/posts')
        return response.data

    },
    addNewPost: async (title: string, body: string, userId: number) => {
        /* USANDO .THEN
        let response = await fetch(`${BASE}/posts`, {
             method: 'POST',
             body: JSON.stringify({ title, body, userId }),
             headers: { 'Content-Type': 'application/json' }
         })
         let json = await response.json()
         return json
         */

        //USANDO AXIOS
        let response = await http.post('/posts')
        return response.data
    }


}