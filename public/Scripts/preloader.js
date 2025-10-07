        const counter = document.querySelector('.count');
        const loader = document.querySelector('.loader');

        let count = 0;
        const timer = setInterval(function() {
        count++;
        counter.textContent = count + '%';
        if (count === 100) {
            clearInterval(timer);
            loader.classList.add('done');
            }
        }, 40);