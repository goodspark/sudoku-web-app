import React, { useCallback } from 'react';

function HintIcon () {
    return (
        <svg version="1.1" viewBox="0 0 48 48">
            <g>
                <path
                    className="stroke"
                    d="m 23.865234,4.0683594 C 15.885331,4.0676743 9.3697539,10.582581 9.3691406,18.5625 v 0.002 c 0.00423,5.138893 2.8259154,9.739013 7.1875004,12.330078 a 0.50005,0.50005 0 0 1 0.24414,0.429688 v 6.902343 c -3.1e-5,1.103075 0.885209,1.988314 1.988281,1.988282 h 1.705079 a 0.50005,0.50005 0 0 1 0.482421,0.363281 c 0.365871,1.294608 1.541405,2.184869 2.886719,2.185547 1.344662,-0.0015 2.519074,-0.891566 2.884766,-2.185547 a 0.50005,0.50005 0 0 1 0.482422,-0.363281 h 1.710937 c 1.103073,3.2e-5 1.988312,-0.885208 1.988282,-1.988282 v -6.90625 a 0.50005,0.50005 0 0 1 0.24414,-0.429687 c 4.35942,-2.590069 7.179147,-7.187715 7.185547,-12.324219 v -0.004 C 38.358762,10.583411 31.844231,4.0689725 23.865234,4.0683594 Z m 0,3.9726562 c 5.829823,4.48e-4 10.518702,4.6883604 10.521485,10.5175784 a 0.50005,0.50005 0 0 0 0,0.002 c -0.0051,4.158957 -2.451105,7.915246 -6.251953,9.603515 -0.718646,0.319463 -1.179885,1.029954 -1.179688,1.816407 v 3.363281 a 0.50005,0.50005 0 0 1 -0.5,0.5 h -5.179687 a 0.50005,0.50005 0 0 1 -0.5,-0.5 v -3.357422 c -8.9e-5,-0.786839 -0.462357,-1.497431 -1.181641,-1.816406 -3.803224,-1.688517 -6.248553,-5.448278 -6.251953,-9.609375 0.0017,-5.830969 4.69221,-10.5200321 10.523437,-10.5195314 z m -0.550781,2.4335934 c -0.04217,0.0012 -0.08302,0.0036 -0.125,0.0078 -3.273744,0.277146 -6.057237,2.54042 -6.994141,5.689454 -0.687554,2.312411 2.781194,3.343661 3.46875,1.03125 0.515751,-1.733497 2.027931,-2.964625 3.830079,-3.117187 2.378775,-0.146222 2.201881,-3.701246 -0.179688,-3.611329 z"
                />
            </g>
        </svg>
    )
}

export default function HintButton ({menuHandler}) {
    const clickHandler = useCallback(
        e => {
            e.preventDefault();
            const menuAction = 'show-hint-modal';
            menuHandler(menuAction);
        },
        [menuHandler]
    );

    return (
        <button id="hint-button" type="button" title="Hint" onClick={clickHandler}><HintIcon /></button>
    )
}
