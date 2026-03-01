import { useState } from "react";
import { cn } from '../lib/utils';

const skills = [
    {name: "C#", level: 90, category: "base"},
    {name: "C++", level: 70, category: "base"},
    {name: "Java", level: 95, category: "base"},
    {name: "C", level: 55, category: "base"},

    {name: "HTML/CSS", level: 40, category: "webdev"},
    {name: "React", level: 40, category: "webdev"},
    {name: "ASP.NET", level: 50, category: "webdev"},
    {name: "Tailwind CSS", level: 40, category: "webdev"},
    
    {name: "JavaScript", level: 75, category: "scripts"},
    {name: "Python", level: 65, category: "scripts"},

    {name: "Unity", level: 85, category: "tools"},
    {name: "Unreal", level: 70, category: "tools"},
    {name: "Figma", level: 50, category: "tools"},
    {name: "Aseprite", level: 80, category: "tools"},
    {name: "VS Code", level: 85, category: "tools"},
    {name: "GitHub", level: 90, category: "tools"},
];

const categories = ["all", "base", "webdev", "scripts", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory == "all" || skill.category == activeCategory
    );

    return (
        <section 
            id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)} 
                            className={cn(
                                "px-5 py-2 rounded-full hover:text-primary hover:underline transition-colors duration-300 capitalize",
                                activeCategory == category ? "bg-primary text-background hover:text-foreground" : "text-foreground/70 hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div 
                            key={key} 
                            className="border border-primary p-6 rounded-lg shadows-xs card-hover hover:text-primary"
                        >
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            {/* Skill Bar */}
                            <div className="w-full h-3 rounded-full overflow-hidden">
                                <div 
                                    className="gradient-border-1 border border-border h-3 rounded-full origin-left animate-[grow_1.5s_ease-out]" 
                                    style={{width: skill.level + "%"}}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};