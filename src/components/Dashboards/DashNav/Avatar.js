function createAvatar(email) {
    // Extract the first character of the email (assuming it's a letter)
    const firstChar = email.charAt(0).toUpperCase();
  
    // Create a div element for the avatar with a class for styling
    const avatar = document.createElement('div');
    avatar.className = 'avatar';
  
    // Set the first character as the avatar's text content
    avatar.textContent = firstChar;
  
    // You can add additional CSS styles to customize the appearance of the avatar
    // For example, you can set the background color, font size, and font color
  
    // Return the generated avatar element
    return avatar;
  }

  export default createAvatar;