import { useCallback, useState } from "react";
import Header from "../../components/Header";

const Callback = () => {

    const [count, setCount] = useState(0);

    const newfunction = useCallback(()=>{}, [])

    return <div>
        <Header newfunction = {newfunction}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev => prev + 1)}>Click Here</button>
    </div>

}

export default Callback;
