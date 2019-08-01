import React from 'react';
import ChartContainer from './ChartContainer';
import { Provider } from 'react-redux';
import store from '../store/store';
import { Root, ForkGithub } from './styles';

const RootContainer = () => (
    <>
        <ForkGithub>
            <a className="fork-link" href="https://github.com/kis/chartify" target="_blank">Fork me on GitHub</a>
        </ForkGithub>

        <Root>
            <header className="container">
                <div className="project-title">
                    <h2 className="main-header">Chartify</h2>
                    <h4 className="sub-header">React.js plugin for building customizable charts</h4>
                </div>
            </header>

            <main className="container">
                <Provider store={store}>
                    <ChartContainer />
                </Provider>
            </main>

            <footer className="container">
                <div className="footer-text">
                    Made with <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/2000px-Love_Heart_symbol.svg.png" title="love" /> Inspired by <a href="http://kinopoisk.ru" target="_blank">kinopoisk</a>
                </div>
            </footer>
        </Root>
    </>
);

export default RootContainer;
