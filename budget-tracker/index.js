import { expenses, budgetLimits } from './data.js';

const modal = document.getElementById('expense-modal');
const addExpenseButton = document.getElementById('add-expense-button');
const cancelButton = document.getElementById('cancel-expense-button');
const expenseForm = document.getElementById('expense-form');
const transactionsBody = document.getElementById('recent-transactions');

function openExpenseForm() {
    addExpenseButton.addEventListener('click', () => {
        modal.classList.add('active');
    });
    cancelButton.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

function calculateTotals(expenseList) {
    return expenseList.reduce((totals, expense) => {
        totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
        return totals;
    }, {});
}

function checkBudget(totals, limits) {
    const overBudgetCategories = [];
    for (const category in totals) {
        if (totals[category] > limits[category]) {
            console.warn(`${category} is over budget!`);
            overBudgetCategories.push(category);
        }
    }
    return overBudgetCategories;
}

function renderTransactions(expenseList) {
    transactionsBody.innerHTML = '';
    const recent = expenseList.slice(-4);
    recent.forEach(expense => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${expense.date}</td>
            <td>${expense.category}</td>
            <td>${expense.description}</td>
            <td>$${expense.amount.toFixed(2)}</td>
        `;
        transactionsBody.appendChild(row);
    });
}

function updateSummaryCards(totals) {
    const totalSpent = Object.values(totals).reduce((sum, val) => sum + val, 0);
    const totalBudget = Object.values(budgetLimits).reduce((sum, val) => sum + val, 0);
    document.getElementById('total-spent').textContent = `$${totalSpent.toFixed(2)}`;
    document.getElementById('budget-remaining').textContent = `$${(totalBudget - totalSpent).toFixed(2)}`;
    document.getElementById('categories').textContent = Object.keys(totals).length;
}

expenseForm.addEventListener('submit', function addExpense(event) {
    event.preventDefault();
    const newExpense = {
        category: document.getElementById('category-selection').value,
        amount: parseFloat(document.getElementById('amount').value),
        description: document.getElementById('description').value,
        date: document.getElementById('date').value.split('-').slice(1).join('/'),
        account: document.getElementById('account').value
    };
    expenses.push(newExpense);
    modal.classList.remove('active');
    expenseForm.reset();
    const totals = calculateTotals(expenses);
    const overBudget = checkBudget(totals, budgetLimits);
        if (overBudget.length > 0) {
            alert(`You are over budget in: ${overBudget.join(', ')}`);
        }
    renderTransactions(expenses);
    updateSummaryCards(totals);
});

openExpenseForm();
const initialTotals = calculateTotals(expenses);
checkBudget(initialTotals, budgetLimits);
renderTransactions(expenses);
updateSummaryCards(initialTotals);