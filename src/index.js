import React from 'react';
import { render } from 'react-dom';
import './stylesheets/styles.scss';
import Button from './components/Button';
import LeaseList from "./components/LeaseList";

render(
    <React.Fragment>
    <div className={'block'}>
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
    </div>
        <div className={'block'}>
            <h1 className={'heading heading--with-bottom-spacing'}>Mini CSS Framework(React)</h1>
            <div className={'column-wrapper'}>
                <div className={'column'}>
                    <Button>Default</Button>
                    <Button size={'large'}>Large</Button>
                    <Button color={'blue'}>Blue</Button>
                    <Button isDisabled>Disabled</Button>
                    <Button isHovered>Hover</Button>
                    <Button onClick={()=>{alert('clicked button')}}>Onclick</Button>
                </div>
            </div>
        </div>

        <div className={'block'}>
            <h1 className={'heading heading--with-bottom-spacing'}>Leases</h1>
            <div className={'column-wrapper'}>
                <div className={'column'}>
                    <LeaseList source={'https://hiring-task-api.herokuapp.com/v1/leases'}/>
                </div>
            </div>
        </div>

    </React.Fragment>,
    document.getElementById('app')
);
