import { useEffect, useState } from "react";

const ProgressBer = () => {
    const [progress, setProgress] = useState(0);
    const targetProgress = 85; // Set your target progress value here

  
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev < targetProgress) {
            return prev + 1;
          }
          clearInterval(timer);
          return prev;
        });
      }, 20);
  
      return () => clearInterval(timer);
    }, [targetProgress]);
  
    return (
        <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center items-center  my-16">
          <div className="flex flex-col space-y-4">
          <h1 className="text-md font-montserrat font-bold">Html & Css</h1>
      <div className="w-full  bg-gray-300 rounded-full overflow-hidden shadow-lg">
        <div
          className="bg-[#DD456D] h-8 rounded-full flex items-center justify-center transition-all duration-400"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white font-bold">{`${progress}%`}</span>
        </div>
      </div>
      
    </div>  
          <div className="flex flex-col space-y-4">
          <h1 className="text-md font-montserrat font-semibold">Html & Css</h1>
      <div className="w-full  bg-gray-300 rounded-full overflow-hidden shadow-lg">
        <div
          className="bg-[#DD456D] h-8 rounded-full flex items-center justify-center transition-all duration-400"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white font-bold">{`${progress}%`}</span>
        </div>
      </div>
      
    </div>  
          <div className="flex flex-col space-y-4">
          <h1 className="text-md font-montserrat font-semibold">Html & Css</h1>
      <div className="w-full max-w-md bg-gray-300 rounded-full overflow-hidden shadow-lg">
        <div
          className="bg-[#DD456D] h-8 rounded-full flex items-center justify-center transition-all duration-400"
          style={{ width: `${progress}%` }}
        >
          <span className="text-white font-bold">{`${progress}%`}</span>
        </div>
      </div>
      
    </div>  
        </div>
    );
};

export default ProgressBer;