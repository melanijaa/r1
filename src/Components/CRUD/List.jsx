// import { useState } from "react";

import Ex from "./Ex";

function List({exes}) {

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>List of Ex`es</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                    exes ? exes.map(ex => <Ex key={ex.id} ex={ex}></Ex>) : null
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;