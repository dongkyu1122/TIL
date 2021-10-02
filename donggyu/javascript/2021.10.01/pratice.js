class UserStorge {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if(id === 'ellie' && password === 'dream' || id === 'coder' && password === 'academy') {
        onSuccess(id)
      } else {
        onError(new Error('not found'))
      }
    }, 2000)
  }

  get Roles(user, onSuccess, onError) {
    setTimeout(() => {
      if(user === 'ellie') {
        onSuccess({name: 'ellie', role: 'admin'})
      } else {
        onError(new Error('no access'))
      }
    }, 1000) 
  }
}

const userStorge = new UserStorge()
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorge.loginUser(
  id,
  password,
  user => {
    userStorge.getRoles(
      user,
      userWiteRole => {
        alert(`hello${userWiteRole.name} you have a${userWiteRole.role}`)
      }
    )
  },
  error => console.log('error')
)