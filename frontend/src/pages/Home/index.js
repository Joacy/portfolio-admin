import React from 'react';

import { FiPlus } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
    GoRegister,
    Projects,
    Project
} from './styles';

function Home () {
    return (
        <>
            <Header title="Projetos" />

            <GoRegister to='register-project'>
                <FiPlus />
            </GoRegister>

            <Projects>
                <li>
                    <Project>
                        <div className="top">
                            <img src="https://via.placeholder.com/320x240/ecf0ff" alt="" />
                        </div>
                        <div className="bottom">
                            <h4>Nome</h4>
                            <p>Descrição</p>
                            <ul>
                                <li><span>Tech 1</span></li>
                                <li><span>Tech 2</span></li>
                                <li><span>Tech 3</span></li>
                            </ul>
                        </div>
                    </Project>
                </li>

                <li>
                    <Project>
                        <div className="top">
                            <img src="https://via.placeholder.com/320x240/ecf0ff" alt="" />
                        </div>
                        <div className="bottom">
                            <h4>Nome</h4>
                            <p>Descrição</p>
                            <ul>
                                <li><span>Tech 1</span></li>
                                <li><span>Tech 2</span></li>
                                <li><span>Tech 3</span></li>
                            </ul>
                        </div>
                    </Project>
                </li>

                <li>
                    <Project>
                        <div className="top">
                            <img src="https://via.placeholder.com/320x240/ecf0ff" alt="" />
                        </div>
                        <div className="bottom">
                            <h4>Nome</h4>
                            <p>Descrição</p>
                            <ul>
                                <li><span>Tech 1</span></li>
                                <li><span>Tech 2</span></li>
                                <li><span>Tech 3</span></li>
                            </ul>
                        </div>
                    </Project>
                </li>

                <li>
                    <Project>
                        <div className="top">
                            <img src="https://via.placeholder.com/320x240/ecf0ff" alt="" />
                        </div>
                        <div className="bottom">
                            <h4>Nome</h4>
                            <p>Descrição</p>
                            <ul>
                                <li><span>Tech 1</span></li>
                                <li><span>Tech 2</span></li>
                                <li><span>Tech 3</span></li>
                            </ul>
                        </div>
                    </Project>
                </li>

                <li>
                    <Project>
                        <div className="top">
                            <img src="https://via.placeholder.com/320x240/ecf0ff" alt="" />
                        </div>
                        <div className="bottom">
                            <h4>Nome</h4>
                            <p>Descrição</p>
                            <ul>
                                <li><span>Tech 1</span></li>
                                <li><span>Tech 2</span></li>
                                <li><span>Tech 3</span></li>
                            </ul>
                        </div>
                    </Project>
                </li>

                <li>
                    <Project>
                        <div className="top">
                            <img src="https://via.placeholder.com/320x240/ecf0ff" alt="" />
                        </div>
                        <div className="bottom">
                            <h4>Nome</h4>
                            <p>Descrição</p>
                            <ul>
                                <li><span>Tech 1</span></li>
                                <li><span>Tech 2</span></li>
                                <li><span>Tech 3</span></li>
                            </ul>
                        </div>
                    </Project>
                </li>
            </Projects>
            <Footer />
        </>
    );
}

export default Home;