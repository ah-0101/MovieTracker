// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// export default function SearchBar(){

    
//     const handleSearchType = async (e) => {
//         const keyword = e.target.value
//         if (keyword === '') {
//             setClassHandler('search-icon')
//             setClassHandler2('search-ind-none')
//             return
//         }else{
//             setClassHandler('search-icon-none')
//             setClassHandler2('')
//         }
//         setEvent(e.target.value)
//         const chefSearch = await fetch(`/api/search/${keyword}`);
//         let jsonChefs = await chefSearch.json();
//         setTimeout(() => {
//             setSearch(jsonChefs)
//         }, 200);
//     }
    
//  return (

//      <div class="main">
//      <input className='search-input' type="text" />
//          </div>
//  )   
// }