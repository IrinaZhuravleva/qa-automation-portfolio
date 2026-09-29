import { useState } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  Github,
  Languages,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Mic2,
  PenLine,
  Quote,
  RotateCw,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

type Lang = 'en' | 'fr';

const linkedinHref = 'https://www.linkedin.com/in/irina-zhuravleva-23576925b/';
const mediumHref = 'https://medium.com/@iravizion';

const skillGroupsEn = [
  {
    title: 'Automation',
    items: [
      'Playwright',
      'Playwright BDD / Gherkin',
      'TypeScript',
      'Python',
      'Pytest',
      'POM',
      'React',
      'React Testing Library',
      'Jest',
      'Zod',
    ],
  },
  {
    title: 'API & Test Management',
    items: ['Postman', 'Swagger', 'GraphQL', 'Allure Reports', 'TestRail', 'Xray'],
  },
  {
    title: 'Cloud & Infra',
    items: ['Kubernetes', 'Docker', 'Azure Service Bus', 'Artillery'],
  },
  {
    title: 'Quality & Product Sense',
    items: [
      'CI pipelines',
      'Test strategy',
      'Risk analysis',
      'Quality metrics',
      'Exploratory testing',
      'Accessibility (axe-core)',
      'Bug advocacy',
      'Release confidence',
      'User flows',
    ],
  },
  {
    title: 'AI Quality',
    items: [
      'LLM output evaluation',
      'Prompt validation',
      'Model consistency',
      'Edge-case coverage',
      'Claude Code',
      'Copilot',
      'Cursor',
    ],
  },
];

const skillGroupsFr: typeof skillGroupsEn = [
  {
    title: 'Automatisation',
    items: [
      'Playwright',
      'Playwright BDD / Gherkin',
      'TypeScript',
      'Python',
      'Pytest',
      'POM',
      'React',
      'React Testing Library',
      'Jest',
      'Zod',
    ],
  },
  {
    title: 'API et gestion des tests',
    items: ['Postman', 'Swagger', 'GraphQL', 'Allure Reports', 'TestRail', 'Xray'],
  },
  {
    title: 'Cloud et infrastructure',
    items: ['Kubernetes', 'Docker', 'Azure Service Bus', 'Artillery'],
  },
  {
    title: 'Qualité et sens produit',
    items: [
      'Pipelines CI',
      'Stratégie de test',
      'Analyse des risques',
      'Métriques qualité',
      'Tests exploratoires',
      'Accessibilité (axe-core)',
      'Priorisation des anomalies',
      'Confiance dans les mises en production',
      'Parcours utilisateurs',
    ],
  },
  {
    title: 'Qualité IA',
    items: [
      'Évaluation des sorties LLM',
      'Validation des prompts',
      'Cohérence des modèles',
      'Couverture des cas limites',
      'Claude Code',
      'Copilot',
      'Cursor',
    ],
  },
];

const recommendationsEn = [
  {
    quote:
      'What truly sets Irina apart is her exceptional ability to grow — fast. She consistently stays ahead of the curve, picking up new technologies, frameworks, and tools with remarkable speed and turning them into real, production-ready solutions almost immediately.',
    name: 'Vladislav Ishkov',
    title: 'Lead Test Automation Engineer, Quantori',
  },
  {
    quote:
      'Irina quickly got up to speed on the quirks of our code base and processes, and she was consistently able to adapt and grow as the project evolved. She became the backbone of our manual and automated end to end testing efforts, and her work with Playwright and TypeScript gave our team confidence in the apps that we were shipping.',
    name: 'Morgan Rodgers',
    title: 'Senior Software Engineer, PreventionGenetics',
  },
];

const recommendationsFr: typeof recommendationsEn = [
  {
    quote:
      "Ce qui distingue vraiment Irina, c'est sa capacité exceptionnelle à progresser — vite. Elle garde constamment une longueur d'avance, s'approprie de nouvelles technologies, frameworks et outils avec une rapidité remarquable, et les transforme presque immédiatement en solutions concrètes, prêtes pour la production.",
    name: 'Vladislav Ishkov',
    title: 'Lead ingénieur automatisation des tests, Quantori',
  },
  {
    quote:
      "Irina s'est très rapidement familiarisée avec les particularités de notre base de code et de nos processus, et elle a su s'adapter et progresser en continu à mesure que le projet évoluait. Elle est devenue le pilier de nos efforts de test manuel et automatisé de bout en bout, et son travail avec Playwright et TypeScript a donné à notre équipe confiance dans les applications que nous livrions.",
    name: 'Morgan Rodgers',
    title: 'Ingénieur logiciel senior, PreventionGenetics',
  },
];

const repositoriesEn = [
  {
    name: 'Flashcards Words',
    description:
      'Vocabulary flashcards app with React, Vite, and TypeScript, covered by Python + Playwright E2E tests, Allure results, and GitLab CI deploy/rollback jobs.',
    stack: 'React / TypeScript / Python / Playwright / Allure',
    href: 'https://gitlab.com/IrinaZhuravleva/english-flashcards',
  },
];

const repositoriesFr: typeof repositoriesEn = [
  {
    name: 'Flashcards Words',
    description:
      "Application de cartes de vocabulaire construite avec React, Vite et TypeScript, couverte par des tests E2E Python + Playwright, des rapports Allure, et des jobs de déploiement/rollback GitLab CI.",
    stack: 'React / TypeScript / Python / Playwright / Allure',
    href: 'https://gitlab.com/IrinaZhuravleva/english-flashcards',
  },
];

type CaseStudy = {
  title: string;
  role: string;
  challenge: string;
  solution: string;
  results: string;
  description: string;
  achievements: string[];
  stack: string;
};

