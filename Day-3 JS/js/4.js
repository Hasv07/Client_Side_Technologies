function rangeDisplay(x,y,z) {
    if (isNaN(x) || isNaN(y) || typeof z !== 'string') {
        console.log('Please enter valid numeric values for x and y, and a string for z.');
        return;
    }


    let sum=0;

    switch (z) {
        case 'odd':
            for (let i = x; i <= y; i++) {
                if (i % 2 !== 0) {
                    console.log(`%c${i}`,'color:brown');
                    sum+=i;
                }
            }
            break;
        case 'even':
            for (let i = x; i <= y; i++) {
                if (i % 2 === 0) {
                    console.log(`%c ${i}`,'color:brown');
                    sum+=i;
                }
        }
        break;
        case 'no':
            for (let i = x; i <= y; i++) {
                console.log(`%c ${i}`,'color:brown');
                sum+=i;      
            }
        break;
        default:
            console.log('Invalid value for z. Please enter "odd", "even", or "no".');
        break;
    }

    console.log(`%cSum: ${sum}`,'color:green');
}
