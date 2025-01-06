document.addEventListener("DOMContentLoaded", function() {
    const addIncomeButton = document.getElementById("add-income");
    const addExpenseButton = document.getElementById("add-expense");
    const transactionForm = document.getElementById("transaction-form");
    const submitTransactionButton = document.getElementById("submit-transaction");
    const categoryDropdown = document.getElementById("category");

    // Alternar exibição da tabela de formulário ao clicar nos botões de adicionar receita/despesa
    function toggleTransactionForm() {
        if (transactionForm.style.display === "none") {
            resetForm();
            transactionForm.style.display = "block";
        } else {
            transactionForm.style.display = "none";
        }
    }

    // Resetar o formulário para garantir campos em branco
    function resetForm() {
        document.getElementById("description").value = "";
        document.getElementById("value").value = "";
        document.getElementById("date").value = "";
        categoryDropdown.selectedIndex = 0;
    }

    // Funções para abrir/fechar a tabela de formulário
    addIncomeButton.addEventListener("click", toggleTransactionForm);
    addExpenseButton.addEventListener("click", toggleTransactionForm);

    // Lidar com o envio de receita/despesa
    submitTransactionButton.addEventListener("click", function() {
        const description = document.getElementById("description").value;
        const value = document.getElementById("value").value;
        const date = document.getElementById("date").value;
        const selectedCategory = categoryDropdown.value;

        // Localizar a categoria selecionada para inserir os dados
        const categoryDiv = document.querySelector(`.category[data-category="${selectedCategory}"]`);
        const staticTableBody = categoryDiv.querySelector(".static-table tbody");

        // Inserir nova linha na tabela estática da categoria
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${description}</td>
            <td>${value}</td>
            <td>${date}</td>
            <td><button class="remove-entry">Remover</button></td>
        `;
        staticTableBody.appendChild(newRow);

        // Ocultar formulário após adicionar e resetá-lo
        transactionForm.style.display = "none";
        resetForm();
    });

    // Lógica para remover entradas na tabela estática de uma categoria
    document.querySelectorAll(".static-table tbody").forEach(tbody => {
        tbody.addEventListener("click", function(event) {
            if (event.target.classList.contains("remove-entry")) {
                const row = event.target.closest("tr");
                row.remove();
            }
        });
    });

    // Exibir e ocultar detalhes das categorias ao clicar no "+"
    document.querySelectorAll(".toggle-view").forEach(button => {
        button.addEventListener("click", function() {
            const categoryDetails = button.nextElementSibling;
            categoryDetails.style.display = categoryDetails.style.display === "none" ? "block" : "none";
        });
    });
});

