import { Briefcase, Code2, User } from "lucide-react"


export const AboutSection = () => {
    return (
        <section id="about" className="py-24 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Up-and-Coming Game Developer just&nbsp;
                            <a 
                                href="https://josiahmatriarch.itch.io/" 
                                className="text-primary-foreground/80 hover:text-primary transition-colors duration-300"
                            >itching </a>
                            to learn
                        </h3>

                        <p className="text-muted-foreground">
                            Experienced in both Unity and Unreal game engines, I've been obsessed with art, stories, and programming for most 
                            of my life. NPC AI, Systems programming, and Environmental design have become my bread and butter over the last 3 years,
                            channeling my creative passions to create fun, atmospheric, and optimized experiences.
                        </p>

                        <p className="text-muted-foreground">
                            I am currently a Computer Science major at Louisiana State University taking every single chance I get to learn as 
                            much as I can, participating in competitions and developing my own independent projects. I am currently learning
                            about the beautiful world of full stack web development: everything from rendering libraries like Three.js to heavy-duty
                            frameworks like ASP.NET Core.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href="" 
                                className="secondary-button"
                                >
                                {/* DONT FORGET TO ADD YOUR REVISED RESUME */}
                                Let's Work Together!
                            </a>
                        </div>

                    </div>
                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <div className="gradient-border border border-primary p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full border border-background bg-primary">
                                        <Code2 className="h-6 w-6 text-background"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Game Development</h4>
                                        <p>
                                            Experienced in both Unity and Unreal game engines, I've been obsessed with art, stories, and programming for most 
                                            of my life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border border border-primary p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full border border-background bg-primary">
                                        <User className="h-6 w-6 text-background"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Game Development</h4>
                                        <p>
                                            Experienced in both Unity and Unreal game engines, I've been obsessed with art, stories, and programming for most 
                                            of my life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="gradient-border border border-primary p-6 card-hover">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-full border border-background bg-primary">
                                        <Briefcase className="h-6 w-6 text-background"/>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg"> Project Management</h4>
                                        <p>
                                            Leading and working with smaller teams, managing goals and deadlines, and directing production using agile methodologies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}