import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type Props = {};

function Contacto({}: Props) {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
        <div className="container grid items-center gap-4 px-4 text-center md:gap-10 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ponte en Contacto
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              ¿Tienes un proyecto en mente? ¡Hablemos! Llena la forma de aquí
              abajo y me pondré en contacto contigo lo antes posible.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Nombre</Label>
                <Input id="first-name" placeholder="Juan" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Apellido</Label>
                <Input id="last-name" placeholder="Pérez" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="email@ejemplo.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Escribe aquí tu mensaje."
                required
              />
            </div>
            <div className="space-y-2">
              <Button type="submit">Enviar</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
