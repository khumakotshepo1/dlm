import {Status, LoadsheddingStage} from "eskom-loadshedding-api";
import AlertStatus from "./AlertStatus";

const Loadshedding = async () => {
    const shedding = await Status.getStatus().then((status) => {

        return status;
    });

    const status = await Status.getStatus().then((status: LoadsheddingStage) => {
        return status;
    });

    return (
        <>
            {shedding >= 0 && <AlertStatus shedding={shedding} status={status}/>}
        </>
    );
};

export default Loadshedding;
