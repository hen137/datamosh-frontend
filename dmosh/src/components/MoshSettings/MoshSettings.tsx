import Modes from '../ModePicker/ModePicker.tsx'
import './MoshSettings.css'

function ModeSelection() {

    return (
        <div className="mode-selection">
            <div className='align-baseline'>
                <h1 className='title invert'>Datamosh</h1>
                <p className='colon invert'>:</p>
            </div>
            {/* <h3 className='selector'>:bloom</h3> */}
            <Modes/>
        </div>
    )
}

export default ModeSelection