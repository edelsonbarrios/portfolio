/* Who the site is about: name, title, intro and contact links.
   Only the city is shown (no street address, no phone number)
   because the site is public. */
export interface Profile {
  name: string;
  title: string;
  location: string;
  intro: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;       // file inside public/
  resumeFileName: string;
  description: string;     // short text for search results and link previews  // name the browser uses when downloading
}

export const profile: Profile = {
  name: 'Edelson Q. Barrios',
  title: 'Software Engineer',
  location: 'Quezon City, Philippines',
  // TODO: written only from facts in the plan. Confirm or rewrite the wording.
  intro:
    'Software engineer with a Bachelor of Science in Information Technology from STI College Fairview. ' +
    'I build web applications with Angular on the front end and work in both C# / ASP.NET Core and Java / Spring Boot on the back end.',
  email: 'barrios.edelson.quiling@gmail.com',
  linkedin: 'https://www.linkedin.com/in/edelson-q-barrios-69943b385/',
  github: 'https://github.com/edelsonbarrios',
  resumeUrl: '/resume.pdf',
  resumeFileName: 'Edelson-Barrios-Resume.pdf',
    description:
    'Portfolio of Edelson Q. Barrios, a software engineer who builds web applications with Angular, C# / ASP.NET Core and Java / Spring Boot. See projects and contact details.',
};