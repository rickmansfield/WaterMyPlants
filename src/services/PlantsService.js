// import axios from "axios"
import axiosWithAuth from "../utils/axiosWithAuth"

export const getPlants = () => {
    return axiosWithAuth().get(``)
}