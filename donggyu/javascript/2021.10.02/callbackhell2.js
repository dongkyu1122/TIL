class UserStorge {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(id==='ellie'&&password==='dream'||id==='coder'&&password==='academy') {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user==='ellie') {
        onSuccess({name:user, role:'admin'})
      } else {
        onError(new Error('no access'))
      }
    },ㅏ1000)
  }     
}

const userStorge = new UserStorge
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorge.loginUser(
  id,
  password,
  user=>{
    userStorge.getRoles(
      user,
      userWithRole=>{
        alert(`hello ${userWithRole.name} you have a ${userWithRole.role}`)
      },
      error=>{console.log('error')}
    )
  },
  error=>{console.log('error')}
)