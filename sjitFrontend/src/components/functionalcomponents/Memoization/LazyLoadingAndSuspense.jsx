    import {Suspense,lazy} from 'react';
    const LazyLoadingAndSuspense=()=>{
        const LazyComp= lazy(()=>import("../Signup.jsx"));
    return( <div>
        <Suspense fallback={<h1>Vankam da Mapla...</h1>}>
            <h1>
                This is Lazy Component.
            </h1>
            <LazyComp />
            </Suspense>
    </div>
    )
}
    export default LazyLoadingAndSuspense