
export enum ProjectType {
    Projects = "projects",
    Certifications = "certifications",
    Experiences = "experiences"
}

export interface InitialState {
    projectTypes: string[];
    entries: (ProjectState | ExperienceState)[];
}

export interface ProjectState {
    id: string;
    name: string;
    brief: string;
    tags: string[];
    type: string;
    access: string | null;
    source: string | null;
}

export interface ExperienceState {
    id: string;
    name: string;
    brief: string;
    tags: string[];
    type: string; // it can only be an ProjectType.Experiences
    started: string;
    ended: string;
}