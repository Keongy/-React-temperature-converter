import React from 'react';

function WaterBoilOrNot({ temperature }) {
    let classAlert = ""
    const waterBoil = temperature >= 100 ? (classAlert = "danger", "L'eau bout") : (classAlert = "info", "L'eau ne bout pas")
    // const classAlert = temperature >= 100 ? "danger" : "info"
    const classInfo = "alert alert-" + classAlert;
    return (
        <div>
            <p className={classInfo}>{waterBoil}</p>
        </div>
    )
}


export default WaterBoilOrNot