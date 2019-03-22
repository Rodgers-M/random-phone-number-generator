const randomPhoneNumbers = (done)=>{
    let numbers = []
    for (let i = 0; i < 10000; i++) {
      let low = 7572434
      let high =9824342
      numbers.push(Math.floor(Math.random() * (high - low + 1)) + low)
    }
    return done(numbers)
}

const randomPhoneInitial = (min, max)=> Math.floor(Math.random() * (max - min)) + min;

module.exports = {
  randomPhoneNumbers,
  randomPhoneInitial,
}