const caseStudiesEn: CaseStudy[] = [
  {
    title: 'AI-Powered CV Tailoring Platform',
    role: 'Senior QA Automation Engineer',
    challenge:
      'A new internal platform using an LLM pipeline to tailor resumes to job postings had no end-to-end coverage, unresolved accessibility issues, and no automated way to confirm a release was healthy right after deployment.',
    solution:
      'Built an end-to-end Playwright + BDD (Cucumber/Gherkin) suite and registered every scenario in the team’s test management system, fixed WCAG accessibility violations (color contrast, link naming), added OWASP-aligned security checks, and introduced an automated post-deploy smoke-test stage into the Kubernetes-based CI/CD pipeline.',
    results:
      'Release confidence for an LLM-driven product: every deploy is now smoke-tested automatically, accessibility and security gaps are caught before they reach users, and QA scenarios stay traceable in the test-management system instead of living only in test code.',
    description:
      'Quality assurance for an internal AI platform centered on an LLM-based resume-tailoring pipeline (built with LangGraph). Covered end-to-end test automation, accessibility and security hardening, and CI/CD reliability for a product shipping fast-moving AI features to production on Kubernetes.',
    achievements: [
      'Built an end-to-end Playwright + BDD (Cucumber/Gherkin) test suite and registered scenarios in Azure DevOps Test Plans.',
      'Fixed WCAG accessibility violations, including color-contrast and link-name issues.',
      'Added OWASP-aligned security test coverage across access control, injection, and authentication risks.',
      'Introduced an automated post-deploy smoke-test stage (E2E health check) into the Azure DevOps CI/CD pipeline deploying to Kubernetes.',
    ],
    stack: 'Playwright · BDD/Cucumber · Gherkin · TypeScript · Python · Azure DevOps (Pipelines, Test Plans) · Kubernetes · Docker · LangGraph · WCAG · OWASP',
  },
  {
    title: 'ERP System (NetSuite)',
    role: 'Senior Automation QA Engineer',
    challenge:
      'The existing Playwright suite covering core NetSuite workflows — time tracking, project databases, sales orders — had grown hard to maintain, and unstable runs were slowing down regression cycles.',
    solution:
      'Refactored the automation framework for maintainability and execution stability, added SQL-based checks to validate data directly against the database, and extended coverage to the Oracle NetSuite API integration.',
    results:
      'A steadier, easier-to-extend regression suite and stronger confidence that time tracking, project data, and sales orders stayed correct across releases.',
    description:
      'Testing and quality assurance for the company’s ERP system. Focused on functional and regression testing, automation framework maintenance and refactoring (Playwright, TypeScript), API testing, and ensuring data integrity across business processes such as employee time tracking, project database management, and sales order processing.',
    achievements: [
      'Started refactoring the existing Playwright-based automated test suite, improving maintainability and execution stability.',
      'Utilized SQL queries to validate data in the database.',
      'Conducted testing of integrations with the Oracle NetSuite API.',
    ],
    stack: 'Playwright-BDD · Gherkin · TypeScript · Azure DevOps · Confluence · Atlassian (Jira, Bitbucket) · Oracle NetSuite · Postman · Swagger',
  },
  {
    title: 'Microsite-Building Platform',
    role: 'Automation QA Engineer',
    challenge:
      'A new platform for building form-submission microsites had no test coverage at all, and QA needed to keep pace as 10 separate sites shipped in parallel.',
    solution:
      'Built Playwright UI test frameworks for each microsite from the ground up, added load testing with Artillery, and stood up CI/CD pipelines on Azure DevOps and GitLab alongside manual regression testing.',
    results:
      'All 10 microsites shipped with automated UI coverage and repeatable pipelines, giving the team fast, load-tested feedback before every release.',
    description:
      'Develop a platform for building microsites for form submissions, focusing on building automated testing frameworks, implementing CI/CD workflows, and ensuring system reliability through manual and automated testing.',
    achievements: [
      'Built testing frameworks for 10 microsites from scratch using Playwright.',
      'Built CI/CD workflows using Azure DevOps pipelines and GitLab.',
      'Implemented load testing using Artillery.',
    ],
    stack: 'Playwright · Gherkin · TypeScript · Azure DevOps · Confluence · AWS · Docker · GitLab · Artillery · React · Next.js · Tailwind CSS · PrimeReact · Postman · Swagger',
  },
  {
    title: 'Lab Specimen-Tracking Platform',
    role: 'Automation QA Engineer',
    challenge:
      'A platform tracking specimens through lab preparation and sequencing equipment ran on a Cypress suite built with hardcoded values, making it fragile as integrations and requirements kept growing.',
    solution:
      'Made the case for migrating from Cypress to Playwright, refactored the test base to use dynamic test data instead of hardcoded values following the DRY principle.',
    results:
      'A cleaner, more reliable codebase and a smoother migration path, delivered while keeping the equipment-integration platform compliant with its functional requirements.',
    description:
      'Validated a full-cycle IT platform for laboratory specimen tracking, including integration with sample preparation and sequencing equipment, to ensure compliance with functional requirements and deliver a high-quality product.',
    achievements: [
      'Made the case for migrating from Cypress to Playwright (currently in progress) and refactored the existing test base by replacing hardcoded values with dynamic test data.',
      'Refactored the existing codebase following the DRY principle.',
      'Built CI/CD workflows with GitHub Actions.',
    ],
    stack: 'Gherkin · Cucumber · Cypress · GitHub · TestRail · Jira · AWS (Cognito, S3 bucket) · PostgreSQL · Postman · Swagger',
  },
  // {
  //   title: 'Early Cancer Detection Platform',
  //   role: 'Automation QA Engineer',
  //   challenge:
  //     'New features on a platform integrating early cancer detection into routine medical care needed reliable coverage, while a growing share of the existing suite needed ongoing maintenance as the product evolved.',
  //   solution:
  //     'Designed and implemented automated UI and API test cases using the Page Object pattern, adapted and maintained the existing suite alongside new coverage, and automated previously manual end-to-end tests.',
  //   results:
  //     'Broader, more maintainable automated coverage for a clinically sensitive product, with regressions caught earlier in the release cycle.',
  //   description:
  //     'Played an integral role in the development of a platform aimed at integrating early cancer detection into routine medical care through comprehensive testing and automation processes.',
  //   achievements: [
  //     'Designed and implemented automated test cases (UI and API) for new features using the Page Object pattern.',
  //     'Automated end-to-end manual tests.',
  //   ],
  //   stack: 'Jest · Puppeteer · Azure DevOps · Postman · Swagger',
  // },
  {
    title: 'Laboratory Management System',
    role: 'Manual QA Engineer',
    challenge:
      'A laboratory management system needed rigorous verification before every release, with no established QA process or documentation practice in place.',
    solution:
      'Owned requirements analysis and clarification end-to-end, ran functional, smoke, sanity, and regression testing for every release, and built out test cases and bug reports as reusable documentation.',
    results:
      'A repeatable release-testing process and documentation trail that gave the team confidence features met business requirements before shipping.',
    description:
      'Performed manual testing of a laboratory management system, ensuring all features functioned as expected and met business requirements.',
    achievements: [
      'Managed requirements analysis and clarification.',
      'Ran smoke, sanity, and regression testing for releases.',
      'Created test-specific documentation (test cases, bug reports).',
    ],
    stack: 'Postman · Swagger · Azure DevOps · Confluence',
  },
  {
    title: 'Medical Software Certification (IEC 62304)',
    role: 'QA Lead',
    challenge:
      'A medical software product needed a complete, certification-ready test documentation set for IEC 62304 (Class A), with no existing environment or test framework in place and only a two-month window to onboard and deliver.',
    solution:
      'Defined the test strategy and built the full framework and documentation set from scratch — test plans, traceability matrices, structured test suites, and detailed test cases derived from the Software and UI Verification Plans — while coordinating with a parallel client-side development team.',
    results:
      'A certification-ready testing process that enabled the product to pass IEC 62304 certification, delivered on a tight timeline with no pre-existing environment.',
    description:
      'Preparation of test documentation for a medical software product undergoing certification under IEC 62304 (Class A). Responsible for quickly onboarding to the product within a two-month timeline, analysing regulatory requirements, and creating a complete set of test artifacts, including test plans, test cases, traceability matrices, and risk-aligned test coverage. Ensured compliance with medical software lifecycle standards and contributed to establishing a structured, certification-ready testing process.',
    achievements: [
      'Defined test strategy, created Test Plan, traceability matrices, and structured test suites, ensuring regulatory compliance (IEC 62304).',
      'Enabled successful certification by delivering a full test solution from scratch under tight deadlines, without a provided environment, while coordinating with parallel client-side development; developed detailed test cases from the Software/UI Verification Plan covering all requirements and risks.',
    ],
    stack: 'Jira · Xray · Confluence · Postman · Google Drive',
  },
];

