import AV from 'leancloud-storage'

var APP_ID = 'iFHEXxI5US1FIIsWLYmpoxE9-gzGzoHsz'
var APP_KEY = '0q7rp6K8yeTsfkw51xJs1W6L'

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
})

export default AV

export function signUp(email,username,password,successFn,errorFn){
    //新建AVUser对象实例
    var user = new AV.User()
    //设置用户名
    user.setUsername(username)
    //设置密码
    user.setPassword(password)
    //设置邮箱
    user.setEmail(email)

    user.signUp().then(function(loginedUser){
        let user = getUserFromAVUser(loginedUser)
        successFn.call(null,user)
    },function(error){
        errorFn.call(null,error)
    })

    return undefined
}


export function signIn(username,password,successFn,errorFn){
    AV.User.logIn(username,password).then(function(loginedUser){
        let user = getUserFromAVUser(loginedUser)
        successFn.call(null,user)
    },function(error){
        errorFn.call(null,error)
    })
}

export function getCurrentUser(){
    let user = AV.User.current()
    if(user){
        return getUserFromAVUser(user)
    }else{
        return null
    }
}

export function signOut(){
    AV.User.logOut()
    return undefined
}
export function sendPasswordResetEmail(email,successFn,errorFn){
    AV.User.requestPasswordReset(email).then(function(success) {
        successFn.call()
    }, function(error){
        errorFn.call(null,error)
    })
}

function getUserFromAVUser(AVUser){
    return {
        id: AVUser.id,
        ...AVUser.attributes
    }
}