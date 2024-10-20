import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { siteData } from "~/data/siteData"; // Adjust the path if necessary

// Extract the skillsData from siteData
const { skillsData } = siteData;

function SkillCard({ skill }: { skill: typeof skillsData[number] }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{skill.name}</CardTitle>
        <CardDescription>{skill.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-2">Proficiency:</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${skill.proficiency}%` }}
          ></div>
        </div>
        <div className="mb-2">Tools:</div>
        <div className="flex flex-wrap gap-2">
          {skill.tools.map((tool, toolIndex) => (
            <Badge key={toolIndex} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