const caseStudiesFr: CaseStudy[] = [
  {
    title: 'Plateforme IA de personnalisation de CV',
    role: 'Ingénieure QA Automatisation Senior',
    challenge:
      "Une nouvelle plateforme interne utilisant un pipeline LLM pour adapter des CV aux offres d'emploi n'avait aucune couverture de bout en bout, des problèmes d'accessibilité non résolus, et aucun moyen automatisé de vérifier la santé d'une mise en production juste après le déploiement.",
    solution:
      "Construction d'une suite Playwright + BDD (Cucumber/Gherkin) de bout en bout avec enregistrement de chaque scénario dans l'outil de gestion des tests de l'équipe, correction des violations d'accessibilité WCAG (contraste des couleurs, nommage des liens), ajout de contrôles de sécurité alignés OWASP, et mise en place d'une étape automatisée de smoke-test post-déploiement dans le pipeline CI/CD basé sur Kubernetes.",
    results:
      "Une confiance renforcée dans les mises en production d'un produit piloté par LLM : chaque déploiement est désormais testé automatiquement, les failles d'accessibilité et de sécurité sont détectées avant d'atteindre les utilisateurs, et les scénarios QA restent traçables dans l'outil de gestion des tests plutôt que de vivre uniquement dans le code de test.",
    description:
      "Assurance qualité pour une plateforme IA interne centrée sur un pipeline LLM de personnalisation de CV (construit avec LangGraph). A couvert l'automatisation des tests de bout en bout, le renforcement de l'accessibilité et de la sécurité, ainsi que la fiabilité du CI/CD pour un produit déployant rapidement des fonctionnalités IA en production sur Kubernetes.",
    achievements: [
      'A construit une suite de tests de bout en bout Playwright + BDD (Cucumber/Gherkin) et enregistré les scénarios de test dans Azure DevOps Test Plans.',
      "A corrigé des violations d'accessibilité WCAG, notamment des problèmes de contraste des couleurs et de nommage des liens.",
      "A ajouté une couverture de tests de sécurité alignée OWASP, couvrant les risques liés au contrôle d'accès, aux injections et à l'authentification.",
      "A mis en place une étape automatisée de smoke-test post-déploiement (vérification de santé E2E) dans le pipeline CI/CD Azure DevOps déployant sur Kubernetes.",
    ],
    stack: 'Playwright · BDD/Cucumber · Gherkin · TypeScript · Python · Azure DevOps (Pipelines, Test Plans) · Kubernetes · Docker · LangGraph · WCAG · OWASP',
  },
  {
    title: 'Système ERP (NetSuite)',
    role: 'Ingénieure QA Automatisation Senior',
    challenge:
      "La suite Playwright existante couvrant les principaux flux NetSuite — suivi du temps, bases de données projet, commandes de vente — était devenue difficile à maintenir, et des exécutions instables ralentissaient les cycles de régression.",
    solution:
      "Refactorisation du framework d'automatisation pour améliorer la maintenabilité et la stabilité d'exécution, ajout de vérifications basées sur des requêtes SQL pour valider les données directement en base, et extension de la couverture à l'intégration de l'API Oracle NetSuite.",
    results:
      "Une suite de régression plus stable et plus facile à faire évoluer, avec une confiance renforcée dans l'exactitude du suivi du temps, des données projet et des commandes de vente à chaque mise en production.",
    description:
      "Tests et assurance qualité pour le système ERP de l'entreprise. Concentrée sur les tests fonctionnels et de régression, la maintenance et la refactorisation du framework d'automatisation (Playwright, TypeScript), les tests d'API, et la garantie de l'intégrité des données sur des processus métier tels que le suivi du temps des employés, la gestion des bases de données projet et le traitement des commandes de vente.",
    achievements: [
      "A démarré la refactorisation de la suite de tests automatisés existante basée sur Playwright, en améliorant la maintenabilité et la stabilité d'exécution.",
      'A utilisé des requêtes SQL pour valider les données en base.',
      "A mené des tests d'intégration avec l'API Oracle NetSuite.",
    ],
    stack: 'Playwright-BDD · Gherkin · TypeScript · Azure DevOps · Confluence · Atlassian (Jira, Bitbucket) · Oracle NetSuite · Postman · Swagger',
  },
  {
    title: 'Plateforme de création de microsites',
    role: 'Ingénieure QA Automatisation',
    challenge:
      "Une nouvelle plateforme de création de microsites pour la soumission de formulaires n'avait aucune couverture de test, et la QA devait suivre le rythme du déploiement en parallèle de 10 sites distincts.",
    solution:
      'Construction de frameworks de test UI Playwright pour chaque microsite depuis zéro, ajout de tests de charge avec Artillery, et mise en place de pipelines CI/CD sur Azure DevOps et GitLab en complément des tests de régression manuels.',
    results:
      'Les 10 microsites ont été livrés avec une couverture UI automatisée et des pipelines reproductibles, donnant à l’équipe des retours rapides et testés en charge avant chaque mise en production.',
    description:
      'Développement d’une plateforme de création de microsites pour la soumission de formulaires, avec un focus sur la construction de frameworks de test automatisés, la mise en place de workflows CI/CD, et la garantie de la fiabilité du système via des tests manuels et automatisés.',
    achievements: [
      'A construit des frameworks de test pour 10 microsites depuis zéro avec Playwright.',
      'A mis en place des workflows CI/CD avec les pipelines Azure DevOps et GitLab.',
      'A mis en œuvre des tests de charge avec Artillery.',
    ],
    stack: 'Playwright · Gherkin · TypeScript · Azure DevOps · Confluence · AWS · Docker · GitLab · Artillery · React · Next.js · Tailwind CSS · PrimeReact · Postman · Swagger',
  },
  {
    title: "Plateforme de suivi d'échantillons de laboratoire",
    role: 'Ingénieure QA Automatisation',
    challenge:
      "Une plateforme assurant le suivi d'échantillons à travers des équipements de préparation et de séquençage reposait sur une suite Cypress construite avec des valeurs codées en dur, la rendant fragile à mesure que les intégrations et les exigences se multipliaient.",
    solution:
      'A plaidé pour la migration de Cypress vers Playwright, a refactorisé la base de tests pour remplacer les valeurs codées en dur par des données de test dynamiques en suivant le principe DRY.',
    results:
      "Une base de code plus propre et plus fiable, et une trajectoire de migration plus fluide, tout en maintenant la conformité de la plateforme d'intégration d'équipements avec ses exigences fonctionnelles.",
    description:
      "Validation d'une plateforme informatique complète pour le suivi d'échantillons de laboratoire, incluant l'intégration avec des équipements de préparation et de séquençage, afin de garantir la conformité aux exigences fonctionnelles et de livrer un produit de haute qualité.",
    achievements: [
      'A plaidé pour la migration de Cypress vers Playwright (actuellement en cours) et a refactorisé la base de tests existante en remplaçant les valeurs codées en dur par des données de test dynamiques.',
      'A refactorisé la base de code existante en suivant le principe DRY.',
      'A mis en place des workflows CI/CD avec GitHub Actions.',
    ],
    stack: 'Gherkin · Cucumber · Cypress · GitHub · TestRail · Jira · AWS (Cognito, S3 bucket) · PostgreSQL · Postman · Swagger',
  },
  // {
  //   title: 'Plateforme de détection précoce du cancer',
  //   role: 'Ingénieure QA Automatisation',
  //   challenge:
  //     "Les nouvelles fonctionnalités d'une plateforme visant à intégrer la détection précoce du cancer dans les soins médicaux courants nécessitaient une couverture fiable, tandis qu'une part croissante de la suite existante demandait une maintenance continue à mesure que le produit évoluait.",
  //   solution:
  //     'Conception et mise en œuvre de cas de test automatisés UI et API pour les nouvelles fonctionnalités en utilisant le pattern Page Object, adaptation et maintenance de la suite existante en parallèle des nouvelles couvertures, et automatisation de tests de bout en bout auparavant manuels.',
  //   results:
  //     'Une couverture automatisée plus large et plus maintenable pour un produit à forte sensibilité clinique, avec des régressions détectées plus tôt dans le cycle de mise en production.',
  //   description:
  //     'A joué un rôle clé dans le développement d’une plateforme visant à intégrer la détection précoce du cancer dans les soins médicaux courants, à travers des processus de test et d’automatisation complets.',
  //   achievements: [
  //     'A conçu et mis en œuvre des cas de test automatisés (UI et API) pour les nouvelles fonctionnalités en utilisant le pattern Page Object.',
  //     'A automatisé des tests de bout en bout auparavant manuels.',
  //   ],
  //   stack: 'Jest · Puppeteer · Azure DevOps · Postman · Swagger',
  // },
  {
    title: 'Système de gestion de laboratoire',
    role: 'Ingénieure QA Manuelle',
    challenge:
      "Un système de gestion de laboratoire nécessitait une vérification rigoureuse avant chaque mise en production, sans processus QA établi ni pratique de documentation en place.",
    solution:
      "Prise en charge de bout en bout de l'analyse et de la clarification des exigences, exécution de tests fonctionnels, smoke, sanity et de régression pour chaque mise en production, et création de cas de test et de rapports de bugs en tant que documentation réutilisable.",
    results:
      "Un processus de test de mise en production reproductible et une trace documentaire donnant à l'équipe confiance dans la conformité des fonctionnalités aux exigences métier avant chaque livraison.",
    description:
      'Réalisation de tests manuels sur un système de gestion de laboratoire, garantissant que toutes les fonctionnalités se comportaient comme attendu et répondaient aux exigences métier.',
    achievements: [
      'A géré l’analyse et la clarification des exigences.',
      'A exécuté des tests smoke, sanity et de régression pour les mises en production.',
      'A créé de la documentation spécifique aux tests (cas de test, rapports de bugs).',
    ],
    stack: 'Postman · Swagger · Azure DevOps · Confluence',
  },
  {
    title: 'Certification logicielle médicale (IEC 62304)',
    role: 'QA Lead',
    challenge:
      'Un produit logiciel médical nécessitait un ensemble complet de documentation de test prêt pour la certification IEC 62304 (Classe A), sans environnement ni framework de test existant, avec seulement deux mois pour prendre en main le produit et livrer.',
    solution:
      'Définition de la stratégie de test et construction du framework et de la documentation complets depuis zéro — plans de test, matrices de traçabilité, suites de tests structurées, et cas de test détaillés dérivés des plans de vérification logicielle et UI — en coordination avec une équipe de développement cliente en parallèle.',
    results:
      "Un processus de test prêt pour la certification ayant permis au produit d'obtenir la certification IEC 62304, livré dans un délai serré et sans environnement préexistant.",
    description:
      'Préparation de la documentation de test pour un produit logiciel médical en cours de certification IEC 62304 (Classe A). Responsable de la prise en main rapide du produit sur un délai de deux mois, de l’analyse des exigences réglementaires, et de la création d’un ensemble complet d’artefacts de test, incluant plans de test, cas de test, matrices de traçabilité et couverture de test alignée sur les risques. A garanti la conformité aux standards du cycle de vie des logiciels médicaux et a contribué à établir un processus de test structuré et prêt pour la certification.',
    achievements: [
      'A défini la stratégie de test, créé le plan de test, les matrices de traçabilité et des suites de tests structurées, garantissant la conformité réglementaire (IEC 62304).',
      'A permis une certification réussie en livrant une solution de test complète depuis zéro dans des délais serrés, sans environnement fourni, tout en coordonnant avec une équipe de développement cliente en parallèle ; a développé des cas de test détaillés à partir du plan de vérification logicielle/UI couvrant toutes les exigences et tous les risques.',
    ],
    stack: 'Jira · Xray · Confluence · Postman · Google Drive',
  },
];

