import React, { useState } from 'react';
import axios from 'axios';
import { getApiUrl } from '../services/apiConfig'
import cardStyle from "./productCard.module.css";

function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim()) {
      try {
        const url = getApiUrl(`product/search?searchTerm=${searchTerm}`)
        const response = await axios.get(url);
        if (response.status === 200) {
          setSearchResults(response.data);
        } else {
          console.error('Error searching products:', response.data);
        }
      } catch (error) {
        console.error('Error searching products:', error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>


      <input type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onInput={handleSearch}
        placeholder="Buscar productos"
        className={cardStyle.searchbar}
      />

      {searchResults.length > 0 ? (
        <div className="row">



          {searchResults.map((product) => (
              <div className="col-lg-4">
                <a className={cardStyle.caja} href={'http://localhost:3000/detail/'
                  + product.id + '/' + product.subCategory.name}>
                  <div className={cardStyle.cabezaTitulo}>
                    <h4 className={cardStyle.neon}>{product.name}</h4>
                  </div>
                  <h4 className={cardStyle.cabezaTitulo2}>{product.subCategory.name}</h4>
                  <div className={cardStyle.cuerpo2}>
                    <div>
                      <img src={product.image} alt='logo' />
                    </div>
                  </div>

                </a>

              </div>

          ))}



        </div>
      ) : null}



    </div>
  );

};

export default ProductSearch;