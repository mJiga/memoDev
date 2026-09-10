export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Beyond" },
  { id: "contact", label: "Contact" },
];

export const sectionIds = navLinks.map((link) => link.id);
