export class Personas {
  names: string;
  bloodline: string;
  age: number;
  life: boolean;
  constructor(names: string, bloodline: string, age: number, life: boolean) {
    this.names = names;
    this.bloodline = bloodline;
    this.age = age;
    this.life = life;
  }
}

// Class kingRank extends Personas {
//   reigntime: number;
//   message: string;
//   constructor(reigntime: number, message: string) {
//     super(names, bloodline, age, life);
//     this.reigntime = reigntime;
//     this.message = message;
//   }
// }
