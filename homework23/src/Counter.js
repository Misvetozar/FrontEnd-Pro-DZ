import React, {useState} from 'react';

function Counter() {
    const [counts, setCounts] = useState(10);

    function onIncBtnClick() {
        setCounts(counts + 1);
    };

    return (
        <div>
        {counts}
            <button onClick={onIncBtnClick}>Inc</button>
        </div>
    )
}

export default Counter;