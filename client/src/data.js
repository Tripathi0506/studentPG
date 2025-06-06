import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  // GiBarn,
  // GiBoatFishing,
  // GiCactus,
  // GiCastle,
  // GiCaveEntrance,
  // GiForestCamp,
  // GiIsland,
  // GiWindmill,
} from "react-icons/gi";
import {
  FaSkiing,
  FaPumpSoap,
  FaShower,
  // FaFireExtinguisher,
  FaUmbrellaBeach,
  FaKey,
} from "react-icons/fa";
import { FaHouseUser, FaPeopleRoof, FaKitchenSet } from "react-icons/fa6";
import {
  BiSolidWasher,
  BiSolidDryer,
  BiSolidFirstAid,
  BiWifi,
  BiSolidFridge,
  BiWorld,
} from "react-icons/bi";
import { BsSnow, BsFillDoorOpenFill, BsPersonWorkspace } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdMicrowave, MdBalcony, MdYard, MdPets } from "react-icons/md";
import {
  // PiBathtubFill,
  PiCoatHangerFill,
  PiTelevisionFill,
} from "react-icons/pi";
import { TbIroning3 } from "react-icons/tb";
import {
  GiHeatHaze,
  GiCctvCamera,
  // GiBarbecue,
  GiToaster,
  // GiCampfire,
} from "react-icons/gi";
import { AiFillCar } from "react-icons/ai";

export const categories = [
  {
    label: "All",
    icon: <BiWorld />,
  },
  {
    img: "assets/bhopal.png",
    label: "Bhopal",
    icon: <MdOutlineVilla />,
    description: "This property is close to the LNCT",
  },
  {
    img: "assets/indore.jpg",
    label: "Indore",
    icon: <MdOutlineVilla />,
    description: "This property is nearest to SGSITS",
  },
  {
    img: "assets/jabalpur.jpg",
    label: "Jabalpur",
    icon: <MdOutlineVilla />,
    description: "This property is modern and nearest to JEC",
  },
  {
    img: "assets/sagar.jpeg",
    label: "Sagar",
    icon: <MdOutlineVilla/>,
    description: "This property is in the beside of GadGad hill nearest to IGEC",
  },
  {
    img: "assets/ujjain.webp",
    label: "Ujjain",
    icon: <MdOutlineVilla />,
    description: "This is property beautiful and closest to UEC ",
  },
  {
    img: "assets/satna.jpeg",
    label: "Satna",
    icon: <MdOutlineVilla/>,
    description: "This property is nearest to medical and Goverment Degree college",
  },
  {
    img: "assets/rewa.jpeg",
    label: "Rewa",
    icon: <MdOutlineVilla/>,
    description: "This property is nearest to collectrate and REC ",
  },
  // {
  //   img: "assets/skiing_cat.jpg",
  //   label: "Ski-in/out",
  //   icon: <FaSkiing />,
  //   description: "This property has skiing activies!",
  // },
  // {
  //   img: "assets/castle_cat.webp",
  //   label: "Castles",
  //   icon: <GiCastle />,
  //   description: "This property is an ancient castle!",
  // },
  // {
  //   img: "assets/cave_cat.jpg",
  //   label: "Caves",
  //   icon: <GiCaveEntrance />,
  //   description: "This property is in a spooky cave!",
  // },
  // {
  //   img: "assets/camping_cat.jpg",
  //   label: "Camping",
  //   icon: <GiForestCamp />,
  //   description: "This property offers camping activities!",
  // },
  // {
  //   img: "assets/arctic_cat.webp",
  //   label: "Arctic",
  //   icon: <BsSnow />,
  //   description: "This property is in arctic environment!",
  // },
  // {
  //   img: "assets/desert_cat.webp",
  //   label: "Desert",
  //   icon: <GiCactus />,
  //   description: "This property is in the desert!",
  // },
  // {
  //   img: "assets/barn_cat.jpg",
  //   label: "Barns",
  //   icon: <GiBarn />,
  //   description: "This property is in a barn!",
  // },
  // {
  //   img: "assets/lux_cat.jpg",
  //   label: "Luxury",
  //   icon: <IoDiamond />,
  //   description: "This property is brand new and luxurious!",
  // },
];

export const types = [
  {
    name: "An entire place",
    description: "Students have the whole place to themselves",
    icon: <FaHouseUser />,
  },
  {
    name: "Room(s)",
    description:
      "Students have their own room in a house, plus access to shared places",
    icon: <BsFillDoorOpenFill />,
  },
  {
    name: "A Shared Room",
    description:
      "Students sleep in a room or common area that maybe shared with you or others",
    icon: <FaPeopleRoof />,
  },
];

export const facilities = [
  // {
  //   name: "Bath tub",
  //   icon: <PiBathtubFill />,
  // },
  // {
  //   name: "Personal care products",
  //   icon: <FaPumpSoap />,
  // },
  {
    name: "Outdoor shower",
    icon: <FaShower />,
  },
  {
    name: "Washer",
    icon: <BiSolidWasher />,
  },
  {
    name: "Dryer",
    icon: <BiSolidDryer />,
  },
  {
    name: "Hangers",
    icon: <PiCoatHangerFill />,
  },
  {
    name: "Iron",
    icon: <TbIroning3 />,
  },
  {
    name: "TV",
    icon: <PiTelevisionFill />,
  },
  {
    name: "Dedicated workspace",
    icon: <BsPersonWorkspace />
  },
  {
    name: "Air Conditioning",
    icon: <BsSnow />,
  },
  {
    name: "Heating",
    icon: <GiHeatHaze />,
  },
  {
    name: "Security cameras",
    icon: <GiCctvCamera />,
  },
  // {
  //   name: "Fire extinguisher",
  //   icon: <FaFireExtinguisher />,
  // },
  {
    name: "First Aid",
    icon: <BiSolidFirstAid />,
  },
  {
    name: "Wifi",
    icon: <BiWifi />,
  },
  {
    name: "Cooking set",
    icon: <FaKitchenSet />,
  },
  {
    name: "Refrigerator",
    icon: <BiSolidFridge />,
  },
  {
    name: "Microwave",
    icon: <MdMicrowave />,
  },
  {
    name: "Stove",
    icon: <GiToaster />,
  },
  // {
  //   name: "Barbecue grill",
  //   icon: <GiBarbecue />,
  // },
  // {
  //   name: "Outdoor dining area",
  //   icon: <FaUmbrellaBeach />,
  // },
  {
    name: "Private patio or Balcony",
    icon: <MdBalcony />,
  },
  // {
  //   name: "Camp fire",
  //   icon: <GiCampfire />,
  // },
  {
    name: "Garden",
    icon: <MdYard />,
  },
  {
    name: "Free parking",
    icon: <AiFillCar />,
  },
  {
    name: "Self check-in",
    icon: <FaKey />
  },
  // {
  //   name: " Pet allowed",
  //   icon: <MdPets />
  // }
];