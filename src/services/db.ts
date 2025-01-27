// src/services/db.ts

/**
 * In a real-world scenario, you'd import a library like Prisma, Mongoose,
 * or fetch from an external API here. For now, we return mock data.
 */

export interface Photo {
  id: string;
  src: string;
  alt: string;
}

/**
 * Example function that fetches photos.
 * This might query a database or external service in production.
 */
export async function getPhotos(): Promise<Photo[]> {
  return [
    {
      id: "photo1",
      src: "/images/neg2.jpg",
      alt: "Glamorous headshot of the actress",
    },
    {
      id: "photo2",
      src: "/images/neg3.jpg",
      alt: "Runway model pose",
    },
    // Add more as needed
  ];
}
