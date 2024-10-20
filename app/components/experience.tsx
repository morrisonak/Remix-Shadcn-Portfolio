import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { motion } from "framer-motion";
import { siteData } from "~/data/siteData";



export function Experience() {
  return (
    <section id="experience" className="bg-white py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Professional Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteData.employmentHistory.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Job card */}
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  {job.position}
                </CardTitle>
                <CardDescription className="text-lg font-semibold">
                  {job.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 font-medium">
                  {job.period}
                </p>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
}
