document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        const jobTitle = this.previousElementSibling.previousElementSibling.innerText; 
        document.getElementById('job').value = jobTitle; 
        document.getElementById('application-form').style.display = 'block'; 
    });
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('応募が送信されました！'); 
    document.getElementById('application-form').style.display = 'none'; 
    document.getElementById('form').reset(); 
});

document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('application-form').style.display = 'none'; 
});

