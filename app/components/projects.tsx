import { ExternalLink } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~/components/ui/card";
import { siteData } from "~/data/siteData";




export function Projects() {
    return (
      <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={project.imgsrc}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-sm text-gray-600 mb-4">
                  Technologies used: {project.technologies}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
    )
}