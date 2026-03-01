import { ArrowDown, BadgeCent } from "lucide-react"


export const HeroSection = () => {
    return (
        <section 
            id="home" 
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="py-20 container max-w-wxl mx-auto text-left z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Mikey</span>
                        <span className="opacity-0 animate-fade-in-delay-2"> Brescher.</span>
                    </h1>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="ml-2 opacity-0 text-primary-foreground animate-fade-in-delay-3"> I make games.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-primary-foreground max-2-2xl mx-auto opacity-0 animate-fade-partial-delay-4">
                        An aspiring AI and Systems Engineer with experience in both 2D and 3D development.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Take a Look at My Work!
                        </a>

                        <a href="" className="secondary-button">
                            {/* THIS IS FOR A GAME LATER */}
                            <div className="flex">
                                COMING SOON!&nbsp;<BadgeCent />
                            </div>
                            
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">More of me!!</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
        </section>
    )
}