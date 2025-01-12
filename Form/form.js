document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        role: document.getElementById('role').value,
        recommend: document.querySelector('input[name="recommend"]:checked')?.value || "No answer",
        languages: Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(el => el.value),
        comment: document.getElementById('comment').value.trim()
    };

    console.log(formData);
});
