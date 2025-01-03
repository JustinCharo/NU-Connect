import "../css/Buttons.css";

function Buttons() {
    function saveProfile() {
        console.log('Profile Saved!');
    }

    function nextPerson() {
        console.log('Next Person!');
    }

    <div className="button-container">
        <button className="button" onClick={saveProfile}>Make a new friend!</button>
        <button className="button" onclick={nextPerson}>Next Person</button>
    </div>
}

export default Buttons