import { getApiUrl } from './apiConfig'
import axios from 'axios'


export const getAllCategories = ({ setCategoryList }) => {
    const categoryUrl = getApiUrl("category")
    axios.get(categoryUrl, { withCredentials: true }).then((response) => {
        setCategoryList(response.data)
    })
}

export const getSubCategoriesByCategoryName = async (categoryname) => {
    const productUrl = getApiUrl(`subcategory/${categoryname}`)
    const response = await axios.get(productUrl, { withCredentials: true })
    return response.data
}


export const getAllSubCategories = ({ setSubCategoryList }) => {
    const categoryUrl = getApiUrl("subcategory")
    axios.get(categoryUrl, { withCredentials: true }).then((response) => {
        setSubCategoryList(response.data)
    })
}

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

/**
 * export const createProduct = async (product) => {
    const productUrl = getApiUrl("product");
    console.log(productUrl);
    console.log(product)
    let formData = new FormData();
    formData.append("product", JSON.stringify(product));
    const data = await axios.post(productUrl, formData, { withCredentials: true }).then((v) => v.data);
    console.log(data);
    return data;
}
 */