import { cn } from '../lib/utils';

const experiences = [
    {
        period: "2025",
        role: "Art Director / Systems Programmer",
        company: "WiCS Hackathon 2024-2025",
        description: "TaxSim",
        technologies: ["Unity", "C#", "Aseprite"],
        current: true,
    },
    {
        period: "2025",
        role: "Art Director / Systems Programmer",
        company: "WiCS Hackathon 2024-2025",
        description: "TaxSim",
        technologies: ["Unity", "C#", "Aseprite"],
        current: false,
    },
    {
        period: "2025",
        role: "Art Director / Systems Programmer",
        company: "WiCS Hackathon 2024-2025",
        description: "TaxSim",
        technologies: ["Unity", "C#", "Aseprite"],
        current: false,
    },
    {
        period: "2025",
        role: "Art Director / Systems Programmer",
        company: "WiCS Hackathon 2024-2025",
        description: "TaxSim",
        technologies: ["Unity", "C#", "Aseprite"],
        current: false,
    },
    {
        period: "2025",
        role: "Art Director / Systems Programmer",
        company: "WiCS Hackathon 2024-2025",
        description: "TaxSim",
        technologies: ["Unity", "C#", "Aseprite"],
        current: false,
    },
    {
        period: "2025",
        role: "Art Director / Systems Programmer",
        company: "WiCS Hackathon 2024-2025",
        description: "TaxSim",
        technologies: ["Unity", "C#", "Aseprite"],
        current: false,
    },
]

export const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="py-24 relative overflow-hidden"
        >
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    My <span className="text-primary"> Journey</span>
                </h2>
                <p className='mb-12 text-primary-foreground/60'>
                    A timeline of my experience through projects and the professional world.
                </p>
            </div>
            {/* Timeline */}
            <div className="container mx-auto px-8 relative">
                <div 
                    className={cn(
                        "timeline-glow absolute left-10 sm:left-0 md:left-1/2 top-0 bottom-0 w-[2px]",
                        "bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2",
                        "shadow-[0_0_10px_hsl(var(--shadow))]"
                    )} 
                />
                <div className='space-y-12'>
                    {experiences.map((exp, key) => (
                        <div key={key} className='relative grid md:grid-cols-2 gap-8 text-left'>
                            
                            <div 
                                className={cn(
                                    'absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full',
                                    'sm:-translate-x-1/2 ring-4 ring-background z-10'
                                )}
                            >
                                {exp.current && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75' />}
                            </div>

                            <div 
                                className={`pl-8 pr-8 md:pl-0 ${
                                    key % 2 === 0 
                                        ? "md:pr-16 md:text-right" 
                                        : "md:col-start-2 md:pl-16"
                                }`}
                            >
                                <div 
                                    className={`p-6 rounded-2xl border border-primary card-hover transition-all duration-300 ${
                                    key % 2 === 0 
                                        ? "bg-gradient-to-r from-border to-background" 
                                        : "gradient-border"
                                    }`}
                                >
                                    <span className='text-sm text-primary font-medium'>{exp.period}</span>
                                    <h3 className='text-xl font-semibold mt-2'>{exp.role}</h3>
                                    <p>{exp.company}</p>
                                    <p className='text-sm mt-4'>{exp.description}</p>
                                    <div 
                                        className={`flex flex-wrap gap-2 mt-4 ${
                                            key % 2 == 0
                                                ? "md:justify-end"
                                                : ""
                                        }`}
                                    >
                                        {exp.technologies.map((tech, index) => (
                                            <span 
                                                key={index}
                                                className='px-3 py-1 border border-border bg-background text-xs text-primary rounded-full card-hover'
                                            >
                                                {tech}
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
    )
}