const articles = [
  {
    title: 'How We Finally Got the Allure Dashboard Working Inside Azure DevOps',
    meta: 'Aug 14, 2026',
    href: mediumHref,
  },
  {
    title: 'From WeakMaps to Shared Fixtures: 221 Lines Fewer in Our Playwright BDD Suite',
    meta: 'Aug 4, 2026',
    href: mediumHref,
  },
  {
    title: 'We Read About the Hugging Face Hack. Then We Audited Our Own App.',
    meta: 'Jul 31, 2026',
    href: mediumHref,
  },
  {
    title: 'When a Security Advisory Turns a Green Pipeline Red Without Code Changes',
    meta: 'Jul 24, 2026',
    href: 'https://medium.com/@iravizion/when-a-security-advisory-turns-a-green-pipeline-red-without-code-changes-2a767742d523',
  },
];

const meetups = [
  {
    title: 'Ministry of Testing meetup',
    date: 'Report placeholder',
    takeaway: 'Notes on test design, team communication, and practical automation habits.',
  },
  {
    title: 'Playwright community talk',
    date: 'Report placeholder',
    takeaway: 'Patterns worth trying: trace-first debugging, isolated fixtures, and contract checks.',
  },
];

type PrincipleCard = {
  number: string;
  title: string;
  text: string;
};

