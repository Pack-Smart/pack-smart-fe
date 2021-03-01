import { TiHomeOutline } from 'react-icons/Ti'
import { BiBookmarkPlus } from 'react-icons/bi'
import { GiGears } from 'react-icons/gi'
import { RiFileListLine } from 'react-icons/ri'


export const burgerMenuData = [
  {
    id: 'home',
    href: '/',
    icon: <TiHomeOutline 
      size={25} 
      className='burger-icon' 
      color='#2d3045' 
    />,
    text: 'Home'  
  }, 
  { 
    id: 'packing-quiz',
    href: '/packing-quiz',
    icon: <RiFileListLine 
      size={25} 
      className='burger-icon' 
      color='#2d3045' 
    />,
    text: 'Start New List'  
  }, 
  {
    id: 'how-it-works',
    href: '/how-it-works',
    icon: <GiGears 
      size={25} 
      className='burger-icon' 
      color='#2d3045' 
    />,
    text: 'How It Works'  
  }, 
  {
    id: 'saved-packing-lists',
    href: '/saved-packing-lists',
    icon: <BiBookmarkPlus 
      size={25} 
      className='burger-icon' 
      color='#2d3045' 
    />,
    text: 'Saved Lists'  
  }, 
]