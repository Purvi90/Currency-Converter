import axios from "axios";

//https://v6.exchangerate-api.com/v6/49849e99dcc333881bb49872/latest/USD

const api = axios.create({
    baseURL: "https://v6.exchangerate-api.com/v6/49849e99dcc333881bb49872",

})

export const currencyConverter = ( fromCurrency , toCurrency, amount)=>{
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
}