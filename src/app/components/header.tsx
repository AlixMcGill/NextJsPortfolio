export default function Header() {
  return (
    <section className="header-section header-bg hard-shadow-center">
        <div className="flex-container-spar">
            <div className="flex-container-spbtwn">
                <h1 className="margin-1rem open-sans-font-regular font-medium">Alixander McGill</h1>
                <h2 className="margin-1rem lily-script-font-regular font-small">Designer & Developer</h2>
            </div>
            <nav>
                <ul className="flex-container-spbtwn open-sans-font-regular font-small">
                    <li className="margin-1rem"><a href="">Contact</a></li>
                    <li className="margin-1rem"><a href="">Portfolio</a></li>
                    <li className="margin-1rem"><a href="">Blog</a></li>
                </ul>
            </nav>
        </div>
    </section>
  );
}