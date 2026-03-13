const Skills = () => {
  return (
    <>
      <div className='App-title'>Skills</div>
      <div className='App-description'>
        <ul>
          <li>
            <span className="item-info-c3">Backend</span>
            <small>Python (Flask, FastAPI, Pytest, Boto3), Go, Java, OpenAPI/Swagger</small>
          </li>
          <li>
            <span className="item-info-c3">Cloud</span>
            <small>AWS: Lambda, API Gateway, DynamoDB, S3, CloudWatch, Xray, StepFunctions, Cloudformation, EC2, ECR, IoT</small>
          </li>
          <li>
            <span className="item-info-c3">Databases</span>
            <small>PostgreSQL, MySQL, DynamoDB (NoSQL)</small>
          </li>
          <li>
            <span className="item-info-c3">Frontend</span>
            <small>React, TypeScript</small>
          </li>
          <li>
            <span className="item-info-c3">Tools</span>
            <small>Git, GitHub, Docker, CI/CD, Linux, Makefile, Bash, N8N, Agile/Scrum</small>
          </li>
          <li>
            <span className="item-info-c3">Languages</span>
            <small>English: B1 · Spanish: Native</small>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Skills;
