const table = document.querySelector('table');
const total = document.querySelector('.total');

const products = [['bag', 100], ['belt', 200], ['bottle', 300]];
let qtyelements = [];
let qty = [];

const rates = document.createElement('tr');
for (let i=0;i<products.length;i++) {
    const td = document.createElement('td');
    td.textContent = 'Rs ' + products[i][1];
    rates.appendChild(td);
    table.appendChild(rates);
}

const images = document.createElement('tr');
for (let i=0;i<products.length;i++) {
    const td = document.createElement('td');
    const img = document.createElement('img');
    img.src = 'products/' + products[i][0] + '.jpg';
    td.appendChild(img);
    images.appendChild(td);
    table.appendChild(images);

    img.addEventListener('click', () => {
        qtyelements[i].textContent++;
        total.textContent = parseInt(total.textContent) + products[i][1];
    });
}

const qtyrow = document.createElement('tr');
for (let i=0;i<products.length;i++) {
    const td = document.createElement('td');
    td.textContent = 0;
    total.textContent = 0;
    qtyelements.push(td);
    qty.push(0);
    qtyrow.appendChild(td);
    table.appendChild(qtyrow);
}

const buttons = document.createElement('tr');
for (let i=0;i<products.length;i++) {
    const td = document.createElement('td');
    const minusbtn = document.createElement('button');
    minusbtn.textContent = '-';
    td.appendChild(minusbtn);
    buttons.appendChild(td);
    table.appendChild(buttons);

    minusbtn.addEventListener('click', () => {
        if (parseInt(total.textContent) >= products[i][1] && parseInt(qtyelements[i].textContent) > 0) total.textContent -= products[i][1];
        if (qtyelements[i].textContent > 0) qtyelements[i].textContent--;
    })
}