import type { ProfileConfig, NavbarConfig, ProjectConfig } from "./types/config";

export const profileConfig: ProfileConfig = {
	links: [
		{
			name: "Github",
			url: "https://github.com/loykasi",
			icon: "fa6-brands:github",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/nghiahoang06/",
			icon: "fa6-brands:linkedin",
		},
		{
			name: "Itch.io",
			url: "https://loykas.itch.io/",
			icon: "fa6-brands:itch-io",
		},
		{
			name: "Mail",
			url: "mailto:hoangchungnghia06@gmail.com",
			icon: "fa6-regular:envelope",
		},
	],
	skills: [
		{
			name: "Frontend",
			technologies: ["HTML", "CSS"],
		},
		{
			name: "Programming Languages",
			technologies: ["JavaScrip", "C#", "Python"],
		},
	],
};

export const navbarConfig: NavbarConfig = {
	links: [
		{
			name: "About",
			url: "#about",
		},
		{
			name: "Projects",
			url: "#projects",
		},
	],
};

export const projectConfig: ProjectConfig = {
	groups: [
		{
			year: 2025,
			projects: [
				{
					name: "Lunnidoo Blog Website",
					techStack: ["Nuxt", "Express"],
					links: [
						{
							name: "Website",
							url: "#"
						},
						{
							name: "Repository",
							url: "#"
						},
					],
					description: "A website where I post blog article and upload my Algodoo scenes.",
					imgs: [
						"/src/assets/images/Capture.png",
						"/src/assets/images/Capture.png"
					]
				},
				{
					name: "Lunnidoo Blog Website",
					techStack: ["Nuxt", "Express"],
					links: [
						{
							name: "Website",
							url: "#"
						},
						{
							name: "Repository",
							url: "#"
						},
					],
					description: "A website where I post blog article and upload my Algodoo scenes.",
					imgs: [
						"/src/assets/images/Capture.png"
					]
				}
			]
		}
	]
}