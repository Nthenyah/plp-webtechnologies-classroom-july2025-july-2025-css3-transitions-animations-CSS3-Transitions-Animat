// Global variable to demonstrate scope
let globalMessage = "I'm a global variable";

// Function demonstrating local vs global scope
function demoScope() {
    let localMessage = "I'm a local variable";
    const result = `Global: ${globalMessage} | Local: ${localMessage}`;
    document.getElementById('scope-result').textContent = result;
}

// Function with parameters and return value
function multiplyNumbers(a, b) {
    return a * b;
}

// Function to trigger CSS animations
function triggerAnimation(animationType) {
    const box = document.getElementById('animated-box');
    box.classList.remove('bounce', 'spin', 'fade');
    void box.offsetWidth;
    box.classList.add(animationType);
    
    setTimeout(() => {
        box.classList.remove(animationType);
    }, 2000);
}