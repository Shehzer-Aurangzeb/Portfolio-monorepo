import { groq } from 'next-sanity';

export const projectsQuery = groq`
  *[_type == "project"] | order(orderRank asc) {
    "id": slug.current,
    n,
    title,
    category,
    year,
    role,
    blurb,
    body,
    stack,
    "imageLayout": coalesce(imageLayout, "carousel"),
    "url": coalesce(url, null),
    "href": coalesce(href, null),
    "images": coalesce(images[]{
      "src": asset,
      "alt": coalesce(alt, null),
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height,
      "lqip": asset->metadata.lqip
    }, [])
  }
`;

export const skillsQuery = groq`
  *[_type == "skill"] | order(orderRank asc) {
    "id": _id,
    category,
    "skills": coalesce(skills[]{
      name,
      "icon": coalesce(icon, null),
      "color": coalesce(color, null)
    }, [])
  }
`;
