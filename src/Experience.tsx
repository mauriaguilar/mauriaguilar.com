import './Experience.css';

const experiences = [
    {
        company: "Wazuh, Inc. | Software Engineer (Apr 2023-present)",
        description: <>
            <ul className="exp-bullets">
                <li>Built and maintained 13 REST APIs (Python/Flask, OpenAPI) + 10 Jobs (AWS Lambda) + ReactJs frontend for a cybersecurity SaaS with 500 users.</li>
                <li>Migrated environments API from Flask to FastAPI towards an event-driven design pattern. Designed and built a job scheduler service in Python for automated and event-based task management.</li>
                <li>Implemented observability and monitoring with AWS CloudWatch, X-Ray and Lambda Insights, with automated Slack alerts and daily metrics review.</li>
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
        company: 'Cuentita.com (Personal Project, 2025-present)',
        description: <>
            <ul className="exp-bullets">
                <li>Expense management PWA with React + FastAPI, serverless API on AWS (Lambda, DynamoDB, Cognito).</li>
            </ul>
        </>,
        media: <img src="cuentita.gif" alt="Cuentita Screenshot" width={300} height={600} loading="lazy" />,
        ref: "https://cuentita.com"
    },
    {
        company: "IncluIT | Intel Contractor (2020-2023)",
        description: <>
            <ul className="exp-bullets">
                <li>Developed an IoT vehicle fleet monitoring system with Python/Flask, integrating Intel hardware, Machine Learning and AWS (IoT Core, EC2, S3).</li>
                <li>Implemented real-time monitoring with Thingsboard for metrics visualization and vehicle location on map.</li>
                <li>Co-led the project and participated in hiring and training 2 junior developers.</li>
            </ul>
        </>,
        media: <iframe width="100%" height="300px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>,
        ref: "https://www.intel.com"
    },
    {
        company: "IncluIT | Telecom Contractor (2019-2020)",
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
        company: "IncluIT | McAfee Solidcore (2019-2020)",
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
    },
    {
        company: "ReactJs Project (2021)",
        description: <>
            <ul className="exp-bullets">
                <li>Final project for the ReactJs course at CoderHouse. E-commerce built with ReactJs and Firebase.</li>
            </ul>
        </>,
        media: <img src="tecnoshop.gif" alt="ReactJs Screenshot" loading="lazy" />
    },
    {
        company: "Thesis Project (2021)",
        description: <>
            <ul className="exp-bullets">
                <li>Desarrollé un sistema de evasión de obstáculos en Python sobre Raspberry Pi para vehículos autónomos.</li>
            </ul>
        </>,
        media: <img src="thesis.png" alt="Thesis Screenshot" loading="lazy" />
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
              <span className="item-info-c2">{exp.company}</span>
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
