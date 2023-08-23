import React, { useState } from 'react';
import { DatePicker, Button } from 'rsuite';
import dataService from '../services/dataService';
import { useNavigate } from "react-router-dom";

const CadastroChamado = () => {

    const styles = { width: 200, display: 'block', marginBottom: 10 };

    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [prazoSolucao, setPrazoSolucao] = useState(null)

    const navigate = useNavigate();

    const saveChamado = () => {
        
        const chamado = { titulo, descricao, prazoSolucao }

        dataService.createChamados(chamado)
            .then(response => {
                console.log("Chamado adicionado", response.data)
                navigate("/")
            })
            .catch(error => {
                //if (error.)
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log("error.data ", error.response.data);
                    console.log("error.status ", error.response.status);
                    console.log("error.headers ", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log('error.request', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log('error.config', error.config);
            });
    }

    const handleDateChange = (date) => {
        setPrazoSolucao(date)
    }

    return (
        <div className="col p-4 overflow-auto h-100">
            <div className="row">
                <div className="col-12">
                    <div className='w-100 d-flex justify-content-between'>
                        <div>


                            <h2 className="mb-4 mt-0">Cadastro Pacientes</h2>
                            <form method='POST' className='formulario'>
                                <label>Titulo:</label>
                                <input
                                    type="text"
                                    id="titulo"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                    placeholder="Digite o titulo"
                                /><br />
                                <label>Descricao:</label>
                                <input
                                    type="text"
                                    id="descricao"
                                    value={descricao}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    placeholder="Digite a descricao"
                                /><br />
                                <label>Prazo Solução:</label>
                                <DatePicker
                                    size="sm"
                                    placeholder="Prazo de Solução"
                                    style={styles} id="prazoSolucao"
                                    value={prazoSolucao}
                                    onChange={handleDateChange} />
                                <Button color="green" appearance="primary" onClick={saveChamado}>Salvar</Button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CadastroChamado;