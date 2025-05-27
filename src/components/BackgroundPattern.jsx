import './BackgroundPattern.css'

function BackgroundPattern() {
  return (
    <div className="background-pattern">
      <div className="pattern-grid"></div>
      <div className="pattern-dots"></div>
      <div className="animated-gradient"></div>
      <div className="animated-shapes">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className={`shape shape-${index + 1}`}></div>
        ))}
      </div>
    </div>
  )
}

export default BackgroundPattern
