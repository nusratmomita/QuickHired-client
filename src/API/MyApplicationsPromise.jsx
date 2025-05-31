export const myApplicationsPromise = (email) => {
    return fetch(`http://localhost:8000/applications?email=${email}`)
           .then(res=>res.json())
}