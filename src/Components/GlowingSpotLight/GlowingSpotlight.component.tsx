export default function GlowingSpotlight() {
  const injectCursorPosition = ({ x, y }: { x: number; y: number }) => {
    document.documentElement.style.setProperty("--x", x.toString());
    document.documentElement.style.setProperty("--y", y.toString());
  };

  document.body.addEventListener("pointermove", injectCursorPosition);
  return (
    <div className="main">
      <ul className="cards">
        <li className="card">
          <span className="card-span">1</span>
        </li>
        <li className="card">
          <span className="card-span">2</span>
        </li>
        <li className="card">
          <span className="card-span">3</span>
        </li>
        <li className="card">
          <span className="card-span">4</span>
        </li>
        <li className="card">
          <span className="card-span">5</span>
        </li>
        <li className="card">
          <span className="card-span">6</span>
        </li>
        <li className="card">
          <span className="card-span">7</span>
        </li>
        <li className="card">
          <span className="card-span">8</span>
        </li>
        <li className="card">
          <span className="card-span">9</span>
        </li>
      </ul>
    </div>
  );
}
