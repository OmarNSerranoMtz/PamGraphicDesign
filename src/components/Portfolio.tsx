import React from "react";

type Props = {};

function Portfolio({}: Props) {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Mi Portfolio
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Pasa el mouse sobre las imágenes para ver más detalles.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6 xl:gap-8">
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                alt="Project thumbnail"
                className="object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full bg-black/50 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold tracking-tighter text-gray-50 dark:text-gray-900 group-hover:underline">
                  Nombre del Proyecto
                </h3>
                <p className="mt-1 text-sm text-gray-200 dark:text-gray-800 group-hover:underline">
                  Categoría
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                alt="Project thumbnail"
                className="object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full bg-black/50 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold tracking-tighter text-gray-50 dark:text-gray-900 group-hover:underline">
                  Nombre del Proyecto
                </h3>
                <p className="mt-1 text-sm text-gray-200 dark:text-gray-800 group-hover:underline">
                  Categoría
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                alt="Project thumbnail"
                className="object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full bg-black/50 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold tracking-tighter text-gray-50 dark:text-gray-900 group-hover:underline">
                  Nombre del Proyecto
                </h3>
                <p className="mt-1 text-sm text-gray-200 dark:text-gray-800 group-hover:underline">
                  Categoría
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg cursor-pointer">
              <img
                alt="Project thumbnail"
                className="object-cover object-center"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full bg-black/50 group-hover:translate-y-0 transition-transform">
                <h3 className="text-2xl font-bold tracking-tighter text-gray-50 dark:text-gray-900 group-hover:underline">
                  Nombre del Proyecto
                </h3>
                <p className="mt-1 text-sm text-gray-200 dark:text-gray-800 group-hover:underline">
                  Categoría
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
