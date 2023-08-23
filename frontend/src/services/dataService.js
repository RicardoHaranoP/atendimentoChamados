import api from "./api.js";

class DataService{



    //métodos axios relacionados a Categoria
    getChamados() {
        return api.get(`/chamados`);
    }
    
    createChamados(data){
        return api.post(`/chamados`, data);
    }

    deleteChamado(id){
        return api.delete(`/chamados/${id}`)
    }

    //métodos axios relacionados a Categoria
    getCategorias() {
        return api.get(`/categorias`);
    }
    
    createCategoria(data){
        return api.post(`/categoria`, data);
    }


}

export default new DataService();