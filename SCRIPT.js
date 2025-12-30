function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });
    document.getElementById(`step-${stepNumber}`).classList.remove('hidden');
}

function handleNo() {
    // 1. Change the image to angry cat
    document.getElementById('main-cat').src = 'cat-angry.png';
    // 2. Change the text
    document.getElementById('main-text').innerHTML = 'HOW DARE YOUUU!<br>Click YES!';
    // 3. Make the NO button move randomly
    let btn = document.getElementById('no-btn');
    let x = Math.random() * (window.innerWidth - btn.offsetWidth);
    let y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
}

function revealPhoto() {
    document.getElementById('photo-reveal').classList.remove('hidden');
    document.getElementById('final-wish').classList.remove('hidden');
    document.getElementById('camera-btn').classList.add('hidden');
    document.getElementById('camera-cat').classList.add('hidden');
    document.getElementById('smile-text').classList.add('hidden');
}