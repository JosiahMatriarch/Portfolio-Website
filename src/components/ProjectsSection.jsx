import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: "/marvin-martian-03.png",
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 2,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: "/marvin-martian-03.png",
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 3,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: "/marvin-martian-03.png",
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 4,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: "/marvin-martian-03.png",
        tags: ["Unity", "C#"],
        link: "#",
        github: "#",
    },
    {
        id: 5,
        title: "Group 12",
        description:"You are part of the 12th group of test subjects in a hyperbolic time chamber, put there to study lovecraftian beings. Unfortunately, you got stuck in a time loop and must fight your way out!",
        image: "/marvin-martian-03.png",
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
                    <div key={key} className="group gradient-border rounded-2xl overflow-hidden card-hover md:row-span-1">
                        <div>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700" 
                            />
                            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={project.link} className="p-3 rounded-full glass border border-primary card-hover hover:bg-primary transition-all duration-300">
                                    <ArrowUpRight />
                                </a>
                                <a href={project.github} className="p-3 rounded-full glass border border-primary card-hover hover:bg-primary transition-all duration-300">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};