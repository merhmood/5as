import type { Metadata } from "next";
import Cta from "../_components/Cta";
import PageHero from "../_components/PageHero";
import Rows from "../_components/Rows";
import { sectors } from "../_content";

export const metadata: Metadata = { title: "Sectors" };

export default function Sectors() {
  return (
    <>
      <PageHero
        eyebrow="04 / Who we serve"
        title="Sectors we serve"
        intro="From offices and campuses to hospitals and data centres, wherever every system needs to work together."
        image="/img/datacenter.jpg"
      />
      <section className="wrap py-24">
        <Rows rows={sectors} />
      </section>
      <Cta />
    </>
  );
}
