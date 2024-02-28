import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32" id="about">
        <div className="container grid items-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Acerca de Mí
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Soy una apasionada diseñadora que ama los diesños limpios y
              elegantes. Mi meta es transformar el mundo en un lugar más bonito,
              paso a paso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
