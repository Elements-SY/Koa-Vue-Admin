import { setCookie, getCookie, removeCookie } from '@/utils/auth'
import { login, logout, menu_list } from '@/http'

const state = {
  userName: "",
  nickName: "",
  sex: "",
  age: "",
  birth: "",
  job: "",
  hobby: "",
  tel: "",
  address: "",
  avatars: "",
  role: "",
  token: '',
  meunData: []
}

if (getCookie() !== undefined) {
  const accountInfo = JSON.parse(getCookie())
  state.userName = accountInfo.userName
  state.nickName = accountInfo.nickName
  state.sex = accountInfo.sex
  state.age = accountInfo.age
  state.birth = accountInfo.birth
  state.job = accountInfo.job
  state.hobby = accountInfo.hobby
  state.tel = accountInfo.tel
  state.avatars = accountInfo.avatars
  state.role = accountInfo.role
  state.token = accountInfo.token
  // console.log(state)
}
const getters = {
  userName: state => state.userName,
  nickName: state => state.nickName,
  avatars: state => state.avatars,
  job: state => state.job,
  hobby: state => state.hobby,
  token: state => state.token,
};

const mutations = {
  SET_TOKEN: (state, accountInfo) => {
    state.userName = accountInfo.userName
    state.nickName = accountInfo.nickName
    state.sex = accountInfo.sex
    state.age = accountInfo.age
    state.birth = accountInfo.birth
    state.job = accountInfo.job
    state.hobby = accountInfo.hobby
    state.tel = accountInfo.tel
    state.role = accountInfo.role
    state.avatars = accountInfo.avatars
  },

  REMOVE_TOKEN: (state, data) => {
    state.token = null;
  },

  SET_MENU: (state, menu) => {
    state.meunData = menu
  }
}

const actions = {
  // 登录
  Login({ commit }, userInfo) {
    const { accountName, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ account: accountName.trim(), password: password }).then(res => {
        const { accountInfo } = res.data
        if (res.data.code == 200) {
          commit('SET_TOKEN', accountInfo)
          setCookie(accountInfo)
        }
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 退出
  LoginOut({ commit }, userInfo) {
    const { id, token } = userInfo
    return new Promise((resolve, reject) => {
      logout({ id: id, token: token }).then(res => {
        const { data } = res
        if (data.code == 200) {
          commit('REMOVE_TOKEN', null)
          removeCookie()
        }
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 获取菜单
  fetchMenu({ commit }, roles) {
    return new Promise((resolve, reject) => {
      menu_list({ auth: roles[0] }).then(res => {
        const { data } = res
        if (data.code == 200) {
          let menu = data.data.menuList
          commit('SET_MENU', menu)
        }
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  // link: https://vuex.vuejs.org/zh/guide/modules.html#%E5%91%BD%E5%90%8D%E7%A9%BA%E9%97%B4
  /*
   是否命名空间，其意思是将当前的vuex模块命名，
   假设有多个vuex模块对象，如果不给予命名如果有重复的对象或者方法可能受到冲突。
   为了解决这个问题此时namespaced属性则派上用场。
  */
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
