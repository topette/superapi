import axios from "axios";

const baseURL = "https://api-superheroes-olos.herokuapp.com/"

const heroesApi = axios.create({ baseURL})

export default heroesApi