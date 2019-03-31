import React from 'react';
import { render } from 'react-dom';
import './stylesheets/styles.scss';

render(
    <div className={'block block-centered'}>
        <h1 className={'heading heading--with-bottom-spacing'}>Mini CSS Framework</h1>
        <div className={'column-wrapper'}>
            <div className={'column'}>
                <h2>Blue Buttons</h2>

                <p className={'text text--uppercase'}>Normal</p>
                <button type="button" className={'btn btn--blue btn--small'}>Button</button>
                <button type="button" className={'btn btn--blue btn--large'}>Button</button>

                <p className={'text text--uppercase'}>Hover State</p>
                <button type="button" className={'btn btn--blue btn--small btn--hover'}>Button</button>
                <button type="button" className={'btn btn--blue btn--large btn--hover'}>Button</button>

                <p className={'text text--uppercase'}>Disabled State</p>
                <button type="button" className={'btn btn--blue btn--small btn--disabled'}>Button</button>
                <button type="button" className={'btn btn--blue btn--large btn--disabled'}>Button</button>

            </div>
            <div className={'column column--left-space'}>
                <h2>Orange Buttons</h2>
                <p className={'text text--uppercase'}>Normal</p>
                <button type="button" className={'btn btn--orange btn--small'}>Button</button>
                <button type="button" className={'btn btn--orange btn--large'}>Button</button>

                <p className={'text text--uppercase'}>Hover State</p>
                <button type="button" className={'btn btn--orange btn--small btn--hover'}>Button</button>
                <button type="button" className={'btn btn--orange btn--large btn--hover'}>Button</button>

                <p className={'text text--uppercase'}>Disabled State</p>
                <button type="button" className={'btn btn--orange btn--small btn--disabled'}>Button</button>
                <button type="button" className={'btn btn--orange btn--large btn--disabled'}>Button</button>

            </div>
        </div>
    </div>,
    document.querySelector('#app')
)