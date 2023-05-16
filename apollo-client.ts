import { ApolloClient, InMemoryCache} from '@apollo/client';

export const getClient = ()=>{
    const client = new ApolloClient({
        // uri:process.env.API_URL,
        // cache: new InMemoryCache(),
        // headers:{
        //     Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
        // },
        uri: 'https://krasnopillya.stepzen.net/api/coiled-markhor/__graphql',
        headers: {'Authorization':'apikey krasnopillya::stepzen.io+1000::210be50360f3af9aab061e681f28e8286c3ac20ed2e0f2e9a5271a913349a423'},
        cache: new InMemoryCache(),
    });
    return client;
};