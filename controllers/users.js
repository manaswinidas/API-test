let users = {
  asutosh: {
      id: 1,
      name: 'Asutosh Panda',
      password: 'howudoing'
  },
  amitosh: {
    id: 2,
    name:'Amitosh Swain Mohapatra',
    password: 'Mankada'
  },
  megha:{
    id: 3,
    name:'Megha Priyadarshini',
    password: 'tuchupreh'
  }
}

function check(username, password){
    let user=users[username];
    if(user){
      if(user.password === password){
        return {
          user
        };
      }
      return {
        error:true,
        message:'Password Incorrect',
      }
    }
    return{
      error: true,
      message: 'User not Found',
    };
  }

module.exports = {
  check,
}
