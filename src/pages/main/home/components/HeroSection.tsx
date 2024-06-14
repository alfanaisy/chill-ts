import { useState } from 'react';
import { BiVolumeFull, BiVolumeMute } from 'react-icons/bi';
import { MdInfoOutline } from 'react-icons/md';

const HeroSection = () => {
  const [isMute, setIsMute] = useState<boolean>(true);

  return (
    <div className="w-full min-h-80 md:min-h-[calc(100vh-92px)] bg-hero bg-cover bg-center bg-no-repeat ">
      <div className="w-full min-h-80 md:min-h-[calc(100vh-92px)] bg-gradient-to-b from-transparent to-other-header text-white p-8 md:p-16 flex flex-col justify-end">
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-8">
            Duty After School
          </h1>
          <p className="line-clamp-2 md:line-clamp-4 text-pretty text-xs md:text-lg font-medium mb-4 md:mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa non
            sunt nostrum eos beatae. Sunt quis, maxime quia dolorum illo,
            nesciunt velit, provident repudiandae ullam aut nobis voluptatum
            excepturi at?
          </p>
        </div>
        <div className="flex justify-between">
          <div className="h-6 md:h-11 flex gap-2">
            <button className="bg-primary-300 ring-1 ring-primary-300 rounded-full font-bold text-xs md:text-base px-3 md:px-7">
              Mulai
            </button>
            <button className="bg-other-paper ring-1 ring-other-paper rounded-full font-bold text-xs md:text-base px-3 md:px-7 inline-flex items-center">
              <span>
                <MdInfoOutline className="w-2.5 h-2.5 md:w-6 md:h-6 mr-1" />
              </span>
              Selengkapnya
            </button>
            <div className="bg-transparent ring-1 ring-text-light-200 text-text-light-200 rounded-3xl font-bold text-xs md:text-base px-1 md:px-2.5 inline-flex items-center">
              18+
            </div>
          </div>
          <div
            className="bg-transparent ring-1 ring-text-light-200 h-6 w-6 md:h-11 md:w-11 grow-0 shrink-0 rounded-full text-center inline-flex items-center justify-center cursor-pointer"
            onClick={() => setIsMute(!isMute)}
          >
            <span className="md:text-xl">
              {isMute ? <BiVolumeMute /> : <BiVolumeFull />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

//
//
//
