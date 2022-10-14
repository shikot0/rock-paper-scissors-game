function RulesModal({handleModal}) {
    return(
        <dialog open>
            <div>
                <h2>RULES</h2>
                <button onClick={handleModal} className="close-button"><img src="./images/icon-close.svg" alt="close" /></button>
            </div>
            <img src="./images/image-rules-bonus.svg" alt="rules" />
        </dialog>
    )
}

export default RulesModal;