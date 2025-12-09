import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Wazuh Inc",
            description: "ReactJs, Python, Flask, AWS: API Gateway, Lambda, Step Functions, Amplify, CloudWatch, S3, Cognito - (2023-present)",
            media: <>
                <img src="wazuh.png" alt="Wazuh Screenshot" className='mb-2'></img>
                <img src="wazuh-web.png" alt="Wazuh Web Screenshot"></img>
            </>,
            ref: "https://console.cloud.wazuh.com"
        },
        {
            company: 'Cuentita.com (Personal Project)',
            description: "ReactJs, FastAPI, AWS Lambda, AWS API Gateway, AWS Amplify - (2025-present)",
            media: <img src="cuentita.gif" alt="Cuentita Screenshot" width={300} height={600}></img>,
            ref: "https://cuentita.com"
        },
        {
            company: "IncluIT for Intel Transportation",
            description: "OpenVINO framework for deep learning models, Python, Docker, DockerCompose, JQuery, Flask, ThingsBoard for IoT, AWS IoT, AWS ECR, AWS EC2, Boto3, SQLite, GitHub, English meetings - (2020-2023)",
            media: <iframe width="50%" height="300px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>,
            ref: "https://www.intel.com"
        },
        {
            company: "IncluIT for Telecom Personal Mobile & Web Apps",
            description: "Java, HTML, CSS, JQuery - (2020)",
            media: <>
                <img src="personal-logo.png" alt="Personal Logo" width={150} height={300} className='mb-2'></img>
                <br />
                <img src="personal.png" alt="Telecom App Screenshot" width={300} height={300}></img>
            </>,
            ref: "https://www.personal.com.ar"
        },
        {
            company: "IncluIT for McAfee Solidcore",
            description: "C, Docker, Git, English meetings - (2020)",
            media: <>
                <img src="mcafee.png" alt="McAfee Screenshot" width={300} height={200} className='mb-2'></img>
                <br />
                <img src="solidcore.jpg" alt="McAfee Solidcore Screenshot" width={150} height={100}></img>
            </>,
            ref: "https://www.mcafee.com"
        },
        {
            company: "ReactJs Project",
            description: "ReactJs, Firebase - (2021)",
            media: <img src="tecnoshop.gif" alt="ReactJs Screenshot"></img>
        },
        {
            company: "Thesis Project",
            description: "Python - (2021)",
            media: <img src="thesis.png" alt="Thesis Screenshot"></img>
        }
    ];

  return (
    <>
        <div className='App-title'>Work Experience:</div>
        <div className='App-description'>
            <ul id="work-experience" className="mt-2">
                {experiences.map((exp, index) => (
                    <li key={index} className="m-2 p-4">
                        <span className="item-info-c2">{exp.company}</span><br/>
                        <small>{exp.description}</small>
                        <div className='cap'>
                            {exp.media}
                        </div>
                        <div className='ref'><a href={exp.ref} target='_blank'>{exp.ref}</a></div>
                    </li>
                ))}
                <br/><br/><br/>
            </ul>
            <br/><br/><br/>
        </div>
    </>
  )
}

export default Experience;
