import React from "react";

type Props = {};

function Banner({}: Props) {
  return (
    <div>
      <div className="container grid items-center min-h-[300px] gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Diseños Elegantes
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Transformo ideas en diseños extraordinarios. Creemos algo memorable
            juntos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
