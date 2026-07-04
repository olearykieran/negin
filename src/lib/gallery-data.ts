export interface GalleryPlate {
  src: string;
  position?: string;
}

export interface GalleryCategory {
  name: string;
  slug: string;
  image: string;
  position: string;
  photoPosition?: string;
  /** Landing-page composition: [left, center, right] */
  plates?: GalleryPlate[];
  photos: string[];
}

export const categories: GalleryCategory[] = [
  {
    name: "Headshots",
    slug: "headshots",
    image: "/images/newest/headshot-main.JPG",
    position: "center 34%",
    photoPosition: "center 15%",
    photos: [
      "/images/newest/headshot-main.JPG",
      "/images/newest/headshot.JPG",
      "/images/newest/headshot3.JPG",
    ],
  },
  {
    name: "Production Shots",
    slug: "production-shots",
    image: "/images/newest/production.JPG",
    position: "center center",
    photos: [
      "/images/newest/production.JPG",
      "/images/production/1.JPG",
      "/images/production/2.JPEG",
      "/images/production/3.JPG",
      "/images/production/4.JPG",
      "/images/production/5.JPG",
      "/images/production/6.JPEG",
      "/images/production/7.jpeg",
      "/images/production/8.jpeg",
      "/images/production/9.jpeg",
      "/images/production/10.jpeg",
      "/images/production/11.jpeg",
      "/images/production/12.jpeg",
      "/images/production/13.jpeg",
      "/images/production/14.jpeg",
      "/images/production/15.JPEG",
      "/images/production/16.JPEG",
      "/images/production/17.JPEG",
    ],
  },
  {
    name: "Portfolio",
    slug: "portfolio",
    image: "/images/portfolio/13.JPG",
    position: "center 22%",
    plates: [
      { src: "/images/portfolio/first.jpeg", position: "center 30%" },
      { src: "/images/portfolio/13.JPG", position: "center 20%" },
      { src: "/images/portfolio/10.2.jpeg", position: "center 40%" },
    ],
    photos: [
      // B&W slip dress studio
      "/images/portfolio/13.JPG",
      "/images/portfolio/1.1.JPG",
      "/images/portfolio/14.JPG",
      // Film noir car
      "/images/portfolio/11.jpeg",
      // Yellow dress NYC
      "/images/portfolio/first.jpeg",
      "/images/portfolio/fourth.jpeg",
      "/images/portfolio/second.jpeg",
      "/images/portfolio/third.jpeg",
      "/images/portfolio/12.jpeg",
      // B&W slip dress studio (continued)
      "/images/portfolio/17.JPG",
      "/images/portfolio/18.JPG",
      "/images/portfolio/19.JPG",
      "/images/portfolio/27.JPG",
      // Red scarf urban
      "/images/portfolio/10.1.jpeg",
      "/images/portfolio/10.2.jpeg",
      "/images/portfolio/10.jpeg",
      // B&W bed
      "/images/portfolio/16.jpeg",
      "/images/portfolio/20.jpeg",
      // White studio / tulle
      "/images/portfolio/22.JPG",
      "/images/portfolio/23.JPG",
      "/images/portfolio/24.JPG",
      "/images/portfolio/25.JPG",
      // Green hoodie duo
      "/images/newest/portfolio-duo.JPG",
      // Dinkwink activewear
      "/images/portfolio/4.jpeg",
      "/images/portfolio/5.jpeg",
      // eXeX tech
      "/images/portfolio/2.jpeg",
      "/images/portfolio/3.jpeg",
      // Standalones
      "/images/portfolio/28.jpeg",
      "/images/portfolio/15.jpeg",
      // Nature / park
      "/images/portfolio/6.JPG",
      "/images/portfolio/26.jpeg",
    ],
  },
];
