function StepsHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-content">
                <h1 className="steps-title">
                    SIGA AS <br /> ETAPAS
                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="steps-number">1</span>
                        Select products and location.
                    </li>
                    <li>
                        <span className="steps-number">2</span>
                        Then click on <strong>“SEND ORDER”</strong>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default StepsHeader;