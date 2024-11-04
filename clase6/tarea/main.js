
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ&0123456789';
    let password = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = generateRandomNumber(0, characters.length - 1);
      password += characters.charAt(randomIndex);
    }
  
    return password;
  }
  
  const generateButton = document.getElementById('generate');
  const passwordDisplay = document.getElementById('password');
  const lengthInput = document.getElementById('length');
  
  generateButton.addEventListener('click', () => {
    const passwordLength = lengthInput.value;
    const generatedPassword = generatePassword(passwordLength);
    passwordDisplay.textContent = generatedPassword;
  });