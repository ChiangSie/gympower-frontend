<template>
  <div>
    <div v-if="!isSignedIn">
      <button @click="handleSignIn">Sign in with Google</button>
    </div>
    <div v-else>
      <p v-if="userName">Welcome, {{ userName }}</p>
      <button @click="handleSignOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import { gapi } from "gapi-script";
export default {
  data() {
    return {
      isSignedIn: false,
      userName: "",
    };
  },
  mounted() {
    // 加载 Google API 客户端库并初始化
    this.loadGapiClient();
  },
  methods: {
    loadGapiClient() {
      if (window.gapi) {
        this.initGapi();
      } else {
        setTimeout(this.loadGapiClient, 100); // 等待 gapi 加载
      }
    },
    initGapi() {
      gapi.load("client:auth2", () => {
        gapi.client
          .init({
            clientId:
              "917030762317-rlv30pu6g4pbeml4i38b2v1ld9rc402n.apps.googleusercontent.com",
            scope: "profile email",
          })
          .then(() => {
            const authInstance = gapi.auth2.getAuthInstance();
            this.updateSignInStatus(authInstance.isSignedIn.get()); // 初始化时更新登录状态
            authInstance.isSignedIn.listen(this.updateSignInStatus); // 监听登录状态变化
          });
      });
    },
    updateSignInStatus(isSignedIn) {
      this.isSignedIn = isSignedIn;
      if (isSignedIn) {
        const profile = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
        this.userName = profile.getName();
      } else {
        this.userName = "";
      }
    },
    handleSignIn() {
      gapi.auth2.getAuthInstance().signIn();
    },
    handleSignOut() {
      gapi.auth2
        .getAuthInstance()
        .signOut()
        .then(() => {
          this.updateSignInStatus(false); // 更新登录状态为 false
        })
        .catch((error) => {
          console.error("Sign out error:", error);
        });
    },
  },
};
</script>
