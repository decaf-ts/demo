import { ModuleData } from '../types/types-interfaces';

export const TrustedByCompanies = [
  {
    title: 'statamic',
    icon: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
  },
  {
    title: 'savvyCal',
    icon: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg',
  },
  {
    title: 'reform',
    icon: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg',
  },
  {
    title: 'tuple',
    icon: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg',
  },
  {
    title: 'transistor',
    icon: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg',
  },
];

export const ModuleSamples = [
  {
    title: 'Seamless Styling',
    description:
      "Unlock the full potential of your projects with Decaf's modular tools.",
    icon: 'prism-outline',
  },
  {
    title: 'Headless & Modular',
    description:
      'Browse our complete list of modules to find the perfect solution.',
    icon: 'options-outline',
  },
  {
    title: 'Optimized Performance',
    description:
      'Start integrating Decaf modules today to optimize your development workflow.',
    icon: 'speedometer-outline',
  },
  {
    title: 'seamless styling',
    description:
      "Unlock the full potential of your projects with Decaf's modular tools.",
    icon: 'checkmark-done-outline',
  },
];

export const ModulesData: ModuleData[] = [
  {
    title: 'decoration',
    shortDescription: '',
    description:
      '@decaf-ts/decoration provides two complementary capabilities: - A small, builder-style API Decoration to define and apply decorators that can vary by "flavour" for example, different frameworks or environments while keeping a stable key-based API. - A centralized run…',
    details: [
      {
        title: 'Composable Decorators',
        description:
          'Define and compose decorators with flavour-specific extensions to adapt to frameworks like Vue or Nest.',
      },
      {
        title: 'Metadata Store',
        description:
          'Record and query metadata for classes and members at runtime using a stable API.',
      },
      {
        title: 'Property Helpers',
        description:
          'Convenience decorators such as @prop and @description to capture types and human-friendly documentation.',
      },
    ],
  },
  {
    title: 'logging',
    shortDescription: 'Logging Library',
    description:
      'Logging Library — Detailed Description The logging package is a lightweight, extensible logging solution for TypeScript projects. It centers on two main constructs: - MiniLogger — a minimal, context-aware logger used by default. - Logging — a static facade that manages global co…',
    details: [
      {
        title: 'MiniLogger',
        description:
          'A minimal, context-aware logger with configurable levels and optional theming.',
      },
      {
        title: 'Decorators',
        description:
          'Method decorators (log, debug, info, verbose, silly) to consistently instrument calls and benchmarks.',
      },
      {
        title: 'Pluggable Backends',
        description:
          'Swap the logger factory to integrate with adapters like Winston without changing call sites.',
      },
    ],
  },
  {
    title: 'utils',
    shortDescription: '',
    description:
      'The Decaf Utils module is a comprehensive TypeScript utility library designed to standardize APIs across repositories and provide a robust foundation for building command-line interface CLI applications. The library is organized into several key components: CLI Modu…',
    details: [
      {
        title: 'CLI Helpers',
        description:
          'Abstract Command class, input helpers, and standard output writers for consistent CLI apps.',
      },
      {
        title: 'File & Package Utilities',
        description:
          'Helpers to read/write/patch files and inspect package metadata programmatically.',
      },
      {
        title: 'Text Processing',
        description:
          'Common string utilities for case conversions, templating and placeholder replacement.',
      },
    ],
  },
  {
    title: 'reflection',
    shortDescription: '',
    description:
      'The Reflection library is a powerful utility package for TypeScript applications that enhances runtime type inspection and metadata manipulation capabilities. Built on top of the reflect-metadata API, it provides a comprehensive set of tools for working with TypeScri…',
    details: [
      {
        title: 'Type Checks',
        description:
          'Validate values against expected types at runtime with high fidelity.',
      },
      {
        title: 'Decorator Introspection',
        description:
          'Query class and property decorators to build metadata-driven frameworks.',
      },
      {
        title: 'Deep Equality',
        description:
          'Robust isEqual utilities for comparing complex structures including Maps and TypedArrays.',
      },
    ],
  },
];

export const faq = [
  {
    question: 'What is vanilla CMS',
    answer:
      'Vanilla CMS is a powerful Headless CMS designed to help developers and content teams manage and deliver content seamlessly across multiple platforms. It provides a flexible API-based approach for ultimate customization.',
  },
  {
    question: 'How is Vanilla CMS different from traditional CMS platforms?',
    answer:
      'Unlike traditional CMSs, Vanilla CMS decouples the backend from the frontend, giving developers the freedom to use any technology to display content. This makes it more scalable, faster, and adaptable for modern applications.',
  },
  {
    question: 'What types of projects is Vanilla CMS best suited for?',
    answer:
      'Vanilla CMS is ideal for websites, mobile apps, e-commerce platforms, SaaS applications, and any digital product that requires a structured and scalable content management solution.',
  },
  {
    question: 'Does Vanilla CMS support multiple users and roles?',
    answer:
      'Yes! Vanilla CMS comes with Role-Based Access Control (RBAC), allowing you to define permissions for different team members, ensuring security and content integrity.',
  },
  {
    question: 'Can I integrate Vanilla CMS with my existing tech stack?',
    answer:
      'Absolutely! Vanilla CMS is API-first, making it compatible with React, Vue, Next.js, Nuxt.js, Svelte, Flutter, and more. You can fetch content via REST or GraphQL APIs.',
  },
  {
    question: 'Is Vanilla CMS scalable for large enterprises?',
    answer:
      "Yes! Our architecture is cloud-based and built for scalability, ensuring your content performs well whether you're a startup or a large enterprise with high traffic demands.",
  },
];

export const infoData = {
  copyright: '© 2025 Decaf. All rights reserved.',
  feature: 'Modular by design. Productive by default.',
  social: [
    'logo-instagram',
    'logo-facebook',
    'logo-linkedin',
    'logo-twitter',
    'logo-youtube',
  ],
  linkCategories: [
    {
      name: 'product',
      links: [
        {
          name: 'documentation',
          link: '',
        },
        {
          name: 'api reference',
          link: '',
        },
        {
          name: 'blog posts',
          link: '',
        },
        {
          name: 'support center',
          link: '',
        },
      ],
    },
    {
      name: 'contact us',
      links: [
        {
          name: 'email us',
          link: '',
        },
        {
          name: 'live chat',
          link: '',
        },
        {
          name: 'feedback',
          link: '',
        },
        {
          name: 'help center',
          link: '',
        },
      ],
    },
    {
      name: 'legal information',
      links: [
        {
          name: 'Terms of Service',
          link: '',
        },
        {
          name: 'Privacy Policy',
          link: '',
        },
        {
          name: 'Cookie policy',
          link: '',
        },
        {
          name: 'GDPR compliance',
          link: '',
        },
      ],
    },
    ,
  ],
};
