module.exports = function createDreamTeam( members ){
  let nameTeam = []
  if(Array.isArray(members)){
      members.forEach(item => {
      if(typeof(item) == "string"){
          let letter = item.trim().toLocaleLowerCase()
          nameTeam.push(letter[0]);
          }
      })
      return nameTeam.sort().join('').toLocaleUpperCase();
  }else{
      return false;
  }
  
}
