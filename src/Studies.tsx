const Studies = () => {
  return (
    <>
      <div className='App-title'>Studies</div>
      <div className='App-description'>
        <div className='study-featured'>
          <span className="item-info-c1">Computer Engineer</span>
          <small>Universidad Nacional de Córdoba (2008 - 2022)</small>
        </div>

        <div className='study-group'>
          <ul>
            <li>
              <span className="item-info-c1">Python avanzado</span>
              <small>LinkedIn Learning (2023)</small>
            </li>
            <li>
              <span className="item-info-c1">ReactJS</span>
              <small>CoderHouse (07/2021 - 09/2021)</small>
            </li>
            <li>
              <span className="item-info-c1">Become a Better Engineer</span>
              <small>Udemy (2026)</small>
            </li>
            <li>
              <span className="item-info-c1">Desarrollo con IA</span>
              <small>BIG School (2026)</small>
            </li>
            <li>
              <span className="item-info-c1">AWS Practitioner</span>
              <small>ISPC (2022)</small>
            </li>
            <li>
              <span className="item-info-c1">English Level B1</span>
              <small>GAPS Academy (2021, 2022)</small>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Studies;
