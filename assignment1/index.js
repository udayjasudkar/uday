const form = document.getElementById('doctorForm');
const table = document.querySelector('#doctorTable tbody');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const docId = document.getElementById('docId').value;
  const specialization = document.getElementById('specialization').value;
  const experience = parseInt(document.getElementById('experience').value);
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;

  const role = experience > 5 ? 'Senior' : experience >= 2 ? 'Junior' : 'Trainee';

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${name}</td>
    <td>${docId}</td>
    <td>${specialization}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  table.appendChild(row);

  row.querySelector('.delete-btn').addEventListener('click', () => {
    table.removeChild(row);
  });

  form.reset();
});
