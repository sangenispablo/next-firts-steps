import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CEO Title",
  description: "Descripcion de la pagina",
  keywords: ["About Page", "Pablo Sangenis", "Sangenis"]
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">Page About</span>
    </>
  );
}
