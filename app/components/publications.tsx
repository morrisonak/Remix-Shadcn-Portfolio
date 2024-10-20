import { siteData } from "~/data/siteData"; // Adjust the import path if necessary
import { Tabs, TabsList, TabsTrigger, TabsContent } from "~/components/ui/tabs";

export function Publications() {
  // Extract publications from siteData
  const { publications } = siteData;

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">
          Publications and Presentations
        </h2>
        <Tabs defaultValue="journal">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger
              value="journal"
              className="flex-1 text-center p-4 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none"
            >
              Journal Articles
            </TabsTrigger>
            <TabsTrigger
              value="conference"
              className="flex-1 text-center p-4 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none"
            >
              Conference Papers
            </TabsTrigger>
            <TabsTrigger
              value="presentations"
              className="flex-1 text-center p-4 transition duration-300 ease-in-out hover:bg-gray-200 focus:outline-none"
            >
              Presentations
            </TabsTrigger>
          </TabsList>

          {/* Journal Articles Tab */}
          <TabsContent value="journal">
            <ul className="space-y-4">
              {publications
                .filter((pub) => pub.type === "journal")
                .map((pub) => (
                  <li key={pub.title}>
                    <h3 className="font-semibold text-lg">{pub.title}</h3>
                    <p className="text-sm text-gray-600">
                      {pub.source}, {pub.year}
                    </p>
                  </li>
                ))}
            </ul>
          </TabsContent>

          {/* Conference Papers Tab */}
          <TabsContent value="conference">
            <ul className="space-y-4">
              {publications
                .filter((pub) => pub.type === "conference")
                .map((pub) => (
                  <li key={pub.title}>
                    <h3 className="font-semibold text-lg">{pub.title}</h3>
                    <p className="text-sm text-gray-600">
                      {pub.source}, {pub.year}
                    </p>
                  </li>
                ))}
            </ul>
          </TabsContent>

          {/* Presentations Tab */}
          <TabsContent value="presentations">
            <ul className="space-y-4">
              {publications
                .filter((pub) => pub.type === "presentation")
                .map((pub) => (
                  <li key={pub.title}>
                    <h3 className="font-semibold text-lg">{pub.title}</h3>
                    <p className="text-sm text-gray-600">
                      {pub.source}, {pub.year}
                    </p>
                  </li>
                ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
