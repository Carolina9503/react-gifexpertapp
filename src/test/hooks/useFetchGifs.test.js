import { useFetchGifs } from '../../hooks/useFetchGifs';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicia ', async() => {

        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const {data, loading} = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    })

    test('debe de retornar un arrego de imagenes y el loading en fase', async() => {

        const {result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
        
    })
    
    
    
})
