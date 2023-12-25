import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina de Contacto",
  description: "Contactactanos y te ayudaremos",
  keywords: ["Contacto", "Pablo Sangenis"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Page Contact</span>
    </>
  );
}
