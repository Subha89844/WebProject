function selectOption(option, price) {
    // Remove "selected" class from all options
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

    // Add "selected" class to clicked option
    let selectedOption = document.querySelector(`#pair${option}`).parentElement;
    selectedOption.classList.add('selected');

    // Update total price
    document.getElementById('totalPrice').innerText = `DKK ${price}.00`;
}
