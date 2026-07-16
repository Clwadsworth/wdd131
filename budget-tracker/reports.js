import { expenses } from './data.js';

const historyBody = document.getElementById('history-table');
const categoryFilter = document.getElementById('category-filter');

function renderTransactions(expenseList) {
    historyBody.innerHTML = '';
    expenseList.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td>${expense.description}</td>
            <td>$${expense.amount.toFixed(2)}</td>
        `;
        historyBody.appendChild(row);
    });
}

function filterByCategory(category) {
    if (category === 'All') {
        renderTransactions(expenses);
    } else {
        const filtered = expenses.filter(expense => expense.category === category);
        renderTransactions(filtered);
    }
}

categoryFilter.addEventListener('change', (event) => {
    filterByCategory(event.target.value);
});

renderTransactions(expenses);