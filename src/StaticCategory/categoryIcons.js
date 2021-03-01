import { FaTshirt, FaUmbrellaBeach, FaBaby, FaHiking, FaSkiing, FaChild, FaCamera } from 'react-icons/fa'
import { ImBriefcase } from 'react-icons/im'
import { BsBagFill } from 'react-icons/bs'
import { GiPerson, GiSoap, GiStairsCake, GiBilledCap, GiCampingTent, GiPassport } from 'react-icons/gi'
import { BiGlasses, BiDrink } from 'react-icons/bi'

export const categoryIcons = [
  {
    name: 'Accessories',
    icon:  <GiBilledCap size={40}/>
  },
  {
    name: 'Beach',
    icon:  <FaUmbrellaBeach size={40}/>
  },
  {
    name: 'Business',
    icon:  <ImBriefcase size={40}/>
  },
  {
    name: 'Child All',
    icon:  <BsBagFill size={40}/>
  },
  {
    name: 'Child 0-2',
    icon:  <FaBaby size={40}/>
  },
  {
    name: 'Child 3-6',
    icon:  <FaChild size={40}/>
  },
  {
    name: 'Child 7-12',
    icon:  <GiPerson size={40}/>
  },
  {
    name: 'Clothing',
    icon:  <FaTshirt size={40}/>
  },
  {
    name: 'Essentials',
    icon:  <BiGlasses size={40}/>
  },
  {
    name: 'Hiking',
    icon:  <FaHiking size={40}/>
  },
  {
    name: 'Misc.',
    icon:  <FaCamera size={40}/>
  },
  {
    name: 'Nightlife',
    icon:  <BiDrink size={40}/>
  },
  {
    name: 'Skiing',
    icon:  <FaSkiing size={40}/>
  },
  {
    name: 'Toiletries',
    icon:  <GiSoap size={40}/>
  },
  {
    name: 'Wedding/Formal',
    icon:  <GiStairsCake size={40}/>
  },
  {
    name: 'Camping',
    icon: <GiCampingTent size={40} />
  },
  {
    name: 'International',
    icon: <GiPassport size={40} />
  }
]
