import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Dropzone from '../../components/Dropzone';

import {
    GoHome,
    RowForm
} from './styles';

import api from '../../services/api';

function RegisterProject () {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [gitUrl, setGitUrl] = useState('');
    const [techs, setTechs] = useState('');

    const [selectedImage, setSelectedImage] = useState();

    const history = useHistory();

    async function handleSubmit (e) {
        e.preventDefault();

        const data = new FormData();

        data.append('name', name);
        data.append('description', description);

        if (selectedImage) {
            data.append('image', selectedImage);
        }

        try {
            await api.post('projects', data);

            history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header title="Cadastrar Projeto" />

            <GoHome to="/">
                <FiArrowLeft />
            </GoHome>

            <RowForm onSubmit={handleSubmit}>
                <div className="col">
                    <Dropzone onFileUploaded={setSelectedImage} />
                </div>

                <div className="col">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nome"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Descrição"
                        rows="5"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    >
                    </textarea>

                    <input
                        type="text"
                        name="gitUrl"
                        id="gitUrl"
                        placeholder="GitUrl"
                        value={gitUrl}
                        onChange={e => setGitUrl(e.target.value)}
                        required
                    />

                    <input
                        type="text"
                        name="techs"
                        id="techs"
                        placeholder="Tecnologiass"
                        value={techs}
                        onChange={e => setTechs(e.target.value)}
                        required
                    />

                    <button type="submit">Cadastrar projeto</button>
                </div>
            </RowForm>
            <Footer />
        </>
    );
}

export default RegisterProject;