const Experience = () => {
  return (
    <>
        <div className='App-title'>Work Experience:</div>
        <div className='App-description'>
        <ul className="mt-2">
            <li>
                <span className="item-info-c2">Intel Transportation</span><br/>
                <small>OpenVINO framework for deep learning models, Python, Docker, DockerCompose, JQuery, Flask, ThingsBoard for IoT, AWS IoT, AWS ECR, AWS EC2, Boto3, SQLite, GitHub, English meetings - (2020-2022)</small>
                <div className='cap'>
                <iframe width="90%" height="400px" src="https://www.youtube.com/embed/Ru51DELfc-Q" title="New OpenVINO Solution: Edge Insights For Fleet | Edge Innovation Series for Developers" frame-border="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </li>
            <li>
                <span className="item-info-c2">Telecom Personal Mobile & Web Apps</span><br/>
                <small>Java, HTML, CSS, JQuery - (2020)</small>
                <div className='cap'>
                <img src="personal.png" alt="Telecom App Screenshot"></img>
                </div>
            </li>
            <li>
                <span className="item-info-c2">ReactJs Project</span><br/>
                <small>ReactJs, Firebase - (2021)</small>
                <div className='cap'>
                <img src="https://github.com/mauriaguilar/tecnoshop-aguilar/raw/main/example_of_use.gif" alt="ReactJs Screenshot"></img>
                </div>
            </li>
            <li>
                <span className="item-info-c2">Thesis Project</span><br/>
                <small>Python - (2021)</small>
                <div className='cap'>
                <img src="thesis.png" alt="Thesis Screenshot"></img>
                </div>
            </li>
            <br/><br/><br/>
        </ul><br/><br/><br/>
        </div>
    </>
  )
}

export default Experience;
