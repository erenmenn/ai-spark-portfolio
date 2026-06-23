import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emirsyah Rafsanjani — AI Engineer & Consultant" },
      { name: "description", content: "Portfolio of Emirsyah Rafsanjani — AI Engineer, Generative AI mentor, and consultant translating real-world problems into intelligent systems." },
      { property: "og:title", content: "Emirsyah Rafsanjani — AI Engineer" },
      { property: "og:description", content: "AI Engineer & Consultant — building LLMs, RAG, NLP and Computer Vision systems with measurable impact." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Portfolio />;
}
