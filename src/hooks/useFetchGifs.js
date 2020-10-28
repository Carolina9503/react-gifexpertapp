import { useEffect, useState } from 'react';
import {getGifs} from '../helpers/getGifs'

//Los hook son funciones que tambien pueden tener estado
export const useFetchGifs = (category) =>{

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getGifs( category )
            .then( imgs => {
    
                setstate({
                    data: imgs,
                    loading: false
    
                });

            });

    }, [category]);
    return state //{data:[],loading: true};
    
}
        










// setTimeout(() => {
        //    setstate({
        //        data: [1,2,3,4,5,6,7],
        //        loading: false
              
        //    });
        // }, 3000);