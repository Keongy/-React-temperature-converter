import React from 'react';

function WaterBoilOrNot({ temperature }) {
    let classAlert = ""
    const waterBoil = temperature >= 100 ? (classAlert = "danger", "L'eau bout") : (classAlert = "info", "L'eau ne bout pas")
    const classInfo = "alert alert-" + classAlert;
    const print = <p className={classInfo}>{waterBoil}</p>
    return (<div>
        {print}
    </div>

    )
}


export default WaterBoilOrNot