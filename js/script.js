const transactionUl = document.querySelector('#transactions');
const incomeDisplay = document.querySelector('#money-plus');
const expenseDisplay = document.querySelector('#money-minus');
const balanceDisplay = document.querySelector('#balance');
const form = document.querySelector('#form');
const inputTransactionName = document.querySelector('#text');
const inputTransactionAmount = document.querySelector('#amount');

// Método para salvar as informações no localStorage
const localStorageTransactions = JSON.parse(localStorage
  .getItem('transactions'));
let transactions = localStorage
.getItem('transactions') !== null ? localStorageTransactions : []

// Método para remover uma transação
const removeTransaction = ID => {
  transactions = transactions.filter(transaction => 
    transaction.id !== ID);
  updateLocalStorage();
  init();
} // removeTransaction;

// Método de adicionar uma transação
const addTransactionIntoDOM = ({ amount, name, id }) => {
  // Obtendo o operador matemático
  const operator = amount < 0 ? '-' : '+';
  const CSSClass = amount < 0 ? 'minus' : 'plus';
  const amountWithoutOperator = Math.abs(amount);
  const li = document.createElement('li');

  li.classList.add(CSSClass);
  li.innerHTML = 
  ` 
    ${name} 
    <span>${operator} R$ ${amountWithoutOperator}</span>
    <button class="delete-btn" onClick="removeTransaction(${id})">x</button>
  `
  transactionUl.append(li);  
} // addTranscationIntoDOM;

// Método de recepimento de valores das despesas das transações
const getExpenses = transactionAmounts => Math.abs(transactionAmounts
  .filter(value => value < 0)
  .reduce((accumulator, value) => accumulator + value, 0))
  .toFixed(2); // getExpenses();

// Método reduce reduz o "array" para um único componente

// Método filter retorna um novo array que o filter estar gerando. O Método icome gerar um novo array usando o filter somanto os valores positivos
const getIncome = transactionAmounts => transactionAmounts
  .filter(value => value > 0)
  .reduce((accumulator, value) => accumulator + value, 0)
  .toFixed(2); //getIncome();

// Método para exibir o soldo total
const getTotal = transactionAmounts => transactionAmounts
  .reduce((accumulator, transaction) => accumulator + transaction, 0)
  .toFixed(2);

// Método de atualização das informações das transações
const updateBalanceValues = () => {
  const transactionAmounts = transactions.map(({ amount }) => amount);
  
  const total = getTotal(transactionAmounts);
  
  const income = getIncome(transactionAmounts);
    
  const expense = getExpenses(transactionAmounts);
  
  // Exibindo o soldo total no display
  balanceDisplay.textContent = `R$ ${total}`;
  // Exibindo o valor total das receitas no display
  incomeDisplay.textContent = `R$ ${income}`;
  // Exibindo o valor total despesas no display
  expenseDisplay.textContent = `R$ ${expense}`;

} // updateBalanceValues();

// A função init que executará o estado de preenchimento das aplicações quando a página for carregada
const init = () => {
  transactionUl.innerHTML = '';
  transactions.forEach(addTransactionIntoDOM);
  updateBalanceValues();
} // init();

init();

// Função que irá inserir as informações no localStorage
const updateLocalStorage = () => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Função para gerar ID aleatório
const generateID = () => Math.round(Math.random() * 1000);

// Método para adicionar as transações no array
const addToTransactionArray = (transactionName, transactionAmount) => {
  transactions.push({
    id: generateID(),
    name: transactionName,
    amount: Number(transactionAmount)
  });
} // addToTransactionArray();

// Método para limpar os inputs
const clearInputs = () => {
  inputTransactionName.value = '';
  inputTransactionAmount.value = '';
} // clearInputs();

// Método para adicionar os componentes do form
const handleFormSubmit = event => {
  event.preventDefault();

  const transactionName = inputTransactionName.value.trim();
  const transactionAmount = inputTransactionAmount.value.trim();
  const isSomeInputEmpty = transactionName === '' || transactionAmount === '';

  // Verificando se os inputs estão preenchidos
  if (isSomeInputEmpty) {
    alert('Por favor, preencha tanto o nome quando o valor da transação');
    return;
  }
  
  addToTransactionArray(transactionName, transactionAmount);
  init();
  updateLocalStorage();
  clearInputs();
 
} // form();

// Método de observação de eventos no form
form.addEventListener('submit', handleFormSubmit)