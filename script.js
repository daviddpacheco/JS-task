// Array para armazenar as tarefas
const tasks = [];

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskTable = document.querySelector("table tbody");

// Adiciona tarefa ao array e atualiza a tabela
taskForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const novatask = taskInput.value;
  if (novatask) {
    const autor = prompt("Informe o autor da tarefa:");
    const departamento = prompt("Informe o departamento da tarefa:");
    const duracao = prompt("Informe a duração da tarefa:");
    
    // Solicita a importância da tarefa com um menu suspenso
    const selecionarimportancia = prompt("Escolha a importância da tarefa:\nVerde, Amarelo, Vermelho");
    const importancia = ["Verde", "Amarelo", "Vermelho"].includes(selecionarimportancia) ? selecionarimportancia : "Não informado";

    const newTask = {
      descricao: novatask,
      autor: autor || "Não informado",
      departamento: departamento || "Não informado",
      duracao: duracao || "Não informado",
      importancia: importancia   
    };

    tasks.push(newTask);

    updateTaskTable();
    taskInput.value = "";
  }
});

// Remove tarefa do array e atualiza a tabela
function removeTask(index) {
  tasks.splice(index, 1);
  updateTaskTable();
}

// Atualiza a tabela de tarefas na página
function updateTaskTable() {
  taskTable.innerHTML = "";
  tasks.forEach((task, index) => {
    const row = document.createElement("tr");
    
    const descricaoCell = document.createElement("td");
    descricaoCell.textContent = task.descricao;

    const autorCell = document.createElement("td");
    autorCell.textContent = task.autor;

    const departamentoCell = document.createElement("td");
    departamentoCell.textContent = task.departamento;

    const duracaoCell = document.createElement("td");
    duracaoCell.textContent = task.duracao;

    const importanciaCell = document.createElement("td");
    importanciaCell.textContent = task.importancia;

    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.addEventListener("click", () => removeTask(index));
    removeButtonCell.appendChild(removeButton);
    
    row.appendChild(descricaoCell);
    row.appendChild(autorCell);
    row.appendChild(departamentoCell);
    row.appendChild(duracaoCell);
    row.appendChild(importanciaCell);
    row.appendChild(removeButtonCell);
    taskTable.appendChild(row);
  });
}

// Atualiza a tabela de tarefas inicial
updateTaskTable();
