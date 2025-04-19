export type ProfileConfig = {
    links: {
        name: string,
        url: string,
        icon: string
    }[];
    skills: {
        name: string,
        technologies: string[]
    }[]
};

export type NavbarConfig = {
    links: {
        name: string,
        url: string,
    }[];
};

export type ProjectLink = {
    name: string,
    url: string
}

export type ProjectConfig = {
    projects: {
        name: string,
        techStack: string[],
        links: ProjectLink[],
        description: string,
    }[];
};

