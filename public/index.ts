import lg from "./companyIcons/lg.png";

import samsung from "./companyIcons/samsung.png";
import bosch from "./companyIcons/bosch.png";
import ifb from "./companyIcons/ifb.png";
import panasonic from "./companyIcons/panasonic.png";
import sharp from "./companyIcons/simen.png";
import toshiba from "./companyIcons/toshiba.png";
import siemens from "./companyIcons/simen.png";
import hitachi from "./companyIcons/hitachi.png";
import godrej from "./companyIcons/godrej.png";
import combo from "./other/combo.jpg";
import rfg from "./producs/Regrigerator2.jpg";
import wm from "./producs/washingMachine.jpg";
import mw from "./producs/MicroWave.jpg";
import dw from "./producs/Dishwasher.jpg";
import dryer from "./producs/Dryer.jpg";

import rfgicon from "./productIcon/refrigeratorIcon.png";
import wmicon from "./productIcon/washingmachineicon.png";
import mwicon from "./productIcon/MicroWave.png";
import dwicon from "./productIcon/DishWasher.png";
import dryericon from "./productIcon/Dryer.png";
import tvIcon from "./producs/tvicons.jpg";
import lcdicons from "./producs/lcd.webp";

import bannerimg from "./productIcon/style.jpg";
import tv from "./producs/tv.jpg";
import lcd from "./producs/lcd.png";
export { rfg, wm, mw, dryer, dw, bannerimg, combo };

import refrigeratorServiceImage from "./service/refrigerator.jpg";
import WashingMachineServiceImage from "./service/washing-machine.jpg";
import MicroWaveServiceImage from "./service/microwave.jpg";
import TVServiceImage from "./service/tv.jpg";
import LCDServiceImage from "./service/lcdservice.png";
import { StaticImageData } from "next/image";

export interface ServiceDetailsInterface {
  id: number;
  title: string;
  image: string | StaticImageData;
  servicePoints: string[];
}

export const Services: ServiceDetailsInterface[] = [
  {
    id: 1,
    title: "Refrigerator Services",
    image: refrigeratorServiceImage,
    servicePoints: [
      "Installation: Professional installation by certified technicians to ensure optimal performance and energy efficiency.",
      "Repair: Expert diagnosis and repair of cooling issues, leaks, and electrical problems to keep your refrigerator running smoothly.",
      "Maintenance: Regular check-ups and cleaning to prolong the life of your appliance and maintain its efficiency.",
    ],
  },
  {
    id: 2,
    title: "Microwave Oven Services",
    image: MicroWaveServiceImage,
    servicePoints: [
      "Installation: Seamless integration with your kitchen setup, including safe and secure mounting.",
      "Repair: Quick diagnostics and precise fixes to restore your microwave's heating and cooking capabilities.",
      "Maintenance: Cleaning and inspection services to ensure your microwave operates efficiently and safely.",
    ],
  },

  {
    id: 3,
    title: "Washing Machine Services",
    image: WashingMachineServiceImage,
    servicePoints: [
      "Installation: Proper alignment and balancing, water inlet and outlet connections, and operational demonstration.",
      "Repair: Expert repair services for motor issues, cycle malfunctions, and other common problems.",
      "Maintenance: Regular maintenance services to keep your washing machine in top condition and ensure clean laundry every time.",
    ],
  },
  {
    id: 4,
    title: "TV Services",
    image: TVServiceImage,
    servicePoints: [
      "Installation: Secure wall mounting for all TV sizes, cable management for a clean look, and calibration for best picture quality.",
      "Repair: Professional repair services for screen issues, sound problems, and connectivity issues.",
      "Maintenance: Cleaning and inspection to ensure optimal performance and longevity of your TV.",
    ],
  },
  {
    id: 5,
    title: "LCD Services",
    image: LCDServiceImage,
    servicePoints: [
      "Installation: Expert mounting and setup for optimal viewing experience.",
      "Repair: Addressing issues like screen discoloration, dead pixels, and connectivity problems.",
      "Maintenance: Regular cleaning and check-ups to extend the lifespan of your LCD.",
    ],
  },
];

export interface ProductDetailsInterface {
  id: number;
  name: string;
  details: string;
  pimage: string | StaticImageData;
  picon: string | StaticImageData;
}

