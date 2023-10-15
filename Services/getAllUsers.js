const users = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    if(!response.ok){
        return response.status
    }
    return {
        "status": response.status,
        "content": users,
        "links":  {
            "next" : "nextlink",
            "prev" : "prevlink"
        }
    }
}

const userById = async (id) => {
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

module.exports = { users, userById }