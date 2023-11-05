"use client";
import React from "react";
import { Card } from "flowbite-react";

const reportData = [
  {
    title: "Mia Khalifa",
    location: "Boa Vista/RR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Mia Khalifa",
    location: "Boa Vista/RR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Mia Khalifa",
    location: "Boa Vista/RR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Mia Khalifa",
    location: "Boa Vista/RR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Mia Khalifa",
    location: "Boa Vista/RR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    title: "Mia Khalifa",
    location: "Boa Vista/RR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
];

const Reports = () => {
  return (
    <section className="mt-8 pt-24 pb-24 relative grid grid-cols-3 gap-4 pl-32 pr-32">
      {reportData.map((report, index) => (
        <Card key={index} className="max-w-sm w-72 bg-black text-white">
          <div className="flex flex-col pb-10">
            <div className="mb-2 flex justify-center">
              <img
                src="/mia10-9308889.webp"
                alt="Avatar"
                className="w-20 h-20 rounded-full"
              />
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 text-white text-center">
              {report.title}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400 text-center">
              {report.location}
            </span>
            <p className="text-center mt-4">
              {report.description}
            </p>
          </div>
        </Card>
      ))}
      <div className="col-span-3 flex justify-center">
        <button className="p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2">
          See More
        </button>
      </div>
    </section>
  );
};

export default Reports;