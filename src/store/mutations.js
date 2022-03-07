//更改用户状态信息
  export const userStatus = (state,user) => {
    if (user){
      state.currentUser = user;
      state.isLogin = true
    } else if (user == null){
      //登出的时候，清空sessionStorage里的东西
      sessionStorage.setItem("userName",null);
      sessionStorage.setItem("userToken","");
      sessionStorage.setItem("userImage",null);
      state.currentUser = null;
      state.isLogin = false;
      state.token = "";
      // state.userImage = null;
    }
  }
  export const userImageGet = (state,imageUrl) => {
    if (imageUrl){
      state.userImage = imageUrl;
    } else if (imageUrl == null){
      state.userImage = null;
    }
  }
  
  
  export const userToken = (state,userToken) => {
    if (userToken) {
      state.token = userToken;
    } else {
      state.token = null;
    }
  }

  export const isbtNumber = (state,isbtNumber) => {
    if (isbtNumber) {
      state.isbtNumber = isbtNumber;
    } else {
      state.isbtNumber = isbtNumber;
    }
  }

  export const pheno = (state,pheno) => {
    if (pheno) {
      state.pheno = pheno;
    } else {
      state.pheno = pheno;
    }
  }

  export const cell = (state,cell) => {
    if (cell) {
      state.cell = cell;
    } else {
      state.cell = cell;
    }
  }