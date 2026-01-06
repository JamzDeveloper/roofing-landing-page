interface Project {
  image: string
  title: string
  description: string
}

interface ServiceProjectsProps {
  title: string
  projects: Project[]
}

export function ServiceProjects({ title, projects }: ServiceProjectsProps) {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-16 text-center">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
