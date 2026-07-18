import './Skills.css';

const skillGroups = [
  {
    category: 'Backend',
    skills: ['Python', 'Flask', 'FastAPI', 'Pytest', 'Boto3', 'Go', 'Java', 'OpenAPI/Swagger', 'Microservices', 'Event-driven'],
  },
  {
    category: 'Cloud',
    skills: ['AWS', 'Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudWatch', 'X-Ray', 'Step Functions', 'CloudFormation', 'EC2', 'ECR', 'IoT'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'DynamoDB (NoSQL)'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript'],
  },
  {
    category: 'Tools',
    skills: ['Claude Code', 'Cursor AI', 'Git', 'GitHub', 'Docker', 'CI/CD', 'Code Reviews', 'Linux', 'Makefile', 'Bash', 'N8N', 'Agile/Scrum'],
  },
  {
    category: 'Languages',
    skills: ['English: B1', 'Spanish: Native'],
  },
];

const Skills = () => {
  return (
    <>
      <div className='App-title'>Skills</div>
      <div className='App-description'>
        <ul>
          {skillGroups.map((group) => (
            <li key={group.category}>
              <span className="item-info-c3">{group.category}</span>
              <ul className="skills-chip-list">
                {group.skills.map((skill) => (
                  <li key={skill} className="skills-chip">{skill}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Skills;
