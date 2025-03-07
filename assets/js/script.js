// Industries 

document.querySelectorAll('.highlight-item').forEach(item => {
    item.addEventListener('click', function () {
        // Remove active class from all items
        document.querySelectorAll('.highlight-item').forEach(el => el.classList.remove('active'));

        // Add active class to the clicked item
        this.classList.add('active');

        // Change background image
        const newImage = this.getAttribute('data-image');
        document.querySelector('.right-section').style.backgroundImage = `url('${newImage}')`;

        // Update overlay content
        const newDescription = this.getAttribute('data-description');
        document.querySelector('#overlay-content p').textContent = newDescription;
    });
});


// How we work

document.addEventListener('DOMContentLoaded', function() {
    const progress = document.getElementById('progress');
    const back = document.getElementById('back');
    const next = document.getElementById('next');
    const wraps = document.querySelectorAll('.text-wrap');

    let currentActive = 1;

    function update() {
        wraps.forEach((wrap, index) => {
            if (index < currentActive) {
                wrap.classList.add('active');
            } else {
                wrap.classList.remove('active');
            }
        });

        const actives = document.querySelectorAll('.active');
        progress.style.width = ((actives.length - 1) / (wraps.length - 1)) * 80 + '%';

        if (currentActive === 1) {
            back.disabled = true;
        } else if (currentActive === wraps.length) {
            next.disabled = true;
        } else {
            back.disabled = false;
            next.disabled = false;
        }
    }

    function autoProgress() {
        currentActive++;
        if (currentActive > wraps.length) {
            currentActive = 1;
        }
        update();
    }


    setInterval(autoProgress, 2000);


    update();
});
