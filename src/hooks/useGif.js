import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useGifs = ( category ) => {

  // State to store the gifs
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const images = await getGifs(category);

    setImages(images)
    setIsLoading(false)
  }

  return {
    images,
    isLoading
  }
}
