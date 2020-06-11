import React from 'react';

export default function withSuspense(Component, Spinner = null) {
    return (props) => {
        console.log('props', props);
        return <React.Suspense fallback={Spinner}>
            <Component {...props} />
        </React.Suspense>
    }
}
