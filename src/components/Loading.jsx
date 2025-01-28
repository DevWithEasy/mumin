import { useEffect, useState } from "react";

const LoadingSlider = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let intervalId
        if (count < 100) {
            intervalId = setInterval(() => {
                setCount((prev) => prev + 1)
            }, 30)
        }
        return () => clearInterval(intervalId)
    }, [count])

    return (
        <div>
            <div
                className="h-2 flex justify-center items-center text-xs bg-blue-500 text-white rounded-full"
                style={{ width: `${count}%`, transition: "width 0.05s linear" }}
            >
            </div>
            <p className="text-center text-xs">{`${count}%`}</p>
        </div>

    );
};

export default LoadingSlider;
