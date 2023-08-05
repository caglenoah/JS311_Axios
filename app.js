const axios = require('axios');


// .then promises
// https://randomuser.me/api/

const getContact = () => {
    //this is the basic syntax, we are going to try something, if it doenst work we are going to catch any errors.
    try {
        //instead of using .fetch() when using axios we use .get()
        //we use interpilated string incase we want to pass a string in.
        const res = axios.get(`https://randomuser.me/api/`) //targets url, this url gets one user
        .then(res => { console.log(res.data.results)})

    } catch(e) {
        console.log("Error", e)
    }

}

console.log(getContact())

//async/away promises
// Star wars API https://swapi.dev/api/people/ < - add an id to get a specific person

const getStarWarsPerson = async (id) => {

    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`) //interpelated string using template literal to complete get request and acces the specific informatio we are looking for
        console.log(res.data)
    } catch (e) {
        console.log("ERROR", e)
    }

}

console.log(getStarWarsPerson(33))

