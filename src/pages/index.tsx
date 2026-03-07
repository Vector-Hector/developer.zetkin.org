import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/docs/api/v2/getting-started">
            Core API v2
          </Link>

          <Link
            className={clsx("button button--outline button--secondary button--lg", styles.heroBannerButtonOutlined)}
            to="/docs/api/v1/getting-started">
            Core API v1
          </Link>
        </div>
      </div>
    </header>
  );
}

function Section({
                   title,
                   children,
                 }: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="margin-vert--xl">
      <div className="container">
        <Heading as="h2">{title}</Heading>
        {children}
      </div>
    </section>
  );
}

function Card({
                title,
                description,
                links,
              }: {
  title: string;
  description: string;
  links: {
    link: string;
    linkText: string;
    variant?: "outline" | "primary" | "secondary";
  }[]
}) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>

        <div className="card__body">
          <p>{description}</p>
        </div>

        <div className="card__footer">
          {links.map((link) => (
            <Link className={`button button--${link.variant ?? "primary"} button--sm margin-right--sm`} to={link.link}>
              {link.linkText}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function StartBuilding() {
  return (
    <Section title="Start Building">
      <p className="margin-bottom--lg">
        Zetkin provides APIs, SDKs and platform tooling for building organizing
        technology. Start with the API or explore the surrounding ecosystem.
      </p>

      <div className="row">

        <Card
          title="Core API v2"
          description="The latest version of the Zetkin Core API. Recommended for all new integrations and applications."
          links={[{
            link: "/docs/api/v2/getting-started",
            linkText: "Explore v2",
            variant: "secondary"
          }]}
        />

        <Card
          title="Core API v1"
          description="Legacy version of the Zetkin Core API used by existing integrations."
          links={[{
            link: "/docs/api/v1/getting-started",
            linkText: "View v1 docs",
            variant: "secondary"
          }]}
        />

        <Card
          title="SDK"
          description="Client libraries and helpers for interacting with Zetkin APIs from applications and scripts."
          links={[{
            link: "/docs/sdk",
            linkText: "Read SDK docs",
            variant: "secondary"
          }]}
        />

      </div>
    </Section>
  );
}

function PlatformComponents() {
  return (
    <Section title="Platform Components">
      <p className="margin-bottom--lg">
        The Zetkin platform includes shared tooling used across the ecosystem.
      </p>

      <div className="row">
        <Card
          title="ZUI Design System"
          description="Reusable UI components and design patterns used across Zetkin applications."
          links={[{
            link: "https://github.com/zetkin/app.zetkin.org/tree/main/src/zui",
            linkText: "GitHub",
            variant: "secondary",
          }, {
            link: "https://app.dev.zetkin.org/storybook/index.html",
            linkText: "Storybook",
            variant: "outline",
          }]}
        />

        <Card
          title="Lyra Translations"
          description="Translation and localization workflows used to internationalize Zetkin."
          links={[{
            link: "https://github.com/zetkin/lyra",
            linkText: "GitHub",
            variant: "secondary",
          }, {
            link: "https://lyra.zetkin.org",
            linkText: "Lyra",
            variant: "outline",
          }]}
        />

        <Card
          title="GitHub"
          description="Explore the open source repositories powering the Zetkin platform."
          links={[{
            link: "https://github.com/zetkin",
            linkText: "View repositories",
            variant: "secondary",
          }]}
        />
      </div>
    </Section>
  );
}

function AboutZetkin() {
  return (
    <Section title="What is Zetkin?">
      <div className="row">
        <div className="col col--8">
          <p>
            Zetkin is a platform for organizing activism, campaigns and
            grassroots movements. It helps organizations mobilize supporters,
            coordinate volunteers and plan actions at scale.
          </p>

          <p>
            The platform is developed by the Zetkin Foundation, a nonprofit
            building technology for movements working toward a socialist,
            feminist, anti-racist and sustainable future.
          </p>

          <p>
            Much of the project is open source and developed together with a
            community of organizers, developers and designers.
          </p>

          <Link className="button button--outline button--sm" to={'https://zetkin.org/en'}>
            Learn more about Zetkin
          </Link>
        </div>
      </div>
    </Section>
  );
}

function DeveloperEnvironment() {
  return (
    <Section title="Developer Environment">
      <p className="margin-bottom--lg">
        A public developer deployment of the Zetkin platform is available for
        testing integrations and exploring the application.
      </p>

      <p>
        <a
          href="https://app.dev.zetkin.org"
          target="_blank"
          rel="noopener noreferrer"><strong>app.dev.zetkin.org</strong></a> runs the latest version of the Zetkin
        platform (Generation 3). You can use the test accounts below to explore
        the system with different permission levels.
      </p>

      <div className="margin-top--lg">
        <table>
          <thead>
          <tr>
            <th>Role / Access</th>
            <th>Username</th>
            <th>Password</th>
            <th>SMS Code</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Administrator</td>
            <td><code>testadmin@example.com</code></td>
            <td><code>password</code></td>
            <td><code>999999</code></td>
          </tr>
          <tr>
            <td>Caller</td>
            <td><code>testcaller@example.com</code></td>
            <td><code>password</code></td>
            <td><code>999999</code></td>
          </tr>
          <tr>
            <td>Basic user</td>
            <td><code>testuser@example.com</code></td>
            <td><code>password</code></td>
            <td><code>999999</code></td>
          </tr>
          </tbody>
        </table>
      </div>

      <p className="margin-top--md">
        These accounts are intended for development and testing only. Data in
        the developer environment may be reset periodically.
      </p>

      <div>
        <Link className="button button--secondary button--sm margin-right--sm" to={"https://app.dev.zetkin.org"}>
          Open dev deployment
        </Link>
        <Link className="button button--outline button--sm" to={"https://github.com/zetkin/app.zetkin.org"}>
          GitHub
        </Link>
      </div>

    </Section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Developer documentation for the Zetkin organizing platform">
      <HomepageHeader/>

      <main>

        <StartBuilding/>

        <DeveloperEnvironment/>

        <PlatformComponents/>

        <AboutZetkin/>

      </main>
    </Layout>
  );
}