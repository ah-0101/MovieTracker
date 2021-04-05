import React from 'react';
import ReactPlayer from 'react-player'
import {useState} from 'react'
import './LoginPage.css'
import movietrackerLogo from "./movietrackerLogo.png"
import SearchBar from './SearchBar'
export default function LoginPage() {
    const [classHandler, setClassHandler] = useState("search-icon")
    const [classHandler2, setClassHandler2] = useState("search-ind-none")
    const [search, setSearch] = useState('')
    


    const handleSearchType = async (e) => {
        const keyword = e.target.value
        if (keyword === '') {
            setClassHandler('search-icon')
            setClassHandler2('search-ind-none')
            return
        }else{
            setClassHandler('search-icon-none')
            setClassHandler2('')
        }
        const movieSearch = await fetch(`/api/movies/${keyword}`);
        let jsonMovie = await movieSearch.json();

            setSearch((prev) => prev =  jsonMovie)
        console.log(search)
        // search.map(map => console.log(map))
    }

    



    return (
        <>
    {/* <div id="overlay">

        <img src="loading.gif" alt="Be patient..." />
        
    </div> */}




                <div className='image-holder'>

                <img className='logo' src={movietrackerLogo} alt=""/>
                </div>

                <div class="main">
                <input className='search-input' onChange={handleSearchType}  type="text" />
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