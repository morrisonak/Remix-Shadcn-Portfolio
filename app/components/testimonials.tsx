import { useState, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { motion } from "framer-motion";
import { siteData } from "~/data/siteData"; // Adjust the import path as necessary

export function Testimonials() {
  const { testimonials } = siteData; // Destructure the testimonials data from siteData

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsLength);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsLength) % testimonialsLength
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="relative max-w-3xl mx-auto">
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle>{testimonials[currentTestimonial].name}</CardTitle>
                <CardDescription>
                  {testimonials[currentTestimonial].role}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <motion.div
                  key={currentTestimonial}
                  initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <p className="text-gray-600">
                    &quot;{testimonials[currentTestimonial].text}&quot;
                  </p>
                </motion.div>

                <div className="flex justify-between mt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
