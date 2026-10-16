import type { Metadata } from "next";
import CtaBanner from "@/components/cta-banner";
import JsonLd from "@/components/json-ld";
import PageHero from "@/components/page-hero";
import ProjectGallery from "@/components/project-gallery";
import Reveal from "@/components/reveal";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Project Gallery — Tile, Backsplashes & Bathrooms on the Eastside",
  description:
    "Browse tile installation, kitchen backsplash, bathroom improvement, and flooring projects by WA Pro Builders across Redmond, Bellevue, Kirkland, Sammamish & the Eastside. Every project within ~20 miles of Redmond, WA.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Project Gallery | WA Pro Builders LLC — Redmond, WA",
    description:
      "Real tile, backsplash, bathroom, and flooring projects from Redmond, Bellevue, Kirkland, and the Eastside.",
    url: `${site.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Project Gallery", path: "/gallery" },
        ])}
      />

      <PageHero
        eyebrow={`Our work · ${site.projectsCompleted}+ projects`}
        title='Built nearby. <em class="italic text-clay-600">Photographed before we left.</em>'
        sub="A selection of recent tile, backsplash, bathroom, and flooring projects — every one within about 20 miles of downtown Redmond. Tap any photo for the full story."
        image="/images/kitchen-5.jpg"
        alt="Sammamish kitchen range wall with textured artisan tile by WA Pro Builders"
        crumbs={[{ name: "Project Gallery", path: "/gallery" }]}
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8" aria-label="Project gallery">
        <Reveal>
          <ProjectGallery projects={projects} />
        </Reveal>
      </section>

      <CtaBanner title="Picture your home in this gallery." />
    </>
  );
}
