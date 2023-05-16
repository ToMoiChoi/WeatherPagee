
import { getClient } from '@/apollo-client';
import CalloutCard from '@/components/CalloutCard';
import StatCard from '@/components/StatCard';
import FetchWeatherQuery from '@/graphql/queries/fetchWeatherQueries';
type Props = {
  params:{
    city:string,
    lat:string,
    long:string,
  }
}
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
      <div className='p-5'>
        <div className='pb-5'>
          <h2 className='text-xl font-bold'>Todays Overview</h2>
          <p className='text-sm text-gray-400'>
            Last Update at:{" "}
            {/* {new Date(results.current_weather.time).toLocaleString()}({results.timezone}) */}
          </p>
          <div>
            Place: {city} : {lat} {' - '} {long}
          </div>
        </div>
        <div>
          <CalloutCard
          message='This is the text for the weather'
           />
        </div>
        <div>
          <StatCard
            tittle='Minium Tempera'
            metrics="$ 60,465"
            color='yellow'
          />
        </div>
      </div>
    </div>
  )
}

export default WeatherPage;
