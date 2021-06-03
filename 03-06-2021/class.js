class Person {
  constructor(name, email, skills = []) {
    this.name = name;
    this.email = email;
    this.skills = skills;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  addSkill(skill) {
    this.skills.push(skill);
  }

  getSkills() {
    return this.skills;
  }
}

const person1 = new Person("Mohan", "mohan@dev.com", ["Programming", "Badminton"]);
person1.setName("Mohan Singh");
person1.addSkill("Chess");
console.log(person1.getSkills());
console.log(person1);
