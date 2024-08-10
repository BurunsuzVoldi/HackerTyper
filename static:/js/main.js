document.addEventListener('keypress', function() {
    const display = document.getElementById('code-display');
    const randomCode = "import random\n\n# Simulated Python code\n\ndef generate_code():\n    print('Hello, world!')\n";
    
    display.innerText += randomCode;
});
