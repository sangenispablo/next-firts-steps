import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pagina de Precios",
  description: "Venta de Zapatillas y afines",
  keywords: ["Precios", "Pablo Sangenis"],
};

export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Page Pricing</span>
    </>
  );
}
