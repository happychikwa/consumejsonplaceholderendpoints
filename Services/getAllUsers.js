const getAllusers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        if(!response.ok){
            throw new Error(`[{status:${response.status}, content:${response.statusText}}]`)
        }
        return {
            "status": response.status,
            "content": users,
            "links":  {
                "next" : "nextlink",
                "prev" : "prevlink"
            }
        }        
    } catch (error) {
        console.log(error)
        return [{ status: 500, content: "Internal Server Error"}]
    }

}

const getUserById = async (id) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    if(!response.ok){
        return {"status" : response.status, "message": response.statusText}
    }
    const filteredData = users.filter((data) => { return data.id == id })
    return {
        "status": response.status,
        "content": filteredData,
        "links": {
            "next" : "nextLink",
            "prev" : "prevLink"
        }
    }
}

module.exports = { getAllusers, getUserById }