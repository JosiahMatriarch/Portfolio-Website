import { ArrowUpRight, Github } from "lucide-react";
import marvin from "/marvin-martian-03.png"

const projects = [
    {
        id: 1,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: marvin,
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: marvin,
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: marvin,
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 4,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: marvin,
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 5,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: marvin,
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
]

export const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="py-24 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mx-auto max-w-3xl mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <span className="text-primary"> Projects</span>
                    </h2>
                    <p className='mb-12 text-primary-foreground/60'>
                        A brief look at some of my best work!
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group border border-primary gradient-border rounded-2xl overflow-hidden card-hover md:row-span-1">
                            <div>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700" 
                                />
                                
                                

                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <a 
                                        href={project.link} 
                                        className="p-3 rounded-full glass border border-primary card-hover hover:bg-primary transition-all duration-300 pointer-events-auto"
                                    >
                                        <ArrowUpRight />
                                    </a>
                                    <a 
                                        href={project.github} 
                                        className="p-3 rounded-full glass border border-primary card-hover hover:bg-primary transition-all duration-300 pointer-events-auto"
                                    >
                                        <Github />
                                    </a>
                                </div>

                                <div className="p-6 space-y-4 text-left">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight 
                                            className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                        />
                                    </div> 
                                    <p className="text-sm">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span 
                                                key={index}
                                                className="px-4 py-1.5 border border-border bg-background text-xs text-primary rounded-full transition-transform duration-300 card-hover"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};