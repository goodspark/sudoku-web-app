import { useState, useEffect } from 'react';

import ButtonIcon from '../svg-sprites/button-icon';

function FullscreenButton () {
    const [fsEnabled, setFsEnabled] = useState(window.document.fullscreen);
    const title = fsEnabled ? 'Exit full screen' : 'Full screen';
    const clickHandler = (e) => {
        e.currentTarget.blur();
        return window.document.fullscreen
            ? window.document.exitFullscreen()
            : window.document.body.requestFullscreen();
    };
    useEffect(
        () => {
            const resizeHandler = (e) => { setFsEnabled(window.document.fullscreen); };
            window.addEventListener('fullscreenchange', resizeHandler);
            return () => {
                window.removeEventListener('fullscreenchange', resizeHandler);
            }
        },
        [setFsEnabled]
    );
    return (
        <button id="fullscreen-button" type="button" title={title} onClick={clickHandler}>
            {fsEnabled ? <ButtonIcon name="exit-fullscreen" /> : <ButtonIcon name="enter-fullscreen" />}
        </button>
    );
}

export default FullscreenButton;