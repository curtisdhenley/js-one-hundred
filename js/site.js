// get the user input from the page
// Controller function
function getValues() {

    // get the values from the page
    let startValue = document.getElementById('startValue').value;

    let endingValue = document.getElementById('endingValue').value;

    // parse string into ints
    startValue = parseInt(startValue);

    endingValue = parseInt(endingValue);

    // verify inputs are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endingValue)) {
        // if they are, generate numbers
        let numbersArray = generateNumbers(startValue, endingValue);

        // then display them on the page
        displayNumbers(numbersArray);

    } else {
        // if they are not, tell our user!
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only whole numbers are allowed for One Hundred!'
            }
        );
    }
}

// generate our numbers
// Logic function
function generateNumbers(start, end) {

    let numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;
}

// display them on the page
// View function
function displayNumbers(numArr) {

    let tableBody = document.getElementById('results');

    let tableHTML = '';

    for (let i = 0; i < numArr.length; i++) {
        let value = numArr[i];
        let className = '';

        if (value % 2 === 0) {
            className = 'even';
        } else {
            className = 'odd'
        }
        
        let tableRow = `<tr><td class='${className}'>${value}</td></tr>`;
        tableHTML += tableRow;
    }

    tableBody.innerHTML = tableHTML;
}