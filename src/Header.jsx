function Header({currentScore}) {
    return (
        <header>
            <a href="/" aria-label="game logo" id="game-logo-link"><img src="./images/logo-bonus.svg" alt="game logo" /></a>
            <div className="score-section">
                <p>SCORE</p>
                <h1>{currentScore}</h1>
            </div>
        </header>
    )
}

export default Header;