
import "./graphics.css"
export default function LoadingAnimation ({ className, id, alt }) {
    return (
<svg className={className} id={id} xmlns="http://www.w3.org/2000/svg" style={{margin: "auto", backgroundImage: "none", display: "block", shapeRendering: "auto"}} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<title>{alt}</title>
<circle cx="50" cy="50" r="32" fill="none" className="stroke-text-main" strokeWidth="8" strokeDasharray="50.26548245743669 50.26548245743669" strokeLinecap="round">
  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0 50 50;360 50 50" />
</circle>
</svg>
	)
}