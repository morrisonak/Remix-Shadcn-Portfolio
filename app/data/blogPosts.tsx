export const blogPosts = [
    {
        id: "1",
        title: "Understanding Railroad Signaling Systems",
        slug: "understanding-railroad-signaling-systems",
        summary: "An overview of traditional and modern railroad signaling systems.",
        content: `
        Railroad signaling systems are crucial for ensuring the safety and efficiency of train operations.
        In this article, we explore the evolution of signaling technologies...
      `,
        date: "2024-09-15",
        image: "/rail.jpg", // Optional image
        url: "https://alphacast.dev",
        urlTitle: "Read more",
    },
    {
        id: "2",
        title: "Advanced Analytics in Rail Operations",
        slug: "advanced-analytics-in-rail-operations",
        summary: "Leveraging analytics for improved rail network performance.",
        content: `
        With the advent of advanced analytics, rail operations have become more efficient.
        This article delves into how data analytics can enhance safety protocols...
      `,
        date: "2024-09-10",
        // No image for this post
        image: null,
    },
    {
        id: "3",
        title: "Phase Time: Leading Innovation in Science, Technology, and Engineering",
        slug: "phase-time-innovation",
        summary: "An overview of Phase Time's innovative approach to science, technology, and engineering consulting.",
        content: (
            <>
              <h2 className="text-2xl font-bold mb-4">Phase Time: Leading Innovation in Science, Technology, and Engineering</h2>
              <p className="mb-4">
                Phase Time is a consulting firm that specializes in providing cutting-edge solutions in science, technology, and engineering.
                The company focuses on delivering value through innovation, offering services across technology integration, engineering design, R&D, data analytics, and project management.
              </p>
              <h3 className="text-xl font-semibold mb-2">Mission and Philosophy</h3>
              <p className="mb-4">
                At the heart of their mission is "Innovation by Design," a philosophy that emphasizes creative problem-solving, data-driven insights, and proactive adaptation to emerging trends. 
                Phase Time assists businesses in navigating complex technological landscapes, ensuring they stay ahead of the curve.
              </p>
              <h3 className="text-xl font-semibold mb-2">Impact and Value</h3>
              <p className="mb-4">
                They have a track record of successful collaborations with diverse industries, helping optimize processes, improve product quality, and accelerate time-to-market for new technologies.
                Their tailored strategies align with clients' strategic goals, driving operational efficiencies and cost savings.
              </p>
              <h3 className="text-xl font-semibold mb-2">Strategic Consulting</h3>
              <p className="mb-4">
                Phase Time offers strategic consulting to guide businesses through transformative change. From implementing new technologies to developing sustainable practices,
                their holistic approach ensures clients meet and exceed their objectives, positioning Phase Time as a trusted partner in a rapidly evolving market.
              </p>
              <div className="mt-8">
                <a href="https://www.phasetimeinc.com/" className="text-primary hover:underline">
                  Visit Phase Time
                </a>
              </div>
            </>
          ),

        date: "2024-09-15",
        image: "/phaseTimeBlogImage.webp", // Update with the correct image path if available
       // url: "https://www.phasetimeinc.com/",
        //urlTitle: "Visit Phase Time",
      },
      {
        id: "4",
        title: "Sovereign Running: Personalized Running Coaching for All Levels",
        slug: "sovereign-running-coaching",
        summary: "Sovereign Running offers personalized coaching to help runners achieve their goals, from beginners to marathoners.",
        content: `
          Sovereign Running provides tailored coaching programs designed to unlock your full potential as a runner. With personalized training plans, real-time performance tracking compatible with Garmin and Strava, and expert guidance from experienced coaches, runners can break through barriers and achieve new personal records. The platform emphasizes comprehensive support, making running fun and achievable.
        `,
        date: "2024-09-15",
        image: "/runnerBlogImage.webp", // Update with the correct image path if available
        url: "https://sovereignrunning.com/",
        urlTitle: "Visit Sovereign Running",
      },
      
      
    // Add more blog posts as needed
];
