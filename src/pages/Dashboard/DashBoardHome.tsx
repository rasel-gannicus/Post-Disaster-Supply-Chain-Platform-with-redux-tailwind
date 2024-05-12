import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useGetAllSuppliesQuery } from "../../Redux/app/supply slice/supplyApi";
import Chart from "./Pie Chart/Chart";

const supplies = [
  {
    title: "Plastic Aid Box",
    category: "Medical Equipment",
    amount: 55,
    img: "https://i.ibb.co/ZVVPJcZ/ploegerson-j-ped4-HD32-Q-unsplash.jpg",
    description: "",
  },
  {
    title: "Medicin Holder Box",
    category: "Medical Equipment",
    amount: 445,
    img: "https://i.ibb.co/tx38KqP/laurynas-me-1-TL8-Ao-EDj-c-unsplash.jpg",
    description: "",
  },
  {
    title: "Saline Packet",
    category: "Medical Equipment",
    amount: 2000,
    img: "https://i.ibb.co/8Mg0w6H/marcelo-leal-6pc-GTJDuf6-M-unsplash.jpg",
    description: "",
  },
  {
    title: "Stethoscope",
    category: "Medical Equipment",
    amount: 300,
    img: "https://i.ibb.co/ZN4Twrw/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash.jpg",
    description: "",
  },
  {
    title: "Paracetamol Tablet",
    category: "Health",
    amount: 12000,
    img: "https://i.ibb.co/85NQTn8/hal-gatewood-uo7x-JIV4-Awk-unsplash.jpg",
    description: "",
  },
  {
    title: "Felazill Tablet",
    category: "Health",
    amount: 12000,
    img: "https://i.ibb.co/qC4X8zr/freestocks-nss2e-Rz-Qwgw-unsplash.jpg",
    description: "",
  },
  {
    title: "Floor Cleaner",
    category: "Health",
    amount: 600,
    img: "https://i.ibb.co/9yDsv92/clay-banks-k-Baf0-Dw-BPb-E-unsplash.jpg",
    description: "",
  },
  {
    title: "N-95 Mask",
    category: "Health",
    amount: 1600,
    img: "https://i.ibb.co/C1n0Vq5/ashkan-forouzani-f44b7g7c-M7-E-unsplash.jpg",
    description: "",
  },
  {
    title: "One Time Gloves",
    category: "Health",
    amount: 1900,
    img: "https://i.ibb.co/h7CvT4v/clay-banks-c-Ez-MOp5-Ft-V4-unsplash.jpg",
    description: "",
  },
];

const DashBoardHome = () => {
  // --- Fetching data from server using Redux toolkit Query

  const { data, isLoading, isError, error } = useGetAllSuppliesQuery(undefined);

  let content = null;
  if (isLoading && !isError) {
    content = <h1>Loading...</h1>;
  }
  if (!isLoading && isError) {
    content = <p>Error happened</p>;
  }
  if (!isLoading && !isError && data.length === 0) {
    content = <p>No Supply Found</p>;
  }
  if (!isLoading && !isError && data.length > 0) {
    content = <Chart data={data} />
  }
  return <div>{content}</div>;
};

export default DashBoardHome;
