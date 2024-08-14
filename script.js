const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const convertButton = document.getElementById("convert");
const resultText = document.getElementById("result");

const apiKey = "64d417f2662bf8f463236f6d"; // Replace with your free API key from an exchange rate service (e.g., exchangerate-api.com)

convertButton.addEventListener("click", () => {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (amount && fromCurrency && toCurrency) {
    fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          const convertedAmount = data.conversion_result;
          resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
            2
          )} ${toCurrency}`;
        } else {
          resultText.textContent = "Error converting currency.";
        }
      })
      .catch((error) => {
        resultText.textContent = "Error fetching exchange rates.";
      });
  } else {
    resultText.textContent = "Please enter all fields.";
  }
});
