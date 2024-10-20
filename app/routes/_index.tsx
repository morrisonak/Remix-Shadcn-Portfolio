import { MetaFunction } from "@remix-run/react";
import { constants } from "~/data/siteData";
import { Nav } from "~/components/nav";
import { Profile } from "~/components/profile";
import { Skills } from "~/components/skills";
import { Projects } from "~/components/projects";
import { Publications } from "~/components/publications";
import { Experience } from "~/components/experience";
import { Education } from "~/components/education";
import { Testimonials } from "~/components/testimonials";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";

const { firstLastname } = constants;

export const meta: MetaFunction = () => [
  { title: firstLastname },
  {
    property: "og:title",
    content: `The Personal Portfolio of ${firstLastname}`,
  },
  {
    name: "description",
    content: `The Personal Portfolio of ${firstLastname}`,
  },
];

export default function EngineerPortfolio() {
  const components = [
    Profile,
    Skills,
    Projects,
    Publications,
    Experience,
    Education,
    Testimonials,
    Contact,
  ];

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-slate-100">
        {components.map((Component, index) => (
          <Component key={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}
