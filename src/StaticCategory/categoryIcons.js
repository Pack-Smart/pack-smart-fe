import { FaTshirt, FaUmbrellaBeach, FaBaby, FaHiking, FaSkiing, FaChild, FaCamera } from 'react-icons/fa'
import { ImBriefcase } from 'react-icons/im'
import { BsBagFill } from 'react-icons/bs'
import { GiPerson, GiSoap, GiStairsCake, GiBilledCap} from 'react-icons/gi'
import { BiGlasses, BiDrink } from 'react-icons/bi'

export const categoryIcons = [
  {
    name: 'Accessories',
    icon:  <GiBilledCap size={50}/>
  },
  {
    name: 'Beach',
    icon:  <FaUmbrellaBeach size={50}/>
  },
  {
    name: 'Business',
    icon:  <ImBriefcase size={50}/>
  },
  {
    name: 'Child All',
    icon:  <BsBagFill size={50}/>
  },
  {
    name: 'Child 0-2',
    icon:  <FaBaby size={50}/>
  },
  {
    name: 'Child 3-6',
    icon:  <FaChild size={50}/>
  },
  {
    name: 'Child 7-12',
    icon:  <GiPerson size={50}/>
  },
  {
    name: 'Clothing',
    icon:  <FaTshirt size={50}/>
  },
  {
    name: 'Essentials',
    icon:  <BiGlasses size={50}/>
  },
  {
    name: 'Hiking',
    icon:  <FaHiking size={50}/>
  },
  {
    name: 'Misc',
    icon:  <FaCamera size={50}/>
  },
  {
    name: 'Nightlife',
    icon:  <BiDrink size={50}/>
  },
  {
    name: 'Skiing',
    icon:  <FaSkiing size={50}/>
  },
  {
    name: 'Toiletries',
    icon:  <GiSoap size={50}/>
  },
  {
    name: 'Wedding/Formal',
    icon:  <GiStairsCake size={50}/>
  }
]
