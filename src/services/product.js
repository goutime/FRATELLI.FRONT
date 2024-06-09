import { getApiUrl } from './apiConfig'
import axios from 'axios'

export const getAllProducts = ({ setProductList }) => {
    const productUrl = getApiUrl("product/all")
    axios.get(productUrl, { withCredentials: true }).then((response) => {
        setProductList(response.data)
    })
}

export const createProduct = async (product) => {
    const productUrl = getApiUrl("product");
    console.log(productUrl);
    console.log(product)
    let formData = new FormData();
    formData.append("product", JSON.stringify(product));
    const data = await axios.post(productUrl, formData, { withCredentials: true }).then((v) => v.data);
    console.log(data);
    return data;
}
/*

export const createsubCategory = async (subCategory) => {
    const subCategoryUrl = getApiUrl("subcategory");
    console.log(subCategoryUrl);
    console.log(subCategory)
    let formData = new FormData();
    formData.append("subCategory", JSON.stringify(subCategory));
    const data = await axios.post(subCategoryUrl, formData, { withCredentials: true }).then((v) => 
        v.data).catch((error) => {
        console.error("Error creando subcategoría:", error);
      });
    console.log(data);
    return data;
}

*/

export const getProductById = async (id) => {
    const productUrl = getApiUrl(`product/${id}`)
    const response = await axios.get(productUrl, { withCredentials: true })
    return response.data
}

export const getRelatedProducts = async ({category, id}) => {
    const productUrl = getApiUrl(`product/related/${category}/${id}`)
    const response = await axios.get(productUrl, { withCredentials: true })
    return response.data
}


export const getProductsBySubCategory = async (sub) => {
    const productUrl = getApiUrl(`product/subcategory/${sub}`)
    const response = await axios.get(productUrl, { withCredentials: true })
    return response.data
}