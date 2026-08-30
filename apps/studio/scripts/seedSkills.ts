import {getCliClient} from 'sanity/cli'

const client = getCliClient().withConfig({apiVersion: '2024-01-01'})

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      {name: 'React', icon: 'react', color: '#61DAFB'},
      {name: 'Next.js', icon: 'nextdotjs', color: '#F2F0EC'},
      {name: 'TypeScript', icon: 'typescript', color: '#3178C6'},
      {name: 'Tailwind CSS', icon: 'tailwindcss', color: '#38BDF8'},
      {name: 'TanStack Query', icon: 'reactquery', color: '#FF4154'},
      {name: 'Redux', icon: 'redux', color: '#764ABC'},
      {name: 'Zustand', icon: null, color: null},
      {name: 'Angular', icon: 'angular', color: '#DD0031'},
      {name: 'Vue.js', icon: 'vuedotjs', color: '#4FC08D'},
    ],
  },
  {
    category: 'Mobile',
    skills: [
      {name: 'React Native', icon: 'react', color: '#61DAFB'},
      {name: 'Expo', icon: 'expo', color: '#F2F0EC'},
      {name: 'EAS', icon: null, color: null},
      {name: 'Reanimated', icon: null, color: null},
      {name: 'App Store', icon: 'appstore', color: '#0D96F6'},
      {name: 'Play Store', icon: 'googleplay', color: '#34A853'},
      {name: 'Sentry', icon: 'sentry', color: '#362D59'},
    ],
  },
  {
    category: 'Backend',
    skills: [
      {name: 'Node.js', icon: 'nodedotjs', color: '#5FA04E'},
      {name: 'NestJS', icon: 'nestjs', color: '#E0234E'},
      {name: 'PostgreSQL', icon: 'postgresql', color: '#4169E1'},
      {name: 'Prisma', icon: 'prisma', color: '#2D3748'},
      {name: 'GraphQL', icon: 'graphql', color: '#E10098'},
    ],
  },
  {
    category: 'Cloud & Infra',
    skills: [
      {name: 'AWS Lambda', icon: null, color: null},
      {name: 'EventBridge', icon: null, color: null},
      {name: 'EC2', icon: null, color: null},
      {name: 'S3', icon: null, color: null},
      {name: 'RDS', icon: null, color: null},
      {name: 'CloudWatch', icon: null, color: null},
      {name: 'Vercel', icon: 'vercel', color: '#F2F0EC'},
      {name: 'Render', icon: 'render', color: '#46E3B7'},
      {name: 'Firebase', icon: 'firebase', color: '#FFCA28'},
      {name: 'Supabase', icon: 'supabase', color: '#3FCF8E'},
      {name: 'Docker', icon: 'docker', color: '#2496ED'},
    ],
  },
]

async function seedSkills() {
  console.log('Deleting existing skills...')

  const existingSkills = await client.fetch(`*[_type == "skill"]._id`)
  if (existingSkills.length > 0) {
    const transaction = client.transaction()
    for (const id of existingSkills) {
      transaction.delete(id)
    }
    await transaction.commit()
    console.log(`Deleted ${existingSkills.length} existing skill categories`)
  }

  console.log('Seeding skills...')

  for (let i = 0; i < skillCategories.length; i++) {
    const cat = skillCategories[i]
    const doc = {
      _type: 'skill',
      category: cat.category,
      skills: cat.skills.map((s) => ({
        _key: s.name.toLowerCase().replace(/\s+/g, '-'),
        name: s.name,
        icon: s.icon,
        color: s.color,
      })),
      orderRank: String(i).padStart(6, '0'),
    }

    const result = await client.create(doc)
    console.log(`Created skill category: ${cat.category} (${result._id})`)
  }

  console.log('Done seeding skills!')
}

seedSkills().catch(console.error)
