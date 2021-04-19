import React from 'react';
import ReactPlayer from 'react-player'
import {Redirect,useHistory} from 'react-router-dom'
import {useState} from 'react'
import './LoginPage.css'
import movietrackerLogo from "../../images/movietrackerLogo.png"
import iconSearch from '../../images/iconSearch.jpg'
export default function LoginPage() {
    const [classHandler, setClassHandler] = useState("search-icon")
    const [classHandler2, setClassHandler2] = useState("search-ind-none")
    const [search, setSearch] = useState([])
    const [value, setValue] = useState([])
    const [movId, setMovId] = useState(0)
    const history = useHistory()
    

    const handleSearchType = async (e) => {
        let keyword = e.target.value
        setValue(keyword)
        
        if (keyword === '') {
            return
                }
        
        const movieSearch = await fetch(`/api/movies/${keyword}/`);
        let jsonMovie = await movieSearch.json();

            setSearch(jsonMovie)
    }

    
    const handleCancelInput = (e) => {
        e.preventDefault()
        setValue('')
    }
    // history.push(`/${movId}`)
    const handleExploreClick = (e) => {
        e.preventDefault()
        history.push('/explore')
    }
    const handleNavigate = async (e) => {
        e.preventDefault()
         setMovId(e.target.id)
    }
        
        if(movId !== 0){
            return <Redirect to={`/${movId}`}/>
        }
    return (
        <>



                <div className='image-holder'>

                <img className='logo' src={movietrackerLogo} alt=""/>
                </div>
                <div className='holder'>

                <div>


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
            
                    <div>

                    {value.length ? 
                    
                    <div className="outer-main-list">
                            <div>

                            </div>
                            <ul>
                                <ul>
                                    
                                    <div className="inner-result-field">

                                    { search?.map(movie => (
                                        <>
                                        <ul className="inner-ul">

                                        <div className="inner-search-icon">
                                        </div>
                                            <div className="inner-search">
                                                <div  className="inner-search-result">
                                            <span key={movie.id} >
                                            <b id={movie.id} key={movie.id} style={{cursor: 'pointer'}} onClick={handleNavigate}>{movie.movie_name}</b>
                                            </span>
                                                </div>
                                        </div>
                                        </ul>
                                        </>
                                        ))}

                                    </div>
                                
                                </ul>
                            </ul>
                        </div>
                        

    : null



    }
    </div>
                        {/* { search?.map(movie => (
                            <h1>{movie.id}</h1>
                        ))} */}
                    </div>
                        </div>
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

                   {!value.length && <button onClick={handleExploreClick} className='explore-btn'>Explore Movies</button>}

                    <div className='footer' > <a href='https://github.com/Ace-0101/MovieTracker/'> Github Repo</a><a href="https://www.linkedin.com/in/maen-ace-habes-973034208/">Linkedin</a></div>

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