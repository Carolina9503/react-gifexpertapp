import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en e componente <GifGrid />', () => {
    const category = 'punch';
    
    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
          data: [],
          loading:true  
        });
        const wrapper = shallow(<GifGrid category={category} />);
         expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar item cuando se cargan imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id:'ABC',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'Cualquier cosa'
        },
        {
            id:'ABC',
            url: 'https://localhost/cualquier/cosa.png',
            title: 'Cualquier cosa'
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading:false  
        
       });

          const wrapper = shallow(<GifGrid category={category} />);

        //   expect( wrapper ).toMatchSnapshot();
          expect(wrapper.find('p').exists() ).toBe(false);
          expect( wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
    

    
    
})