const principlesEn: PrincipleCard[] = [
  {
    number: '01',
    title: 'Build with purpose',
    text: 'Good testing is not about finding as many bugs as possible. It is about understanding what we are building, why it matters, and where the real risks are. I believe QA should help teams build better products, not simply validate them at the end of development.',
  },
  {
    number: '02',
    title: 'Own the outcome',
    text: 'I take ownership of quality from requirements to release. I like to understand the bigger picture, ask questions early, identify risks, and work closely with developers and product teams to solve problems rather than simply report them.',
  },
  {
    number: '03',
    title: 'Automate what matters',
    text: 'Automation should make teams faster and more confident, not create another maintenance burden. I focus on building reliable, maintainable test frameworks that provide fast feedback and cover the scenarios where automation brings the most value.',
  },
  {
    number: '04',
    title: 'Keep improving',
    text: 'There is always a better way to test something. I enjoy exploring new tools, improving frameworks, refining processes and learning from failures. From migrating Cypress to Playwright to working with AI-powered products, I am always looking for opportunities to make testing more effective.',
  },
  {
    number: '05',
    title: 'Think beyond the happy path',
    text: 'Real users do not always follow the happy path. I pay particular attention to edge cases, integrations, data integrity, accessibility, security and unexpected behaviour. Good quality means thinking about how a system can fail, not only how it is supposed to work.',
  },
  {
    number: '06',
    title: 'Share knowledge and Stay curious',
    text: 'For me, continuous learning is part of the job. I enjoy mentoring junior QA engineers and developing stronger automation and testing practices, while learning new technologies — from cloud infrastructure and Kubernetes to AI quality and LLM evaluation.',
  },
];

