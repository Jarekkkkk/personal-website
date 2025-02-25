import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SimpleLayout } from "@/components/SimpleLayout";

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Tool({
  title,
  href,
  children,
}: {
  title: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export const metadata = {
  title: "Uses",
  description: "Software I use, gadgets I love, and other things I recommend.",
};

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="it's no doubt valuable tools make good skills, here's the tools i've been playing around"
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="14” MacBook Pro, M3 Max, 36GB RAM (2024)">
            Do you have any options?
          </Tool>
          <Tool title="PQ01 keyboards">
            compatiable with MacOS & Windows system
          </Tool>
        </ToolsSection>
        <ToolsSection title="Software">
          <Tool title="Neovim-editor">
            Only and the most powerful editor in the world 🚀
          </Tool>
          <Tool title="Linear-Product management tool">
            purpose-built tool for modern product development. Streamline
            issues, projects, and product roadmaps
          </Tool>
          <Tool title="Lazy git-cli-based UI for Git">
            simple terminal UI for git commands
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  );
}
