export const constants = {
  firstLastname: "J. William Zenith",
  professionalTitle: "P.E.",
  role: "Senior Civil Engineer specializing in structural design and sustainable infrastructure",
  companyName: "Phase Time Inc",
  personalEmail: "mailto:morrisonak@yahoo.com",
  personalPhone: "tel:+1907-262-9500",
  linkedin: "https://www.linkedin.com/in/justin-morrison-533b4155/",
};

export interface Project {
  title: string;
  description: string;
  technologies: string;
  imgsrc: string;
}

export interface Job {
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Publication {
  title: string;
  source: string;
  year: number;
  type: "journal" | "conference" | "presentation";
}

export interface Skill {
  name: string;
  description: string;
  proficiency: number;
  tools: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export const siteData = {
  projects: [
    {
      title: "City Center Bridge",
      description: "Designed a sustainable pedestrian bridge.",
      technologies: "Structural analysis, Green materials",
      imgsrc: "/citybridge.jpg",
    },
    {
      title: "Eco-Friendly Office Building",
      description: "Led structural design for a 50-story building.",
      technologies: "Revit, Wind load analysis",
      imgsrc: "/officebuilding.jpg",
    },
    {
      title: "Flood Control System",
      description: "Engineered a city-wide flood prevention system",
      technologies: "Hydraulic modeling, GIS",
      imgsrc: "/flood.jpg",
    },
    {
      title: "Highway Expansion",
      description: "Managed a 20-mile highway expansion project",
      technologies: "Traffic flow analysis, AutoCAD Civil 3D",
      imgsrc: "/highway.jpg",
    },
  ] as Project[],

  employmentHistory: [
    {
      company: "Sustainable Structures Inc.",
      position: "Senior Civil Engineer",
      period: "2018 - Present",
      description:
        "Led multiple high-profile projects, focusing on sustainable design and innovative engineering solutions. Managed cross-functional teams and ensured project delivery within budget and timeline constraints.",

      skills: ["Sustainable Design", "Project Management", "Team Leadership"],
    },
    {
      company: "Urban Development Corp",
      position: "Project Manager",
      period: "2014 - 2018",
      description:
        "Oversaw project lifecycles from inception to completion, ensuring compliance with regulations and industry standards. Fostered collaboration among diverse teams to achieve project goals.",

      skills: ["Regulatory Compliance", "Collaboration", "Budget Management"],
    },
    {
      company: "City Infrastructure Department",
      position: "Civil Engineer",
      period: "2010 - 2014",
      description:
        "Conducted structural analysis and design, providing technical expertise for urban infrastructure projects. Collaborated with stakeholders to develop sustainable engineering solutions.",

      skills: [
        "Structural Analysis",
        "Technical Expertise",
        "Stakeholder Collaboration",
      ],
    },
    {
      company: "Texas Department of Transportation",
      position: "Transportaion Planner",
      period: "2009 - 2010",
      description:
        "Assisted in various civil engineering projects, gaining hands-on experience and knowledge in engineering principles.",

      skills: ["Engineering Principles", "Teamwork", "Problem Solving"],
    },
  ] as Job[],

  publications: [
    {
      title: "Innovative Approaches to Sustainable Urban Infrastructure",
      source: "Journal of Sustainable Engineering",
      year: 2023,
      type: "journal",
    },
    {
      title: "Seismic Performance of Green Building Materials",
      source: "Structural Engineering International",
      year: 2022,
      type: "journal",
    },
    {
      title: "Optimizing Traffic Flow in Smart Cities",
      source: "International Conference on Urban Planning",
      year: 2023,
      type: "conference",
    },
    {
      title: "Cost-Effective Methods for Bridge Maintenance",
      source: "Annual Bridge Engineering Symposium",
      year: 2022,
      type: "conference",
    },
    {
      title: "The Future of Sustainable Infrastructure",
      source: "TEDx Talk",
      year: 2023,
      type: "presentation",
    },
    {
      title: "Integrating Green Technologies in Civil Engineering",
      source: "Engineering Innovation Forum",
      year: 2022,
      type: "presentation",
    },
  ] as Publication[],

  skillsData: [
    {
      name: "Structural Analysis",
      description:
        "Proficient in analyzing complex structures using FEM software.",
      proficiency: 100,
      tools: ["SAP2000", "STAAD.Pro", "RISA"],
    },
    {
      name: "AutoCAD",
      description:
        "Expert in 2D and 3D drafting for civil engineering projects.",
      proficiency: 95,
      tools: ["AutoCAD Civil 3D", "AutoCAD Map 3D"],
    },
    {
      name: "Revit",
      description:
        "Skilled in BIM modeling for structural and architectural elements.",
      proficiency: 85,
      tools: ["Revit Structure", "Dynamo"],
    },
    {
      name: "Project Management",
      description:
        "Experienced in managing large-scale infrastructure projects.",
      proficiency: 80,
      tools: ["MS Project", "Primavera P6"],
    },
    {
      name: "Sustainable Design",
      description:
        "Knowledgeable in green building practices and LEED certification.",
      proficiency: 75,
      tools: ["LEED v4", "Energy modeling software"],
    },
    {
      name: "Geotechnical Engineering",
      description: "Competent in soil analysis and foundation design.",
      proficiency: 70,
      tools: ["gINT", "Slope/W"],
    },
  ] as Skill[],
  education: [
    {
      title: "Master of Science in Civil Engineering",
      institution: "Stanford University",
      duration: "2008-2010",
      description:
        "Specialized in Structural Engineering and Sustainable Design",
    },
    {
      title: "Bachelor of Science in Civil Engineering",
      institution: "University of California, Berkeley",
      duration: "2004-2008",
      description: "Graduated with Honors, GPA 3.8/4.0",
    },
    {
      title: "Professional Engineer (P.E.) License",
      institution: "Texas Board for Professional Engineers",
      duration: "2012",
    },
    {
      title: "LEED Accredited Professional",
      institution: "U.S. Green Building Council",
      duration: "2014",
    },
  ] as EducationItem[],

  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Project Director, Urban Development Corp",
      text: "John's innovative approach to sustainable design has been instrumental in the success of our eco-friendly skyscraper project. His technical expertise and leadership skills are truly exceptional.",
    },
    {
      name: "Michael Chen",
      role: "City Engineer",
      text: "Working with John on the city's flood control system was a pleasure. His attention to detail and ability to solve complex problems made a significant impact on the project's success.",
    },
    {
      name: "Emily Rodriguez",
      role: "CEO, Green Build Solutions",
      text: "John's contributions to our sustainable infrastructure projects have been invaluable. His deep understanding of both engineering principles and environmental concerns sets him apart in the field.",
    },
  ] as Testimonial[],
};
