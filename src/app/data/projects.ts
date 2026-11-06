/* Single source of truth for the projects, in display order:
   BudgetFlow, Formal Rental Attire, then the thesis.
   When a project goes live, only its entry here changes
   (status, statusLabel, links.live). No component changes needed.

   Every text that is not confirmed yet starts with "TODO:" so it can be
   found with a search and replaced before launch. */
export type ProjectStatus = 'live' | 'deploying-soon' | 'academic';

export interface Project {
  slug: string; // used in /projects/:slug
  title: string;
  status: ProjectStatus;
  statusLabel: string; // e.g. "Live · Deployed on Vercel, Render and Neon"
  summary: string; // one line, shown on the home page
  architecture?: string; // shown on the home page for projects 2 and 3
  tags: string[];
  screenshot?: string; // path under public/; omit to show the placeholder
  links: {
    live?: string;
    github?: string;
    // the case study is the internal route /projects/:slug
  };
  caseStudy: {
    problem: string;
    role: string;
    features: string[]; // 3 to 5 bullets
    architectureNote: string; // why this architecture was chosen
    challenges: string[]; // challenges and what was learned
    gallery?: string[]; // extra screenshots
    demoVideo?: string; // optional URL
  };
}

export const projects: Project[] = [
  {
    slug: 'budgetflow',
    title: 'BudgetFlow',
    status: 'live',
    statusLabel: 'Live · Deployed on Vercel, Render and Neon',
    summary:
      'A personal budget and savings tracker that helps users manage monthly budgets, expenses and savings goals.',
    tags: [
      'Angular',
      'Java',
      'Spring Boot',
      'Hibernate',
      'JPA',
      'PostgreSQL',
      'Google Sign-in',
      'JWT',
      'Vercel',
      'Render',
      'Neon',
    ],
    links: {
      live: 'https://budget-flow-q8wg.vercel.app/',
      github: 'https://github.com/edelsonbarrios/BudgetFlow',
    },
    caseStudy: {
      problem:
        'BudgetFlow is a personal budget and savings tracker designed to help users manage their finances and monitor their expenses. ' +
        'Users can set monthly budgets, track expenses by category, manage recurring expenses, and create savings goals to monitor progress toward financial targets. ' +
        'Login is through Google authentication.',
      role:
        'I built BudgetFlow end to end. On the Spring Boot backend I wrote the REST endpoints, entities, repositories, services and the PostgreSQL database design, including Google ID token verification and JWT login. ' +
        'The Angular frontend (routing, services, pagination, reactive forms) was built with AI assistance to save time, and I understand how it works. ' +
        'I also deployed the app: Vercel for the frontend, Render for the backend and Neon for the database.',
      features: [
        'Monthly budgets with expense tracking by category',
        'Recurring expenses',
        'Savings goals with progress toward financial targets',
        'Google Sign-in: the Spring Boot backend verifies the Google ID token and issues an application-specific JWT for authenticated API access',
        'Reactive forms with frontend and backend validation, and API error handling for consistent input',
      ],
      architectureNote:
        'I chose a Spring Boot REST backend because I wanted to learn a different backend from my other projects, which use C# and ASP.NET Core. ' +
        'The Angular frontend talks to the backend only through REST endpoints, so the two parts are built and deployed separately (Vercel for the frontend, Render for the backend).',
      challenges: [
        'Setting up Google Sign-in and verifying the Google ID token on the backend before issuing an application JWT.',
        'Validating input on both the frontend and the backend, so the backend still rejects bad requests even if the frontend is bypassed.',
        'Learning how Spring annotations and beans work, coming from C# and ASP.NET Core.',
      ],
    },
  },
  {
    slug: 'formal-rental-attire',
    title: 'Formal Rental Attire',
    status: 'deploying-soon',
    statusLabel: 'Deploying soon',
    summary:
      'A formal wear rental system where customers browse and reserve attire online and send a GCash payment reference, while staff manage inventory and confirm rentals from an admin side.',
    architecture: 'CQRS with Mediator',
    tags: [
      'C#',
      'ASP.NET Core',
      'Angular',
      'PostgreSQL',
      'CQRS',
      'Mediator',
      'Google OAuth',
    ],
    links: {
      github: 'https://github.com/edelsonbarrios/FormalAttireRental',
    },
    caseStudy: {
      problem:
        'Renting formal wear usually means visiting physical shops to find out what is available. ' +
        'Formal Rental Attire is a personal practice project, not built for a real shop, that moves this online. ' +
        'Customers can see the available clothes with their rental price, available quantity and number of rental days, and reserve them without visiting a shop. ' +
        'Staff manage the inventory and confirm reservations from an admin side.',
      role:
        'I built Formal Rental Attire end to end: the ASP.NET Core backend using CQRS with Mediator, the PostgreSQL database, Google OAuth sign-in, and the Angular frontend.',
      features: [
        'Google OAuth sign-in',
        'Customers browse clothes with rental price, available quantity and rental days, and reserve them online',
        'Customers send a GCash reference number with a screenshot as payment proof, and staff confirm the payment to confirm the reservation',
        'Inventory management: stock entry, stock adjustment, and purchase orders from creation through receiving stock',
        'Employee accounts with role-based access, timestamped audit logs, and archiving and restoring of records',
      ],
      architectureNote:
        'I chose CQRS with Mediator because I wanted to learn how proper system design and architecture work, and to practice clean coding. ' +
        'Each action, such as creating a reservation, confirming a rental or receiving stock, is its own command or query with its own handler. ' +
        'This keeps the code easy to read and makes the application easier to scale. ' +
        'I built the thesis project with a layered Repository, Service, Controller structure, so the two projects let me compare both approaches.',
      challenges: [
        'Keeping inventory consistent across stock changes.',
        'Designing the database and the relationships between its tables.',
        'Setting up Google OAuth sign-in.',
      ],
    },
  },
  {
    slug: 'racquel-pharmacy-system',
    title: 'Sales and Inventory Management System for Racquel Pharmacy',
    status: 'academic',
    statusLabel: 'Academic thesis',
    summary:
      'A web-based sales and inventory system for a pharmacy branch, covering stock, purchase orders and point-of-sale.',
    architecture: 'Layered: Repository, Service, Controller',
    tags: ['C#', 'ASP.NET Core', 'EF Core', 'Angular', 'PostgreSQL'],
    links: {
      github: 'https://github.com/edelsonbarrios/CapstoneRepo',
    },
    caseStudy: {
      problem:
        'A web-based application designed to streamline the sales and inventory operations of the Makabud Branch of Racquel Pharmacy. ' +
        'It manages product stocks, purchase orders, stock replenishment, inventory adjustments and point-of-sale transactions. ' +
        'It also includes employee account management, authentication, and record archiving and restoration.',
      role: 'TODO: state your specific role in the thesis (and the team size if it was a group).',
      features: [
        'Purchase orders, stock replenishment, stock entry and inventory adjustments',
        'Point-of-sale transactions',
        'Employee and account management with access controls',
        'Timestamped audit logs',
        'Archiving and restoration of product, inventory, employee and reference data',
      ],
      architectureNote:
        'TODO: explain why classic Repository, Service, Controller layers were chosen.',
      challenges: ['TODO: add challenges and what you learned.'],
    },
  },
];