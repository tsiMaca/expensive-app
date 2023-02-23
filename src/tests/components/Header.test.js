import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header/Header';

test ('shoul render Header correctly', ()=>{
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    console.log(renderer.getRenderOutput());
})