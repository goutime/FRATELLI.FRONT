import { getApiUrl } from './apiConfig'
import axios from 'axios'



export const getAllCategories = ({ setCategoryList }) => {
  const categoryUrl = getApiUrl("category")
  axios.get(categoryUrl, { withCredentials: true }).then((response) => {
    setCategoryList(response.data)
  })
}

export const getSubCategoriesByCategoryName = async (categoryname) => {
  const productUrl = getApiUrl(`subCategory/${categoryname}`)
  const response = await axios.get(productUrl, { withCredentials: true })
  return response.data
}


export const getAllSubCategories = ({ setSubCategoryList }) => {
  const categoryUrl = getApiUrl("subCategory")
  axios.get(categoryUrl, { withCredentials: true }).then((response) => {
    setSubCategoryList(response.data)
  })
}

//VERSION.5
export const createSubCategory = async (subCategory) => {
  const subCategoryUrl = getApiUrl("subCategory");
  console.log(subCategoryUrl);
  console.log(subCategory)
  let formData = new FormData();/*Se crea una instancia 
  de FormData. Este objeto se utiliza para construir peticiones 
  multipart/form-data. */
  formData.append("subCategory", JSON.stringify(subCategory));/*Se agrega un campo al objeto 
  formData con el nombre "subCategory". El valor del campo es una cadena JSON que se obtiene 
  al convertir el objeto subCategory a JSON utilizando JSON.stringify(subCategory). */
  const data = await axios.post(subCategoryUrl, formData, { withCredentials: true }).then((v) => v.data);
  console.log(data);
  return data;
}

/*
  //VERSION UNO
  export const createSubCategory = async (subCategory) => {
  const subCategoryUrl = getApiUrl("subcategory");
  console.log(subCategoryUrl);
  console.log(subCategory);
  const formData = new FormData();
  formData.append("subcategory", subCategory);
  try {
    const response = await axios.post(subCategoryUrl, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error creando subcategoría:", error);
  }
  };

//version.2

export const createSubCategory = async (subCategory) => {
  const subCategoryUrl = getApiUrl("subcategory");
  console.log(subCategoryUrl);
  console.log(subCategory);

  const data = JSON.stringify(subCategory); // Convierte subCategory a JSON
  console.log(data);

  try {

    const response = await axios.post(subCategoryUrl, data, {
      withCredentials: true}).then((v) => v.data);
      console.log(response);
    return response;
  } catch (error) {
    console.error("Error creando subcategoría:", error);
  }
};
//version3



export const createSubCategory = async (subCategory) => {
  const subCategoryUrl = getApiUrl("subcategory");
  console.log(subCategoryUrl);
  console.log(subCategory);

  const formData = new FormData();

  // Recorre las propiedades de subCategory y añadelas al FormData
  formData.append("subCategory", JSON.stringify(subCategory));

  try {
    const response = await axios.post(subCategoryUrl, formData, {
      withCredentials: true,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((v) => v.data);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creando subcategoría:", error);
  }
};

//VERSION.4
export const createSubCategory = async (subCategory) => {
  const subCategoryUrl = getApiUrl("subcategory");
  console.log(subCategoryUrl);
  console.log(subCategory);

  //let formData = new FormData();
  //formData.append("subCategory", JSON.stringify(subCategory));
  const gnrd = JSON.stringify(subCategory); // Convierte subCategory a JSON
  console.log(gnrd);
  const data = await axios.post(subCategoryUrl, gnrd, { withCredentials: true }).then((v) => v.data);
  console.log(data);
  return data;
};

*/
