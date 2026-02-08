import { useState } from "react";
function MultipeCondition() {
    const [Default, Change] = useState(1);
    return (
        <div>
            {

                Default == 1 ?<h2>Condition1</h2> :
                    Default == 2 ?<h2>Condition2</h2> :
                        Default == 3 ? <h2>Condition3</h2> :
                            Default == 4 ?<h2>Condition4</h2> :
                                <h2>other Conndition</h2>
            }
            <br />
            <br />
            <button onClick={() => Change(Default + 1)} >Hit For Change Condition</button>

            <br />
        </div>
    )
}
export default MultipeCondition;