function submitForm() {
    const formData = {
        name: document.getElementById('name').value,
        number: document.getElementById('Phone_no').value,
        friendName: document.getElementById('friend').value,
        friendNumber: document.getElementById('friend_no').value,
        location: document.getElementById('location').value
    };

    alert("Form submitted!");

    document.getElementById('name').value = '';
    document.getElementById('Phone_no').value = '';
    document.getElementById('friend').value = '';
    document.getElementById('friend_no').value = '';
    document.getElementById('location').value = '';
}