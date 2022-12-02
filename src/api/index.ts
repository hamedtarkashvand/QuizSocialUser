import axios from "axios"

 const coreApi = axios.create({
    baseURL: "test.com/api/"
});

// const createUser = async ({fullname, password, gender}) => {
//     const user = {fullname, password, gender};
//     const {data} = await client.post(`/users/testadd`, user);
//     return data
// };

// const createProduct = async ({productname, count}) => {
//     const product = {productname, count};
//     const {data} = await client.post(`/product/testadd`, product);
//     return data
// };
// const callServiceLila = async () => {
//     const {data} = await client.get(`https://get.taaghche.com/v2/everything?filters=''&offset=0-0-16-16&order=1`);
//     return data
// };

export default coreApi