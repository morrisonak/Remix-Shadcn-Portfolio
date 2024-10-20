import { Label } from "~/components/ui/label";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Contact Me
        </h2>
        <form className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="mt-1"
              />
            </div>
            <div className="mt-4">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark transition duration-200"
              >
                Send Message
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
