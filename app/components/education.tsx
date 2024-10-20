import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { siteData } from "~/data/siteData";

export function Education() {
  const { education } = siteData; // Destructure the education data from siteData

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Education and Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>
                  {item.institution}, {item.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {item.description && <p>{item.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
