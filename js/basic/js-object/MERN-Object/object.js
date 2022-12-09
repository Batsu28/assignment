const users = [
  {
    name: "Alex",
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 45,
    isLoggedIn: false,
    points: 30,
  },
  {
    name: "Job",
    email: "job@job.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    name: "Brook",
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 39,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Daniel",
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "John",
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    name: "Thomas",
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 18,
    isLoggedIn: false,
    points: 40,
  },
  {
    name: "Paul",
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 40,
  },
];

function search(input) {
  for (let n = 0; n < input.length; n++) {
    if (input[n].name === searchUser) {
      return input[n];
    }
  }
}

function mostSkill(input) {
  for (let n = 0; n < input.length; n++) {
    let i = 0;
    if (input[n].skills.length > input[i].skills.length) {
      return "Name:\t " + input[n].name + "\n" + "Skills:\t " + input[n].skills;
    } else {
      i++;
    }
  }
}

function highPoints(input) {
  let count = 0;
  let count2 = 0;
  let output = "";
  for (let n = 0; n < input.length; n++) {
    if (input[n].isLoggedIn) {
      count++;
    }
    if (input[n].points >= 50) {
      count2++;
    }
  }
  output =
    "there are " +
    count +
    " isLoggedIn users" +
    "\n" +
    count2 +
    " user has 50 point";
  return output;
}

function selectedSkill(input) {
  let request = ["MongoDB", "Express", "React", "Node"];
  let output = "";
  for (let n = 0; n < input.length; n++) {
    for (let i = 0; i < input[n].skills.length; i++) {
      if (request.includes(input[n].skills[i])) {
        output += input[n];
      }
    }
    output += "\n";
  }
  return output;
}

console.table(selectedSkill(users));
