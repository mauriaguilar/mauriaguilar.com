import './Experience.css';

const experiences = [
    {
        company: "Wazuh, Inc.",
        role: "Software Engineer",
        date: "Apr 2023 – Mar 2026",
        description: <>
            <ul className="exp-bullets">
                <li>Built and maintained 13 REST APIs (Python/Flask, OpenAPI) + 10 Jobs (AWS Lambda) + ReactJs frontend for a cybersecurity SaaS with 500+ users covering subscriptions, contracts, billing and Stripe integration.</li>
                <li>Migrated environments API from Flask to FastAPI towards an event-driven design pattern. Designed and built a job scheduler service in Python for automated and event-based task management.</li>
                <li>Implemented observability and monitoring with AWS CloudWatch, X-Ray and Lambda Insights, with automated Slack alerts and daily metrics review.</li>
                <li>Developed a security report generation workflow with LLM and prompt engineering (GenAI).</li>
                <li>Designed and implemented a backoffice system with Appsmith and N8N for the sales team, including discrepancy detection between environments and contracts.</li>
            </ul>
        </>,
        media: <>
            <img src="wazuh.png" alt="Wazuh Screenshot" loading="lazy" className='mb-2' />
            <img src="wazuh-web.png" alt="Wazuh Web Screenshot" loading="lazy" />
        </>,
        ref: "https://console.cloud.wazuh.com"
    },
    {
        company: 'Cuentita.com',
        role: "Personal Project",
        date: "2025 – Present",
        description: <>
            <ul className="exp-bullets">
                <li>Migrated backend from FastAPI to Go, deployed as AWS Lambda functions behind API Gateway with DynamoDB. Frontend built with React Native.</li>
            </ul>
        </>,
        media: <img src="cuentita.gif" alt="Cuentita Screenshot" width={300} height={600} loading="lazy" />,
        ref: "https://cuentita.com"
    },
    {
        company: "IncluIT",
        role: "Intel Contractor",
        date: "2020 – 2023",
        description: <>
            <ul className="exp-bullets">
                <li>Developed an IoT vehicle fleet monitoring system with Python/Flask: ML models running on the edge (Intel hardware), telemetry sent via MQTT to AWS (IoT Core, EC2, S3) and data flowing between microservices in real time.</li>
                <li>Implemented real-time monitoring with ThingsBoard and observability with Kibana and DynamoDB for metrics visualization and vehicle location on map.</li>
                <li>Co-led the project and participated in hiring and training 2 junior developers.</li>
            </ul>
        </>,
        media: <iframe width="100%" height="300px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>,
        ref: "https://www.intel.com/content/www/us/en/docs/edge-insights-fleet/developer-guide/2022-4/reference-implementations.html"
    },
    {
        company: "IncluIT",
        role: "Telecom Contractor",
        date: "2019 – 2020",
        description: <>
            <ul className="exp-bullets">
                <li>Developed frontend and backend features for Telecom Personal's mobile (Java Spring) and web applications, handling peaks of up to 11000 concurrent users.</li>
                <li>Led production deployments and client coordination during the final months of the project.</li>
            </ul>
        </>,
        media: <>
            <img src="personal-logo.png" alt="Personal Logo" width={300} height={100} className='mb-2' />
            <img src="personal.png" alt="Telecom App Screenshot" width={200} height={350} />
        </>,
        ref: "https://www.personal.com.ar"
    },
    {
        company: "IncluIT",
        role: "McAfee Solidcore",
        date: "2019 – 2020",
        description: <>
            <ul className="exp-bullets">
                <li>Bug fixing and automated testing (PyTest, Docker) on a cybersecurity product, with CI/CD on GitLab CI.</li>
                <li>Knowledge transfer to team in India.</li>
            </ul>
        </>,
        media: <>
            <img src="mcafee.png" alt="McAfee Screenshot" width={300} height={100} className='mb-2' />
            <img src="solidcore.jpg" alt="McAfee Solidcore Screenshot" width={150} height={50} />
        </>,
        ref: "https://www.mcafee.com"
    }
];

const Experience = () => {
  return (
    <>
      <div className='App-title'>Work Experience</div>
      <div className='App-description'>
        <ul id="work-experience">
          {experiences.map((exp, index) => (
            <li key={index}>
              <div className="exp-header">
                <div className="exp-heading">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-role">{exp.role}</span>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <div className="exp-description">{exp.description}</div>
              <div className='cap'>
                {exp.media}
              </div>
              {exp.ref && (
                <div className='ref'>
                  <a href={exp.ref} target='_blank' rel="noopener noreferrer">{exp.ref}</a>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Experience;
