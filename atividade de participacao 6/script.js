const btnGetAll = document.getElementById("btnGetAll");
const btnGetById = document.getElementById("btnGetById");
const inputPostId = document.getElementById("postId");
const btnPost = document.getElementById("btnPost");
const btnUpdate = document.getElementById("btnUpdate");
const btnDelete = document.getElementById("btnDelete");

btnGetAll.addEventListener("click", async()=>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        if(!response.ok){
            throw new Error(`Erro ao coletar as informações: ${response.status}`)
        }
        
        const data = await response.json();
        showOutput(data);
    }catch(error){
        showOutput({erro: error.message});
    }
});

btnGetById.addEventListener("click", async()=>{
    try{
        const id = inputPostId.value;
        if(!id){
            showOutput({ erro: "Por favor, digite um ID válido." });
            return;
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if(!response.ok){
            throw new Error(`Post não encontrado (status ${response.status})`);
        }
        const data = await response.json();
        showOutput(data);
    }catch(error){
        showOutput({erro: error.message});
    }
});

btnPost.addEventListener("click", async () => {
    const title = "Título inserido";
    const body = "Corpo inserido";

    if(!title || !body) {
        showOutput({ erro: "Preencha o título e o conteúdo do post." });
        return;
    }

    //simulação de um novo valor a ser inserido no JSON
    const newPost = {
        title: title,
        body: body,
        userId: 1
    };

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        if(!response.ok) {
            throw new Error(`Erro ao criar post (status ${response.status})`);
        }

        const data = await response.json();
        showOutput(data);
    }catch(error){
        showOutput({ erro: error.message });
    }
});

btnUpdate.addEventListener("click", async()=>{
    try{
        const id=1;
        const newTitle = "Título atualizado"
        const newBody = "Corpo atualizado"

        const newPost = {
            id:id,
            title: newTitle,
            body: newBody,
            userId: 1
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });
        const data = await response.json();
        showOutput(data);

        if (!response.ok) {
            throw new Error(`Erro ao atualizar post (status ${response.status})`);
        }
    }catch(error){
        showOutput({ erro: error.message });
    }
});

btnDelete.addEventListener("click", async () => {
    try {
        const id = 1; // ID fixo
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error(`Erro ao deletar o post (status ${response.status})`);
        }

        showOutput(`Post com ID ${id} deletado com sucesso.`);
    } catch (error) {
        showOutput({ erro: error.message });
    }
});
function showOutput(data) {
    const output = document.getElementById("output");
    output.value = typeof data === "string" ? data : JSON.stringify(data, null, 2);
}

