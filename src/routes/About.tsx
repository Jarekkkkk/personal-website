import clsx from "clsx";

import { Container } from "@/components/Container";
import { GitHubIcon, MediumIcon, XIcon } from "@/components/SocialIcons";
import { Link } from "react-router-dom";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        to={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src="/images/portrait.jpg"
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Jarke Lin. Dog lover, who build the cool stuff.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I've been captivated by the intersection of economics and
              technology for as long as I can remember. My journey into
              blockchain began not in computer science labs, but through
              economic theory textbooks where I first glimpsed the potential of
              decentralized systems. I startd my blockchain journey in the
              beginning of 2022, after giving a try on Etherum and Solana, i
              ended up choosing Sui to beome my future path.
            </p>
            <p>
              SuiDouBashi was a first DeFi protocol I'd been designing in my
              mind for months for the first project on Sui. SuiDouBashi combines
              the elegant vesting mechanisms of Curve with OlympusDAO's
              revolutionary bond system, creating something entirely new in the
              Ve(3,3) model space.
            </p>
            <p>
              Today, I work as a Developer for a DeFi protocol in the Sui
              ecosystem, where I'm helping design Defi protocol in Sui
              ecosystem. In my free time, i'm eargerly keeping up with the
              latest innovation in the blockchain, looking for real use cases or
              ideas like DID & Automous World bringing true utility to the world
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/0xJarekkkkk" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://github.com/Jarekkkkk"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://medium.com/@jarekkkkk"
              icon={MediumIcon}
              className="mt-4"
            >
              Follow on Medium
            </SocialLink>
            <SocialLink
              href="mailto:jarekcoding@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jarekcoding@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