const principlesFr: PrincipleCard[] = [
  {
    number: '01',
    title: 'Construire avec un objectif',
    text: "Bien tester ne consiste pas à trouver un maximum de bugs. Il s'agit de comprendre ce que l'on construit, pourquoi cela compte, et où se situent les vrais risques. Je pense que la QA doit aider les équipes à construire de meilleurs produits, pas seulement les valider en fin de développement.",
  },
  {
    number: '02',
    title: 'Être responsable du résultat',
    text: "J'assume la responsabilité de la qualité, des exigences jusqu'à la mise en production. J'aime comprendre la vue d'ensemble, poser des questions tôt, identifier les risques, et travailler en étroite collaboration avec les développeurs et les équipes produit pour résoudre les problèmes plutôt que de simplement les signaler.",
  },
  {
    number: '03',
    title: 'Automatiser ce qui compte',
    text: "L'automatisation doit rendre les équipes plus rapides et plus confiantes, pas créer une charge de maintenance supplémentaire. Je me concentre sur la construction de frameworks de test fiables et maintenables, qui fournissent des retours rapides et couvrent les scénarios où l'automatisation apporte le plus de valeur.",
  },
  {
    number: '04',
    title: "Continuer à s'améliorer",
    text: "Il existe toujours une meilleure façon de tester quelque chose. J'aime explorer de nouveaux outils, améliorer les frameworks, affiner les processus et apprendre de mes échecs. De la migration de Cypress vers Playwright au travail sur des produits basés sur l'IA, je cherche toujours des occasions de rendre les tests plus efficaces.",
  },
  {
    number: '05',
    title: 'Penser au-delà du chemin nominal',
    text: "Les utilisateurs réels ne suivent pas toujours le chemin nominal. J'accorde une attention particulière aux cas limites, aux intégrations, à l'intégrité des données, à l'accessibilité, à la sécurité et aux comportements inattendus. Une bonne qualité, c'est aussi penser à la façon dont un système peut échouer, pas seulement à la façon dont il est censé fonctionner.",
  },
  {
    number: '06',
    title: 'Partager ses connaissances et rester curieuse',
    text: "Pour moi, l'apprentissage continu fait partie du métier. J'aime accompagner les ingénieurs QA juniors et développer de meilleures pratiques d'automatisation et de test, tout en apprenant de nouvelles technologies — de l'infrastructure cloud et Kubernetes à la qualité de l'IA et à l'évaluation des LLM.",
  },
];

const uiText = {
  en: {
    ariaBrandHome: 'Irina Zhuravleva portfolio home',
    ariaNav: 'Portfolio navigation',
    navWork: 'Work',
    navCaseStudies: 'Case Studies',
    navWriting: 'Writing',
    navContact: 'Contact',
    heroEyebrow: 'QA Automation Engineer',
    heroTitleLine1: 'Testing with engineering discipline ',
    heroTitleAccent: 'and product empathy',
    heroIntro:
      'I care about automation that earns trust: tests should be stable, purposeful, and useful when something breaks. My focus is practical coverage, thoughtful debugging data, and collaboration with developers before quality problems reach users.',
    ariaHeroFocus: 'Testing focus',
    heroFocusLabel: 'Focus:',
    heroFocusText: 'stable Playwright suites, LLM/AI feature evaluation, fast release feedback',
    selectedWorkBtn: 'Selected work',
    getInTouchBtn: 'Get in touch',
    ariaLinkedin: 'LinkedIn profile',
    ariaMedium: 'Medium profile',
    ariaPortrait: 'Portrait of Irina Zhuravleva',
    ariaMetrics: 'Professional focus',
    metrics: [
      { title: 'Playwright', desc: 'Browser automation and E2E reliability' },
      { title: 'CI quality gates', desc: 'Fast feedback for product teams' },
      { title: 'Readable reports', desc: 'Clear evidence, traces, and next steps' },
      { title: 'OWASP & a11y', desc: 'Security-minded checks and accessibility testing' },
    ],
    principlesKicker: 'Principles',
    principlesTitle: 'How I approach quality',
    principlesLead:
      'A few principles that shape how I approach testing, engineering, and the products I help build.',
    toolkitKicker: 'Toolkit',
    toolkitTitle: 'How I usually work',
    testimonialsKicker: 'Recommendations',
    testimonialsTitle: 'What people say about working with me',
    seeOnLinkedIn: 'See on LinkedIn',
    linkedinRecommendation: 'LinkedIn recommendation',
    workKicker: 'Repositories',
    workTitle: 'Published QA automation work',
    caseStudiesKicker: 'Case Studies',
    caseStudiesTitle: 'Project experience',
    caseStudy: {
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      description: 'Project Description',
      achievements: 'Achievements',
      hintFront: 'Click to see resume details',
      hintBack: 'Click to go back',
      ariaFront: 'showing case study, press to see resume details',
      ariaBack: 'showing resume details, press to show case study',
    },
    writingKicker: 'Articles',
    writingTitle: 'Published writing',
    publishedLabel: 'Published',
    footerAvailable: 'Available for QA automation roles',
    footerHeading: 'Let’s talk about practical, maintainable test coverage.',
    copyrightSuffix: 'All rights reserved.',
    ariaLangSwitch: 'Language',
    ariaSwitchToFrench: 'Switch language to French',
    ariaSwitchToEnglish: 'Switch language to English',
  },
  fr: {
    ariaBrandHome: "Accueil du portfolio d'Irina Zhuravleva",
    ariaNav: 'Navigation du portfolio',
    navWork: 'Projets',
    navCaseStudies: 'Études de cas',
    navWriting: 'Articles',
    navContact: 'Contact',
    heroEyebrow: 'Ingénieure QA Automatisation',
    heroTitleLine1: "Des tests avec la rigueur de l'ingénierie ",
    heroTitleAccent: "et l'empathie produit",
    heroIntro:
      "L'automatisation doit inspirer confiance : les tests doivent être stables, avoir un objectif clair, et rester utiles quand quelque chose casse. Je me concentre sur une couverture pragmatique, des données de débogage exploitables et la collaboration avec les développeurs, avant que les problèmes de qualité n'atteignent les utilisateurs.",
    ariaHeroFocus: 'Axe de test',
    heroFocusLabel: 'Focus :',
    heroFocusText: "suites Playwright stables, évaluation des fonctionnalités IA/LLM, retours rapides avant chaque mise en production",
    selectedWorkBtn: 'Projets sélectionnés',
    getInTouchBtn: 'Me contacter',
    ariaLinkedin: 'Profil LinkedIn',
    ariaMedium: 'Profil Medium',
    ariaPortrait: "Portrait d'Irina Zhuravleva",
    ariaMetrics: 'Axes professionnels',
    metrics: [
      { title: 'Playwright', desc: 'Automatisation navigateur et fiabilité des tests E2E' },
      { title: 'Contrôles qualité CI', desc: 'Retours rapides pour les équipes produit' },
      { title: 'Rapports lisibles', desc: "Preuves claires, traces d'exécution et prochaines étapes" },
      { title: 'OWASP et a11y', desc: "Vérifications orientées sécurité et tests d'accessibilité" },
    ],
    principlesKicker: 'Principes',
    principlesTitle: 'Comment j’aborde la qualité',
    principlesLead:
      "Quelques principes qui guident ma façon d'aborder les tests, l'ingénierie et les produits que je contribue à construire.",
    toolkitKicker: 'Boîte à outils',
    toolkitTitle: 'Comment je travaille au quotidien',
    testimonialsKicker: 'Recommandations',
    testimonialsTitle: 'Ce que disent mes collègues',
    seeOnLinkedIn: 'Voir sur LinkedIn',
    linkedinRecommendation: 'Recommandation LinkedIn',
    workKicker: 'Dépôts',
    workTitle: "Travaux d'automatisation QA publiés",
    caseStudiesKicker: 'Études de cas',
    caseStudiesTitle: 'Expérience projet',
    caseStudy: {
      challenge: 'Défi',
      solution: 'Solution',
      results: 'Résultats',
      description: 'Description du projet',
      achievements: 'Réalisations',
      hintFront: 'Cliquez pour voir les détails du CV',
      hintBack: 'Cliquez pour revenir',
      ariaFront: "affiche l'étude de cas, appuyez pour voir les détails du CV",
      ariaBack: "affiche les détails du CV, appuyez pour revenir à l'étude de cas",
    },
    writingKicker: 'Articles',
    writingTitle: 'Articles publiés',
    publishedLabel: 'Publié',
    footerAvailable: 'Disponible pour des postes en automatisation QA',
    footerHeading: "Discutons d'une couverture de test pratique et maintenable.",
    copyrightSuffix: 'Tous droits réservés.',
    ariaLangSwitch: 'Langue',
    ariaSwitchToFrench: 'Passer la langue en français',
    ariaSwitchToEnglish: "Passer la langue en anglais",
  },
} satisfies Record<Lang, unknown>;

