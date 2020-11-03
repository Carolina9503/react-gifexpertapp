import '@testing-library/jest-dom';
import React from 'react'
import {shallow} from 'enzyme'

const { AddCategory } = require('../../components/AddCategory')


describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();     //() => {};
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);

    });


    test(' debe de mostrarse correctaamente', () => {
        expect(wrapper).toMatchSnapshot();
        
    }) 

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', {target: { value }});

        expect( wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear la informacion con submit ', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){} }); //preventDefault: () =>{}
        
        expect (setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de teto ', () => {

        const value = 'Hola mundo';
        
        // 1. simular el inputChange
        wrapper.find('input').simulate('change', {target: { value }});

        // 2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){} });

        // 3. setCatwgories se ebe de haber llamado
        expect ( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1); //=> significa que la funcion setCategories debio haberse llamado 2 veces
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) ); // => que se haya llamado con una funcion 
        
        // 4. el valor del input debe de estar ''
        expect (wrapper.find('input').prop('value')).toBe('');
        
    })
    

    
    
})
