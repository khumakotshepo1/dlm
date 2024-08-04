import {Execs} from "@/components/execs";
import ExecsApi from "@/components/ExecsApi";
import mmcApi from "@/components/mmcApi";


const Mmcs = () => {


    return (
        <section>
            <Execs data={ExecsApi} title={"Council Executive"}/>
            <Execs data={mmcApi} title={"Portfolios Executive"}/>
        </section>
    );
};

export default Mmcs;