const skillGroupsByLang: Record<Lang, typeof skillGroupsEn> = { en: skillGroupsEn, fr: skillGroupsFr };
const recommendationsByLang: Record<Lang, typeof recommendationsEn> = { en: recommendationsEn, fr: recommendationsFr };
const repositoriesByLang: Record<Lang, typeof repositoriesEn> = { en: repositoriesEn, fr: repositoriesFr };
const caseStudiesByLang: Record<Lang, CaseStudy[]> = { en: caseStudiesEn, fr: caseStudiesFr };
const principlesByLang: Record<Lang, PrincipleCard[]> = { en: principlesEn, fr: principlesFr };

function PrincipleCard({ number, title, text }: PrincipleCard) {
  return (
    <article className={'principle-card'}>
      <span className="principle-number">{number}</span>

      <div className="principle-content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

type CaseStudyLabels = (typeof uiText)['en']['caseStudy'];

function CaseStudyFlipCard({ study, labels }: { study: CaseStudy; labels: CaseStudyLabels }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((value) => !value);

  return (
    <div
      className={`case-study-flip${flipped ? ' is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`${study.title} — ${flipped ? labels.ariaBack : labels.ariaFront}`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          toggle();
        }
      }}
    >
      <div className="case-study-flip-inner">
        <article className="case-study-card case-study-front" aria-hidden={flipped} tabIndex={flipped ? -1 : 0}>
          <div className="case-study-heading">
            <h3>{study.title}</h3>
            <span className="case-study-role">{study.role}</span>
          </div>
          <div className="case-study-block">
            <span className="case-study-label">{labels.challenge}</span>
            <p>{study.challenge}</p>
          </div>
          <div className="case-study-block">
            <span className="case-study-label">{labels.solution}</span>
            <p>{study.solution}</p>
          </div>
          <div className="case-study-block">
            <span className="case-study-label">{labels.results}</span>
            <p>{study.results}</p>
          </div>
          <p className="case-study-stack">{study.stack}</p>
          <span className="case-study-flip-hint">
            <RotateCw size={14} />
            {labels.hintFront}
          </span>
        </article>
        <article className="case-study-card case-study-back" aria-hidden={!flipped} tabIndex={flipped ? 0 : -1}>
          <div className="case-study-heading">
            <h3>{study.title}</h3>
            <span className="case-study-role">{study.role}</span>
          </div>
          <div className="case-study-block">
            <span className="case-study-label">{labels.description}</span>
            <p>{study.description}</p>
          </div>
          <div className="case-study-block">
            <span className="case-study-label">{labels.achievements}</span>
            <ul>
              {study.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </div>
          <p className="case-study-stack">{study.stack}</p>
          <span className="case-study-flip-hint">
            <RotateCw size={14} />
            {labels.hintBack}
          </span>
        </article>
      </div>
    </div>
  );
}

export function App() {
  const [lang, setLang] = useState<Lang>('en');
  const t = uiText[lang];
  const skillGroups = skillGroupsByLang[lang];
  const recommendations = recommendationsByLang[lang];
  const repositories = repositoriesByLang[lang];
  const caseStudies = caseStudiesByLang[lang];
  const principles = principlesByLang[lang];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.ariaBrandHome}>
          <ShieldCheck size={22} />
          <span>Irina Zhuravleva</span>
        </a>
        <div className="nav-group">
          <nav aria-label={t.ariaNav}>
            <a href="#work">{t.navWork}</a>
            <a href="#case-studies">{t.navCaseStudies}</a>
            <a href="#writing">{t.navWriting}</a>
            {/* <a href="#meetups">Meetups</a> */}
            <a href="#contact">{t.navContact}</a>
          </nav>
          <div className="lang-switch" role="group" aria-label={t.ariaLangSwitch}>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              aria-pressed={lang === 'en'}
              aria-label={t.ariaSwitchToEnglish}
              onClick={() => setLang('en')}
            >
              {/* <Languages size={14} /> */}
              EN
            </button>
            <button
              type="button"
              className={lang === 'fr' ? 'is-active' : ''}
              aria-pressed={lang === 'fr'}
              aria-label={t.ariaSwitchToFrench}
              onClick={() => setLang('fr')}
            >
              FR
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={16} />
            {t.heroEyebrow}
          </p>
          <h1>
            <span>{t.heroTitleLine1}</span>
            <span className="accent-line">{t.heroTitleAccent}</span>
          </h1>
          <p className="intro">{t.heroIntro}</p>
          <div className="hero-note" role="group" aria-label={t.ariaHeroFocus}>
            <span>{t.heroFocusLabel}</span>
            <strong>{t.heroFocusText}</strong>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              {t.selectedWorkBtn}
              <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="mailto:iravizion@gmail.com">
              <Mail size={18} />
              {t.getInTouchBtn}
            </a>
            <a className="button icon-link" href={linkedinHref} target="_blank" rel="noreferrer" aria-label={t.ariaLinkedin}>
              <Linkedin size={18} />
            </a>
            <a className="button icon-link" href={mediumHref} target="_blank" rel="noreferrer" aria-label={t.ariaMedium}>
              <PenLine size={18} />
            </a>
          </div>
        </div>
        <div className="portrait-wrap">
          <img src="/irina-portrait.jpg" alt={t.ariaPortrait} />
        </div>
      </section>

      <section className="metrics" aria-label={t.ariaMetrics}>
        {t.metrics.map((metric) => (
          <div key={metric.title}>
            <strong>{metric.title}</strong>
            <span>{metric.desc}</span>
          </div>
        ))}
      </section>

      {/* <section className="section split">
        <div>
          <p className="section-kicker">
            <Sparkles size={16} />
            About
          </p>
          <h2>Testing with engineering discipline and product empathy.</h2>
        </div>
        <p className="section-lead">
          I care about automation that earns trust: tests should be stable, purposeful, and useful when something breaks.
          My focus is practical coverage, thoughtful debugging data, and collaboration with developers before quality
          problems reach users.
        </p>
      </section> */}
      <section className="section principles">
        <div className="principles-header">
          <p className="section-kicker">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 1 1.594-1.594z" />
              <path d="M20 2v4" />
              <path d="M22 4h-4" />
              <circle cx="4" cy="20" r="2" />
            </svg>

            {t.principlesKicker}
          </p>

          <h2>{t.principlesTitle}</h2>

          <p className="section-lead">{t.principlesLead}</p>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <PrincipleCard key={principle.number} {...principle} />
          ))}
        </div>
      </section>

      <section className="section case-studies" id="case-studies" aria-labelledby="case-studies-title">
        <div className="section-heading">
          <p className="section-kicker">
            <Lightbulb size={16} />
            {t.caseStudiesKicker}
          </p>
          <h2 id="case-studies-title">{t.caseStudiesTitle}</h2>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((study) => (
            <CaseStudyFlipCard study={study} labels={t.caseStudy} key={study.title} />
          ))}
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="recommendations-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">
              <Quote size={16} />
              {t.testimonialsKicker}
            </p>
            <h2 id="recommendations-title">{t.testimonialsTitle}</h2>
          </div>
          <a
            className="button secondary"
            href={`${linkedinHref}details/recommendations/`}
            target="_blank"
            rel="noreferrer"
          >
            {t.seeOnLinkedIn}
            <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="testimonial-grid">
          {recommendations.map((rec) => (
            <article className="testimonial-card" key={rec.name}>
              <Quote className="testimonial-quote-mark" aria-hidden="true" strokeWidth={1.5} />
              <div className="testimonial-header">
                <div className="testimonial-who">
                  <strong>{rec.name}</strong>
                  <span>{rec.title}</span>
                </div>
              </div>
              <p className="testimonial-text">&ldquo;{rec.quote}&rdquo;</p>
              <span className="testimonial-source">
                <Linkedin className="testimonial-source-icon" size={13} />
                {t.linkedinRecommendation}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="section-kicker">
            <Github size={16} />
            {t.workKicker}
          </p>
          <h2 id="work-title">{t.workTitle}</h2>
        </div>
        <div className="repo-list">
          {repositories.map((repo) => (
            <a
              className="repo-card"
              href={repo.href}
              key={repo.name}
              target="_blank"
              rel="noreferrer"
              aria-label={`${repo.name} repository`}
            >
              <div>
                <span className="repo-stack">{repo.stack}</span>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
              </div>
              <ArrowUpRight size={20} />
            </a>
          ))}
        </div>
      </section>

      {/* <section className="section toolkit" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-kicker">
            <TerminalSquare size={16} />
            {t.toolkitKicker}
          </p>
          <h2 id="skills-title">{t.toolkitTitle}</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tags">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section> */}

      <section className="section journal" id="writing" aria-labelledby="writing-title">
        <div className="section-heading">
          <p className="section-kicker">
            <FileText size={16} />
            {t.writingKicker}
          </p>
          <h2 id="writing-title">{t.writingTitle}</h2>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <a
              className="article-row"
              href={article.href}
              target="_blank"
              rel="noreferrer"
              key={article.title}
            >
              <CheckCircle2 size={19} />
              <div>
                <h3>{article.title}</h3>
                <p>{article.meta}</p>
              </div>
              <span>{t.publishedLabel}</span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </section>

      {/* <section className="section" id="meetups" aria-labelledby="meetups-title">
        <div className="section-heading">
          <p className="section-kicker">
            <Mic2 size={16} />
            Meetups
          </p>
          <h2 id="meetups-title">Reports and notes</h2>
        </div>
        <div className="meetup-grid">
          {meetups.map((meetup) => (
            <article className="meetup-card" key={meetup.title}>
              <div className="meetup-date">
                <CalendarDays size={18} />
                {meetup.date}
              </div>
              <h3>{meetup.title}</h3>
              <p>{meetup.takeaway}</p>
            </article>
          ))}
        </div>
      </section> */}

      <footer className="contact-band" id="contact">
        <div>
          <p className="section-kicker">{t.footerAvailable}</p>
          <h2>{t.footerHeading}</h2>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={linkedinHref} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            LinkedIn
          </a>
          <a className="button primary" href={mediumHref} target="_blank" rel="noreferrer">
            <PenLine size={18} />
            Medium
          </a>
          <a className="button primary" href="mailto:iravizion@gmail.com">
            <Mail size={18} />
            {t.getInTouchBtn}
          </a>
        </div>
        <p className="contact-band-copyright">
          © {new Date().getFullYear()} Irina Zhuravleva. {t.copyrightSuffix}
        </p>
      </footer>
    </main>
  );
}
