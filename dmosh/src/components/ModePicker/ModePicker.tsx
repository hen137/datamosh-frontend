import { useEffect, useRef, useState } from 'react';
import { useClickAway } from "react-use";
import './ModePicker.css'

function Modes() {
    const modes = [
        {
            mode: 'bloom',
        },
        {
            mode: 'zoom',
        },
        {
            mode: 'doom',
        },
        {
            mode: 'pinkie',
        },
    ];

    const [showPicker, setShowPicker] = useState(false);
    const [selectedMode, selectMode] = useState(modes[0])

    const ref = useRef(null);

    useClickAway(ref, () => setShowPicker(false));

    useEffect( () => {



        return () => {
            ref.current = null;
        }
    } , [] );



    return (
        <div className='mode-picker'>
            <div className='selection'>

            </div>
            <div ref={ref} className='mode-list'>
                {modes.map((mode, index) => {
                        return (
                            <p key={index}>
                                {mode.mode}
                            </p>
                        )
                    })}
            </div>
            {/* {showPicker && (
                <div className='mode-list'>
                    {modes.map((mode) => {
                        return (
                            <p key={mode.mode} className='font-mode picker-item'>
                                {mode.mode}
                            </p>
                        );
                    })}
                </div>
            )}
            {!showPicker && (
                <p className='mode-selected invert font-mode' onClick={() => setShowPicker(true)}>
                    {selectedMode.mode}
                </p>
            )} */}
        </div>
    )
}

export default Modes