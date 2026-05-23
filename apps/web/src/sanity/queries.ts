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
    "url": coalesce(url, null),
    "href": coalesce(href, null),
    "images": coalesce(images[]{
      "src": asset,
      "alt": coalesce(alt, null)
    }, [])
  }
`;

export const aboutQuery = groq`
  *[_type == "about"][0] {
    "id": "about",
    n,
    title,
    category,
    year,
    body,
    body2,
    stack,
    "tooling": coalesce(tooling, [])
  }
`;

export const contactQuery = groq`
  *[_type == "contact"][0] {
    email,
    "phone": coalesce(phone, null),
    "github": coalesce(github, null),
    "githubLabel": coalesce(githubLabel, null),
    "githubHandle": coalesce(githubHandle, null),
    "linkedin": coalesce(linkedin, null),
    "linkedinLabel": coalesce(linkedinLabel, null),
    "linkedinHandle": coalesce(linkedinHandle, null),
    "location": coalesce(location, null),
    "availability": coalesce(availability, null)
  }
`;
