const dog1 = { name: 'λ­μΉ', emoji: 'πΆ' };
const dog2 = { name: 'μ½μ½', emoji: 'π©' };

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // ν΄λΉ μμ±μ ν¨μλ₯Ό λ³΄μμ λ λ§λ€μ΄μ§λλ§λ€
  // ν¨μκ° μκΉ. μΈμ€ν΄μ€λ λ²¨μ ν¨μ
  // κ΅μ₯ν λΉν¨μ¨μ , κ·Έλ κΈ°μ νλ‘ν νμ λ λ²¨μ ν¨μλ‘ λ§λ€μ΄μ ΈμΌνλ€.
  //   this.printName = () => {
  //     console.log(`${this.name} ${this.emoji}`);
  //   };
}

// νλ‘ν νμ λ λ²¨μ ν¨μ
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

const cat = new Animal('λμΉμ΄', 'π±');
console.log(cat.printName());

// μ€λ²λΌμ΄λ©
// μΈμ€ν΄μ€ λ λ²¨μμ(μμ) λμΌν μ΄λ¦μΌλ‘ ν¨μλ₯Ό μ¬μ μ νλ©΄ (μ€λ²λΌμ΄λ© νλ©΄)
// νλ‘ν νμ λ λ²¨μ(λΆλͺ¨) ν¨μμ νλ‘νΌν°λ κ°λ €μ§λ€. (μλμ λλ€).
// dog1.printName = function (){
//  console.log('μλ')
//}

// μ μ  λ λ²¨
Animal.hello = () => {
  console.log('μΊ‘μν λμ΄μμ');
};