export const ProductDetails: ProductDetailsInterface[] = [
  {
    id: 1,
    name: "Refrigerator",
    pimage: rfg,
    picon: rfgicon,
    details:
      "Experience the ultimate in food preservation with our state-of-the-art refrigerators. Equipped with advanced cooling technology and spacious compartments, they keep your food fresh and your kitchen stylish.",
  },
  {
    id: 2,
    name: "Microwave",
    pimage: mw,
    picon: mwicon,
    details:
      "Upgrade your kitchen with our high-performance microwaves. Featuring quick heating, multiple cooking modes, and sleek designs, they make meal preparation effortless and enjoyable.",
  },
  {
    id: 3,
    name: "Dishwasher",
    pimage: dw,
    picon: dwicon,
    details:
      "Discover the convenience of our modern dishwashers. With powerful cleaning cycles, energy efficiency, and quiet operation, they ensure spotless dishes with minimal effort.",
  },
  {
    id: 4,
    name: "Dryer",
    pimage: dryer,
    picon: dryericon,
    details:
      "Keep your clothes perfectly dry with our top-of-the-line dryers. Featuring fast drying times, gentle care for fabrics, and intuitive controls, they are a must-have for every home.",
  },
  {
    id: 5,
    name: "Washing Machine",
    pimage: wm,
    picon: wmicon,
    details:
      "Achieve pristine laundry with our cutting-edge washing machines. Designed for efficiency and performance, they offer a variety of wash cycles and easy-to-use interfaces for a superior washing experience.",
  },
  {
    id: 6,
    name: "TV",
    pimage: tv,
    picon: tvIcon,
    details:
      "Immerse yourself in entertainment with our latest TVs. Boasting crystal-clear displays, smart features, and sleek designs, they bring movies, shows, and games to life like never before.",
  },
  {
    id: 7,
    name: "LCD",
    pimage: lcd,
    picon: lcdicons,
    details:
      "Elevate your viewing experience with our premium LCDs. Offering vibrant colors, high resolution, and a range of sizes, they are perfect for any room and any occasion.",
  },
];

// Define the interface
interface CompanyIcon {
  id: number;
  name: string;
  icon: string | StaticImageData; // The type might be different based on how you're handling images (e.g., string, any, etc.)
}

// Create the array
export const companyIcons: CompanyIcon[] = [
  { id: 1, name: "LG", icon: lg },
  { id: 2, name: "Samsung", icon: samsung },
  { id: 3, name: "Bosch", icon: bosch },
  { id: 4, name: "IFB", icon: ifb },
  { id: 5, name: "Panasonic", icon: panasonic },
  { id: 6, name: "Sharp", icon: sharp },
  { id: 7, name: "Toshiba", icon: toshiba },
  { id: 8, name: "Siemens", icon: siemens },
  { id: 9, name: "Hitachi", icon: hitachi },
  { id: 10, name: "Godrej", icon: godrej },
];

interface BrandServiceDetails {
  Refrigerator: string;
  WashingMachine: string;
  MicrowaveOven: string;
  AirConditioner: string;
  Television: string;
  [key: string]: string; // For any additional services that might be added
}

export interface Brand {
  id: number;
  brandName: string;
  brandBgImage: string | StaticImageData;
  brandServices: { name: string; icon: string }[];
  brandServiceDetails: BrandServiceDetails;
  brandServicePara: string;
}
export const brands: Brand[] = [
  {
    id: 1,
    brandName: "LG",
    brandBgImage: lg,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At LG, we provide excellent services for all your LG products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 2,
    brandName: "Samsung",
    brandBgImage:samsung,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Samsung, we provide excellent services for all your Samsung products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 3,
    brandName: "Bosch",
    brandBgImage: bosch,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Bosch, we provide excellent services for all your Bosch products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 4,
    brandName: "IFB",
    brandBgImage: ifb,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At IFB, we provide excellent services for all your IFB products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 5,
    brandName: "Panasonic",
    brandBgImage: panasonic,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Panasonic, we provide excellent services for all your Panasonic products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 6,
    brandName: "Sharp",
    brandBgImage: sharp,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Sharp, we provide excellent services for all your Sharp products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 7,
    brandName: "Toshiba",
    brandBgImage: toshiba,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Toshiba, we provide excellent services for all your Toshiba products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 8,
    brandName: "Siemens",
    brandBgImage: siemens,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Siemens, we provide excellent services for all your Siemens products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 9,
    brandName: "Hitachi",
    brandBgImage: hitachi,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Hitachi, we provide excellent services for all your Hitachi products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
  {
    id: 10,
    brandName: "Godrej",
    brandBgImage: godrej,
    brandServices: [
      { name: "Refrigerator", icon: "path/to/refrigerator-icon.png" },
      { name: "Washing Machine", icon: "path/to/washing-machine-icon.png" },
      { name: "Microwave Oven", icon: "path/to/microwave-oven-icon.png" },
      { name: "Air Conditioner", icon: "path/to/air-conditioner-icon.png" },
      { name: "Television", icon: "path/to/television-icon.png" },
    ],
    brandServiceDetails: {
      Refrigerator: "Refrigerator repair and maintenance services",
      WashingMachine: "Washing machine repair and maintenance services",
      MicrowaveOven: "Microwave oven repair and maintenance services",
      AirConditioner: "Air conditioner repair and maintenance services",
      Television: "Television repair and maintenance services",
    },
    brandServicePara:
      "At Godrej, we provide excellent services for all your Godrej products. Our expert technicians ensure timely and efficient repairs, maintenance, and support.",
  },
];
