import weatherCodeToString from "@/lib/WeatherCodeToString";
import CityPicker from "./CityPicker";
import Image from "next/image";
import { SunIcon } from "@heroicons/react/solid";

type Props = {
  city: string,
  lat: string,
  long: string,
};
const a2 = 2;
function InformationPanel({ city, lat, long }: Props) {
  return (
    <div
      className="bg-gradient-to-br from-[#394F68] to-[#183b7E]
    text-white p-10"
    >
      <div className="pb-5">
        <h1 className="text-6xl font -bold">{decodeURI(city)}</h1>
        <p className="text-xs tetx-gray-400">
          Long/Lat: {long} , {lat}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="my-5 flex item-center justify-between space-x-10">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="text-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="flex items-center justify-between">
        <div>
          {/* image */}
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${weatherCodeToString[a2].icon}.png`}
            alt={weatherCodeToString[a2].label}
            width={75}
            height={75}
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              29 °C{/* {results.current_weather.Temperature.toFixed(1)}29 °C */}
            </p>
            <p className="text-right text-lg font-extralight">
              {/* weather code */}
              {weatherCodeToString[a2].label}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 px-4 border border-[#6F90CD] rounded-md bg-[#405885]">
          <SunIcon className="h-10 w-10 text-gray-500"/>
          <div className="flex-1 flex justify-between items-center">
            <p className="font-extralight">Sunrise</p>
            <p className="text-2xl uppercase">
              {new Date().toLocaleTimeString("en-GN",{
                  hour:"numeric",
                  minute:"numeric",
                  hour12:true,
                }
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
