import analogCctvCable from "../_assert/analog cable.jpg";
import analogCctv from "../_assert/analog cctv.jpg";
import analogPackageCctv from "../_assert/dahua package.webp";
import analogDvrRecorderCctv from "../_assert/dvr_recorder.jpg";
import fixingBoxCctv from "../_assert/fixing box.jpg";
import hilookIpCctv from "../_assert/hillok ip camera.jpg";
import internetCable from "../_assert/internet cable.jpg";
import cctvCamera from "../_assert/indor cctv.jpg";
import ptzCamera from "../_assert/ptz.jpg";
import ptzCameraWebp from "../_assert/ptz.webp";
import solarCctvCamera from "../_assert/solarcamera.jpg";
import setOf8IpCctv from "../_assert/set8 ip camera.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
};

export const ProductList: Product[] = [
  {
    id: 1,
    name: "Analog cctv cable",
    price: 35,
    image: analogCctvCable,
  },
  {
    id: 2,
    name: "Analog cctv",
    price: 75,
    image: analogCctv,
  },
  {
    id: 3,
    name: "Analog package cctv",
    price: 670,
    image: analogPackageCctv,
  },
  {
    id: 4,
    name: "Analog dvr recorder cctv",
    price: 80,
    image: analogDvrRecorderCctv,
  },
  {
    id: 5,
    name: "Fixing box cctv",
    price: 2,
    image: fixingBoxCctv,
  },
  {
    id: 6,
    name: "Hilook Ip cctv",
    price: 145,
    image: hilookIpCctv,
  },
  {
    id: 7,
    name: "Internet cable",
    price: 55,
    image: internetCable,
  },
  {
    id: 8,
    name: "Cctv camera",
    price: 85,
    image: cctvCamera,
  },
  {
    id: 9,
    name: "Ptz camera",
    price: 355,
    image: ptzCamera,
  },
  {
    id: 10,
    name: "Ptz camera",
    price: 855,
    image: ptzCameraWebp,
  },
  {
    id: 11,
    name: "Solar Cctv camera",
    price: 855,
    image: solarCctvCamera,
  },
  {
    id: 12,
    name: "Set of 8 Ip Cctv",
    price: 855,
    image: setOf8IpCctv,
  },
];
