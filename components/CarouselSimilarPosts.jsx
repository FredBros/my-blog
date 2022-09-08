import {useState, useEffect} from 'react'
import {getSimilarPosts} from "../services"
import CarouselPosts from "./CarouselPosts"

function CarouselSimilarPosts({categories, slug}) {

    const [posts, setPosts] = useState([])

   


    useEffect(() => {
    getSimilarPosts(categories, slug).then((result)=>{
        setPosts(result)
    })    
    }
    , [slug])


  return (
    <CarouselPosts posts= {posts}/>
  )
}

export default CarouselSimilarPosts