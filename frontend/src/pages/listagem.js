import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Table, Button } from 'rsuite';
import dataService from '../services/dataService';
import "rsuite/dist/rsuite.min.css";
import { MdDelete } from 'react-icons/md';


const { Column, HeaderCell, Cell } = Table;



function Listagem() {

    const navigate = useNavigate();

    const [chamados, setChamados] = useState([]);

    useEffect(() => {
        pegaChamados();
    }, []);

    const pegaChamados = () => {
        dataService.getChamados()
            .then(response => {
                console.log('chamados: ', response.data);
                setChamados(response.data)
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
    }

    const handleNovoChamado = () => {
        navigate('/cadastroChamado')
    }

    const handleDelete = (id) => {
        var retorno = window.confirm('Realmente deseja excluir chamado?');
        if (retorno === true) {
            dataService.deleteChamado(id)
                .then(response => {
                    console.log('chamado deletado', response.data);
                    navigate('/')
                })
                .catch(function (error) {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        // that falls out of the range of 2xx
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        // The request was made but no response was received
                        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                        // http.ClientRequest in node.js
                        console.log(error.request);
                    } else {
                        // Something happened in setting up the request that triggered an Error
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        } else {
            console.log('Operação cancelada!!');
        }

    }


return (
    <div className="col p-4 overflow-auto h-100">
        <div className="row">
            <div className="col-12">
                <h1>Listagem de Chamados</h1>
                <Button color="blue" appearance="primary" onClick={handleNovoChamado}>Novo chamado</Button>
                <Table
                    height={400}
                    data={chamados}
                    onRowClick={rowData => {
                        console.log('rowdata', rowData);
                    }}
                >
                    <Column width={150} align="center">
                        <HeaderCell>Titulo</HeaderCell>
                        <Cell dataKey="titulo" />
                    </Column>

                    <Column width={200} align="center">
                        <HeaderCell>Descricao</HeaderCell>
                        <Cell dataKey="descricao" />
                    </Column>

                    <Column width={200} align="center">
                        <HeaderCell>Prazo solucao</HeaderCell>
                        <Cell dataKey="prazoSolucao" />
                    </Column>

                    <Column width={200} align="center">
                        <HeaderCell>Data de Criacao</HeaderCell>
                        <Cell dataKey="dataCriacao" />
                    </Column>

                    <Column width={200} align="center">
                        <HeaderCell>Data de Solucao</HeaderCell>
                        <Cell dataKey="dataSolucao" />
                    </Column>
                    <Column width={80} fixed="right">
                        <HeaderCell>Deletar</HeaderCell>

                        <Cell>
                            {rowData => (
                                <span>
                                    <a onClick={() => handleDelete(rowData.id)}><MdDelete /></a>
                                </span>
                            )}
                        </Cell>
                    </Column>
                </Table>
            </div>
        </div>
    </div>
);
}

export default Listagem;