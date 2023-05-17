
import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import InformationPanel from '@/components/InformationPanel';
import StatCard from '@/components/StatCard';
import FetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';
type Props = {
  params:{
    city:string,
    lat:string,
    long:string,
  }
}
const UV = 7;
const windspeed =14.8;
const wind_Direction =315;
async function WeatherPage({params:{city,lat,long}}:Props) {
  // const client = getClient();
  // const {data}= await client.query({
  //   query: FetchWeatherQuery,
  //   variables:{
  //     current_weather:"true",
  //     longitude: long,
  //     latitude: lat,
  //     timezone: "GMT"
  //   }
  // });
  // const results:Root = data.myQuery;
  return (
    <div>
      {/* Information Panel*/}
      <InformationPanel 
        city={city} 
        lat={lat} 
        long={long} 
      />
      <div className='p-5'>
        <div className='pb-5'>
          <h2 className='text-xl font-bold'>Todays Overview</h2>
          <p className='text-sm text-gray-400'>
            Last Update at:{" "}
            {new Date().toLocaleTimeString("en-GB",{
              hour:"numeric",
              minute:"numeric",
              hour12:true,
            })}
          </p>
        </div>
        <div className='m-2 mb-10'>
          <CalloutCard
          message='This is the text for the weather'
           />
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
          <StatCard
            tittle='Maxium Temperature'
            metrics="29 °C"
            color='yellow'
          />
          <StatCard
            tittle='Minium Temperature'
            metrics="29 °C"
            color='green'
          />
          <div>
            <StatCard
              tittle='UV Index'
              metrics={`${UV.toFixed(1)}°`}
              color='rose'
            />
            {Number(UV) > 5 && (
              <CalloutCard
                message={"The UV is high today, be sure to wear SPF!"}
                warning
              />
            )}
          </div>
          <div className='flex space-x-3'>
            <StatCard
              tittle='Wind Speed'
              metrics={`${windspeed.toFixed(1)}m/s`}
              color='cyan'
            />
            <StatCard
              tittle='Wind Direction'
              metrics={`${wind_Direction.toFixed(1)}°`}
              color='violet'
            />
          </div>
        </div>
        <hr className='mb-5'/>
        <div className='space-y-3'>
          {/* TempChart */}
          {/* RainChart */}
          {/* HumidityChart */}
        </div>
      </div>
    </div>
  )
}

export default WeatherPage;
