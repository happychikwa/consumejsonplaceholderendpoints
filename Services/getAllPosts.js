
const getAllPosts = async () => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        if(!response.ok){
            throw new Error({status: 500, content: "Internal Server"})
        }
        return {
            "status": response.status,
            "content": posts,
            "links":  {
                "next" : "nextlink",
                "prev" : "prevlink"
            }
        }
    }
    catch(error){
        console.log(error)
        return {status: 500, content: "Internal Server"}
    }
}
const getPostsById = async (id) => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json()
        if(!response.ok){
            return response.status
        }
        const filtered = posts.filter((data) => {return data.userId == id})
        // console.log(filtered)
        return {
            "status" : response.status,
            "content" : filtered,
            "links": {
                "prev": "links",
                "next": "links"
            }
        }
    }
    catch(error){
        console.log(error)
        return {status: 500, content: "Internal Server Error"}
    }
}

module.exports = { getAllPosts, getPostsById }