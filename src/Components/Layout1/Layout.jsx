import React, { Suspense } from 'react';

function loadComponent(name) {
    console.log('name ', name);
    const Component = React.lazy(() =>
        import(`../${name}/${name}`)
    );
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Component/>
            </Suspense>
        </>
    )
}

function Layout() {
    const Component = loadComponent('Image');
    const Component2 = loadComponent('Button');

    const array = ['Image', 'Button'];
    console.log('Component ', Component)

    return (
        <div>
            {array.map((item, key) => (
                loadComponent(item)
            ))}
        </div>
    );
}

export default Layout;