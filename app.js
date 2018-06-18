document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJSON);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
  .then(response => response.text())
  .then(data => document.getElementById('output').innerHTML = data)
  .catch(error => console.log(error));
}

// Get local JSON data
function getJSON() {
  fetch('posts.json')
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(error => console.log(error));
}

// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => {
    let output = '';
    data.forEach(function(user){
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(error => console.log(error));
}