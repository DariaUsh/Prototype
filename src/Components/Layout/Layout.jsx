import React, { Suspense } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
    {
        layoutSheme(name: "ProductDetail"){
            name,
            schema
        }
    }
`;

function loadComponent(name) {
    const Component = React.lazy(() => import(`../${name}/${name}`));

    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        </>
    );
}
  
function Layout() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return ( 
        <div>
            {data.layoutSheme.schema.components.map((item, key) => (
                <>{loadComponent(item.name)}</>
            ))}
        </div>
    );
}

export default Layout;