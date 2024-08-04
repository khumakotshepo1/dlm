import Link from "next/link";

const Council = () => {
    return (
        <section className="bg-no-repeat bg-mayor-hero bg-cover py-60">
            <article className=" flex flex-wrap justify-center items-center gap-4 py-12">
                <Link
                    href={"council/speaker"}
                    className="w-[300px] h-[150px] bg-blue-300 flex justify-center items-center rounded-lg shadow-md hover:bg-yellow-200"
                >
                    Office Of The Speaker
                </Link>
                <Link
                    href={"council/chief-whip"}
                    className="w-[300px] h-[150px] bg-blue-300 flex justify-center items-center rounded-lg shadow-md hover:bg-blue-200"
                >
                    Office Of The Single Whip
                </Link>
                <Link
                    href={"council/municipal-council"}
                    className="w-[300px] h-[150px] bg-blue-300 flex justify-center items-center rounded-lg shadow-md hover:bg-red-200"
                >
                    Municipal Council
                </Link>
            </article>
        </section>
    );
};

export default Council;
