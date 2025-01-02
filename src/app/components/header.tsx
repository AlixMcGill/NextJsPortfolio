export default function Header() {
  return (
    <section className="header-section header-bg hard-shadow-center">
        <div className="flex-container-spbtwn side-margin-5rem">
            <div className="flex-container-spbtwn">
                <h1 className="margin-1rem open-sans-font-regular font-medium">Alixander McGill</h1>
                <h2 className="margin-1rem lily-script-font-regular font-small">Designer & Developer</h2>
            </div>
            <nav>
                <ul className="flex-container-spbtwn open-sans-font-regular font-small">
                    <li className="margin-1rem"><a href=""><span className="hover-text">Contact</span></a></li>
                    <li className="margin-1rem"><a href=""><span className="hover-text">Portfolio</span></a></li>
                    <li className="margin-1rem"><a href=""><span className="hover-text">Blog</span></a></li>
                </ul>
            </nav>
        </div>
    </section>
  );
}