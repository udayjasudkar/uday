const founders = [
  {
    name: "Vijay Shekhar Sharma",
    role: "Founder & CEO",
    company: "Paytm",
    image: "founders/1.jpg"
  },
  {
    name: "Kunal Shah",
    role: "Founder",
    company: "CRED",
    image: "founders/2.jpg"
  },
  {
    name: "Amrish Rau",
    role: "CEO",
    company: "Pine Labs",
    image: "founders/3.jpg"
  },
  {
    name: "Sampad Swain",
    role: "Co-Founder & CEO",
    company: "Instamojo",
    image: "founders/4.jpg"
  },
  {
    name: "Ankush Sachdeva",
    role: "Co-Founder & CEO",
    company: "ShareChat",
    image: "founders/5.jpg"
  },
  {
    name: "Bhanu Pratap Singh",
    role: "Co-Founder & CEO",
    company: "ShareChat",
    image: "founders/6.jpg"
  },
  {
    name: "Farid Ahsan",
    role: "Co-Founder & CEO",
    company: "ShareChat",
    image: "founders/7.jpg"
  },
  {
    name: "Amit Kumar Agrawal",
    role: "Co-Founder & CEO",
    company: "NoBroker",
    image: "founders/8.jpg"
  },
  {
    name: "Akhil Gupta",
    role: "Co-Founder & CEO",
    company: "NoBroker",
    image: "founders/9.jpg"
  },
  {
    name: "Saurabh Garg",
    role: "Co-Founder & CEO",
    company: "NoBroker",
    image: "founders/10.jpg"
  },
   {
    name: "Vipin Pathak",
    role: "Co-Founder & CEO",
    company: "Care24",
    image: "founders/11.jpg"
  },
   {
    name: "Ramakanth Sharma",
    role: "Co-Founder & CEO",
    company: "NoBroker",
    image: "founders/12.jpg"
  },
  // Add more objects here similarly
];

const grid = document.getElementById('founderGrid');

founders.forEach(f => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${f.image}" alt="${f.name}">
    <div class="name">${f.name}</div>
    <div class="role">${f.role}</div>
    <div class="company">${f.company}</div>
  `;
  grid.appendChild(card);
});

 