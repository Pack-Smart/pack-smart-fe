import { backgroundImages } from './images/imageData'

const generateRandomImage = () => {
  let randomIndex = Math.floor(Math.random() * backgroundImages.length)
  return backgroundImages[randomIndex]
}

export const backgroundStyle = {
  backgroundImage: `url(${generateRandomImage()})`,
  backgroundSize: 'cover'
}