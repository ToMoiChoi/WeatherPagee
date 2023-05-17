import CityPicker from "./CityPicker"

type Props={
    city:string,
    lat:string,
    long:string,
}
function InformationPanel({city,lat,long}:Props) {
  return (
    <div className="bg-gradient-to-br from-[#394F68] to-[#183b7E]
    text-white p-10">
        <div className="pb-5">
            <h1 className="text-6xl font -bold">{decodeURI(city)}</h1>
            <p className="text-xs tetx-gray-400">
              Long/Lat: {long} , {lat}
            </p>
        </div>
        <CityPicker/>
        <hr className="my-10"/>
        <div className="my-5 flex item-center justify-between space-x-10">
          <div>
            <p className="text-xl">
              {new Date().toLocaleDateString("en-GB",{
                weekday:"long",
                year:"numeric",
                month:"long",
                day:"numeric",
              })}
            </p>
            <p className="text-extralight">
              Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
            </p>
          </div>
          <p className="text-xl font-bold uppercase">
            {new Date().toLocaleTimeString("en-GB",{
              hour:"numeric",
              minute:"numeric",
              hour12:true,
            })}
          </p>
        </div>
        <hr className="mt-10 mb-5"/>
        <div>
          <div>
            {/* image */}
            <div>
              <p>29 °C{/* {results.current_weather.Temperature.toFixed(1)}29 °C */}</p>
              <p>
                {/* weather code */}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InformationPanel