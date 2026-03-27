// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Yeudiel123', // Tu usuario de GitHub
  },
  base: '/portafolio/', // Asumiendo que le pusiste "portafolio" al repositorio. Si le pusiste otro nombre, ponlo aquí entre las diagonales.
  projects: {
    github: {
      display: true,
      header: 'Proyectos en Github',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: true, // Oculta repositorios de los que hiciste fork
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Otros Proyectos',
      projects: [], // Lo dejamos vacío para que se oculte por ahora
    },
  },
  seo: { title: 'Portafolio de Yeudiel Angel Almada Sanchez', description: 'Portafolio de Ingeniería en Sistemas', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '(662) 373-7392',
    email: 'yeudiel_sanchez@outlook.com',
  },
  resume: {
    // Si subiste tu PDF de Awesome CV a tu github (ej. en un repo llamado CV-Ingenieria), podrías poner el link directo aquí. Por ahora lo dejamos vacío.
    fileUrl: '', 
  },
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Administración de Redes',
    'Configuración de Servidores',
    'Hardware de PC',
    'Soporte Técnico (Troubleshooting)',
    'Análisis Organizacional',
  ],
  experiences: [
    {
      company: 'AMIC',
      position: 'Desarrollador (Proyecto Independiente)',
      from: 'Oct. 2025',
      to: 'Presente',
      companyLink: '',
    },
    {
      company: 'Independiente',
      position: 'Soporte Técnico y Resolución de Hardware',
      from: '2025',
      to: 'Presente',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Diplomado en Desarrollo de Aplicaciones Web y Móviles',
      body: 'Capacítate para el empleo',
      year: 'En curso',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Universidad de Sonora (UNISON)',
      degree: 'Ingeniería en Sistemas',
      from: 'Ago. 2023',
      to: 'Presente',
    },
  ],
  publications: [], // Vacío para que se oculte
  blog: {
    source: 'dev',
    username: '', // Vacío para que se oculte
    limit: 2,
  },
  googleAnalytics: {
    id: '', 
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'corporate', // Le puse 'corporate' para que se vea muy profesional, como para ingeniería.

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'lofi',
      'business',
      'night',
    ],
  },
  footer: `Hecho por Yeudiel Angel Almada Sanchez con <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;
