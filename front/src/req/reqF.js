import {fetchData} from "./req";


export async function Auth(user) {
    return await fetchData("/users/auth", "POST", user);}

export async function Reg(user) {
    return await fetchData("/users/reg", "POST", user);}

export async function Products() {
    return await fetchData("/products/", "GET");}

export async function AddProduct(product) {
    return await fetchData("/products/", "POST", product);}

export async function DeleteProduct(product) {
    return await fetchData("/products/", "DELETE", product);}

export async function AddOrder(order) {
    return await fetchData("/users/orders", "POST", order);}

export async function GetOrdersUser(product) {
    return await fetchData("/users/orders", "GET");}




