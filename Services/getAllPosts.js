const getAllPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()
    if(!response.ok){
        return response.status
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
const getPostsById = async (id) => {
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

module.exports = { getAllPosts, getPostsById }