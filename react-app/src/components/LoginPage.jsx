import React from 'react';
import ReactPlayer from 'react-player'
import {useState} from 'react'
import './LoginPage.css'
import movietrackerLogo from "./movietrackerLogo.png"
import SearchBar from './SearchBar'
import iconSearch from './iconSearch.jpg'
export default function LoginPage() {
    const [classHandler, setClassHandler] = useState("search-icon")
    const [classHandler2, setClassHandler2] = useState("search-ind-none")
    const [search, setSearch] = useState([])
    const [value, setValue] = useState([])
    

    const handleSearchType = async (e) => {
        let keyword = e.target.value
        setValue(keyword)
        // setClearValue(keyword)
        if (keyword === '') {
            return
        //     setClassHandler('search-icon')
        //     setClassHandler2('search-ind-none')
        //     return
        }
        //     setClassHandler('search-icon-none')
        //     setClassHandler2('')
        
        const movieSearch = await fetch(`/api/movies/${keyword}`);
        let jsonMovie = await movieSearch.json();

            setSearch(jsonMovie)
        console.log(search)
        console.log(e.target.value)
        // search.map(map => console.log(map))
    }

    
    const handleCancelInput = (e) => {
        e.preventDefault()
        setValue('')
        // console.log('keyword value ???>>>', e.target.value)
    }


    return (
        <>



                <div className='image-holder'>

                <img className='logo' src={movietrackerLogo} alt=""/>
                </div>
                <div className='search-box'>
                <div className="search-field">
                    <span ><img className='search-icon' src={iconSearch} alt="not working"/></span>
                    </div>
                 
                    <div>
                <input className='search-input' onChange={handleSearchType} value={value} type="text" />
                    </div>
                    <div>
                        {value.length ?

                            <span onClick={handleCancelInput} className="cancel-search">
                            X
                        </span> : null
                        }
                    </div>
                </div>
                    <div>

                        {/* { search?.map(movie => (
                            <h1>{movie.id}</h1>
                        ))} */}
                    </div>
                    {/* <div className='classRender'>
                    {
                        search?.map(movie=> (
                            <>
                        <div className={classHandler2} id={movie.id} >
                        {event === '' ? '':(<p className='search-ind'  id={movie.id}>
                         <span className='colon'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; </span> 
                             {movie.movie_name}                             
                        <br/>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>)}
                        </div>
                        </>
                    ))
                }
                </div> */}


                    <div className='footer'></div>

        {/* <div className="outer-outer"> */}
            {/* <div className='player-wrapper'> */}
       
      {/* </div>
            <div className="outer-text">
                <div>

            <h1 className="h12">Unlimited movies, TV shows, and more.</h1>
                </div>
                <div>

            <h1 className="h13">
            Ready for a tour? Sign up or click on login for a demo.
            </h1>
                </div>
            </div>

            <div  className="img">
            </div> */}

            {/* <h1 className="h12">Unlimited movies, TV shows, and more.</h1>
            <h1 className="h12">Unlimited movies, TV shows, and more.</h1> */}

        {/* </div> */}
        {/* </div> */}
        </>
    )
}