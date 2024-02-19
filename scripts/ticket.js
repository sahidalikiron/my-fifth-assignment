const allBtn = document.getElementsByClassName('add-btn');
let count = 0;
let selectTicket = 0;

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        if (selectTicket < 4) {
            selectTicket++;
            count = count + 1;
            document.getElementById('select-seat').innerText = count;
            btn.classList.add('bg-green-400');
            btn.classList.add('text-white');
        }
        else {
            alert('sorry, a person can buy maximum 4 tickets');
            return;
        }




        const price = document.getElementById('ticket-price').innerText;


        const selectPrice = document.getElementById('selected-price-container');

        const li = document.createElement('li');

        const seatNumberText = btn.innerText;


        const p1 = document.createElement('p');
        p1.innerText = seatNumberText;

        const p2 = document.createElement('p');
        p2.innerText = 'Economy';

        const p3 = document.createElement('p');
        p3.innerText = price;


        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        selectPrice.appendChild(li);


        const totalPrice = document.getElementById('total-price').innerText;
        const convertTotalPrice = parseInt(totalPrice);
        const sum = convertTotalPrice + parseInt(price);
        document.getElementById('total-price').innerText = sum;


        const grandTotal = document.getElementById('grand-total').innerText;
        const convertGrandTotal = parseInt(grandTotal);
        const sum2 = convertGrandTotal + parseInt(price);
        document.getElementById('grand-total').innerText = sum2;


        const seat = document.getElementById('seat-left').innerText;
        let seatLeft = seat - 1;
        document.getElementById('seat-left').innerText = seatLeft;

        btn.disabled = 'true';
    })
}







