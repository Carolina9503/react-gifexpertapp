import React from 'react';
import { shallow } from 'enzyme';
import  GifExpertApp  from '../GifExpertApp';


describe('Pruebas en el componente principal <GifExpertApp/>', () => {

    test('debe mostrarse correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp/>)
        expect( wrapper ).toMatchSnapshot(); 
        
    });

    test('debe de mostrar una lista de categorias', () => {

        const categories = ['One punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length).toBe(categories.length);
    })
    
    
    
})