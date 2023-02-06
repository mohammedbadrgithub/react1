import axios from "axios"
import { axiosInstance } from "../../../componets2/network/network"


export const getComponiesList = () => (dispatch) =>  {

        return axiosInstance.get("data") 
            return axios.get("")
            .then((result) => dispatch ({
                type: "GOTLIST",
                payload: result.data
            }))     
}