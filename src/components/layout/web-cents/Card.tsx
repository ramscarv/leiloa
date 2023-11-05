"use client";

import { Card } from 'flowbite-react';

export default function Cards() {
  return (
    <Card className="max-w-sm w-72 bg-black text-white">
      <h5 className="text-2xl font-bold tracking-tight">
        Holy ThunderForce
      </h5>
      <div className="font-normal">
        sajgdfjshgfkjasgfkjsagfhjksgd
        fsgfkhjsagdfkhjsagfhjkasgfkhs
        kahdgfhjksgfkjhsgdfgfksgfsjah
      </div>
      <button className="p-2 flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2">
          See More
      </button>
    </Card>
  )
}