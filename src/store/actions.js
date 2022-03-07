//应用mutation
export const setUser = ({commit},user) => {
    commit("userStatus",user)
}
//获取用户头像
export const setImage = ({commit},imageUrl) => {
    commit("userImageGet",imageUrl)
}
export const setToken = ({commit},userToken) => {
    commit("userToken",userToken)
}
export const setIsbtNumber = ({commit},isbtNumber) => {
    commit("isbtNumber",isbtNumber)
}
export const setPheno = ({commit},pheno) => {
    commit("pheno",pheno)
}
export const setCell = ({commit},cell) => {
    commit("cell",cell)
}