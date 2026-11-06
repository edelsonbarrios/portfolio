/* Skill groups shown as rows in the Skills section.
   Content comes from the resume (plan section 4.3). */
export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Backend',
    items: [
      'C#',
      'ASP.NET Core',
      'EF Core',
      'Java',
      'Spring Boot',
      'Hibernate / JPA',
      'RESTful APIs',
      'CQRS',
      'Mediator',
    ],
  },
  {
    label: 'Frontend',
    items: ['Angular', 'TypeScript', 'HTML', 'CSS / SCSS'],
  },
  {
    label: 'Database',
    items: ['PostgreSQL'],
  },
  {
    label: 'Tools and deployment',
    items: [
      'Git / GitHub',
      'Postman',
      'Swagger',
      'API testing',
      'Google OAuth',
      'JWT',
      'Vercel',
      'Render',
      'Neon',
    ],
  },
];