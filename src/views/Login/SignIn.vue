<template>
  <body>
    <div class="section">
      <div class="container">
        <div class="row full-height justify-content-center">
          <div class="col-12 text-center align-self-center py-5">
            <div class="section pb-5 pt-5 pt-sm-2 text-center">
              <h6 class="mb-0 pb-3"><span>登入</span><span>註冊</span></h6>
              <input class="checkbox" type="checkbox" id="reg-log" name="reg-log" />
              <label for="reg-log"></label>
              <div class="card-3d-wrap mx-auto">
                <div class="card-3d-wrapper">
                  <div class="card-front">
                    <div class="center-wrap">
                      <form class="section text-center" @submit.prevent="memlogin">
                        <h4 class="pb-3">會員登入</h4>
                        <div class="form-group">
                          <input type="text" class="form-style" name="memid" placeholder="Account"  @blur="checkAcc" v-model="acc" />
                          <i class="input-icon fa-regular fa-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            class="form-style"
                            name="mempsw"
                            placeholder="Password"
                            @blur="checkPsw"
                            v-model="psw"
                          />
                          <i class="input-icon fa-solid fa-lock"></i>
                        </div>
                        <button class="btn mt-4" type="submit">登入</button>
                        
                        <!-- <p class="mb-0 mt-4 text-center">
                          <a href="#" class="link"
                            >忘記密碼?</a
                          >
                        </p> -->
                      </form>
                    </div>
                  </div>
                  <div class="card-back">
                    <div class="center-wrap">
                      <div class="section text-center">
                        <h4 class="mb-3 pb-3">註冊帳號</h4>
                        <div class="form-group">
                          <input type="text" class="form-style" placeholder="Name" />
                          <i class="input-icon uil uil-user"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="tel"
                            class="form-style"
                            placeholder="Phone Number"
                          />
                          <i class="input-icon uil uil-phone"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input type="email" class="form-style" placeholder="Email" />
                          <i class="input-icon uil uil-at"></i>
                        </div>
                        <div class="form-group mt-2">
                          <input
                            type="password"
                            class="form-style"
                            placeholder="Password"
                          />
                          <i class="input-icon uil uil-lock-alt"></i>
                        </div>
                        <a href="https://www.web-leb.com/code" class="btn mt-4"
                          >點我註冊</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import { useMemStore } from '/src/stores/mem.js'

export default {
  data() {
    return {
      acc: '', // 管理員帳號
      psw: '', // 管理員密碼
      errorMsg: {
        acc: '', // 帳號錯誤訊息
        psw: '' // 密碼錯誤訊息
      }
    }
  },
  methods: {
    // 檢查帳號是否為空
    checkAcc() {
      if (this.acc === '') {
        this.errorMsg.acc = '*請輸入帳號'
      } else {
        this.errorMsg.acc = ''
      }
    },
    // 檢查密碼是否為空
    checkPsw() {
      if (this.psw === '') {
        this.errorMsg.psw = '*請輸入密碼'
      } else {
        this.errorMsg.psw = ''
      }
    },
    // 管理員登入方法
    async memlogin() {
      try {
        // 發送登入請求到後端 API
        const response = await fetch('http://localhost/api/member.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            u_account: this.acc,
            u_psw: this.psw
          })
        })

        // 解析後端返回的 JSON 數據
        const data = await response.json()

        if (data.code === 1) {
          // 如果返回的 code 為 1，表示登入成功
          const adminStore = useMemStore()
          adminStore.setCurrentUser({
            id: data.adminInfo.mem_id, // 設置當前用戶的 ID
            acc: data.adminInfo.mem_acc // 設置當前用戶的帳號
          })
          alert('登入成功!')
          this.acc = ''
          this.psw = ''
          this.$router.push('/AccountMangerView') // 導向後台頁面
        } else {
          // 如果返回的 code 不為 1，表示登入失敗，顯示錯誤訊息
          alert(data.msg || '帳號或密碼錯誤!')
          this.acc = ''
          this.psw = ''
        }
      } catch (error) {
        // 處理請求錯誤
        console.error('登入失敗:', error)
        alert('登入失敗')
      }
    }
  },
  mounted() {
    // 組件掛載時檢查是否已登入
    const memStore = useMemStore()
    memStore.loadCurrentUser()
    if (memStore.currentUser) {
      // 如果已登入，直接導向後台頁面
      this.$router.push('/AccountMangerView')
    }
  }
}
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

body {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  line-height: 1.7;
  color: #004eaf;
  background-color: #1f2029;
  overflow: hidden;
}

a:hover {
  text-decoration: none;
}

.link {
  color: #004eaf;
}

.link:hover {
  color: #c4c3ca;
}

p {
  font-weight: 500;
  font-size: 14px;
}

h4 {
  font-weight: 600;
}

h6 span {
  padding: 0 20px;
  font-weight: 700;
}

.section {
  position: relative;
  width: 100%;
  display: block;
}

.full-height {
  min-height: 100vh;
}

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  display: none;
}

.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #71c4ef;
}

.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffff;
  background-color: #487fc4;
  font-family: "unicons";
  content: "\eb4f";
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}

.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}

.card-3d-wrap {
  position: relative;
  width: 440px;
  max-width: 100%;
  height: 450px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 800px;
  margin-top: 60px;
}

.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: all 600ms ease-out;
  border: 2px solid #004eaf;
  border-radius: 10px;
}

.card-front,
.card-back {
  width: 100%;
  height: 100%;
  background-color: #2b2e38;
  background-image: url("/img/pattern_japanese-pattern-2_1_2_0-0_0_1__ffffff00_000000.png");
  position: absolute;
  border-radius: 6px;
  -webkit-transform-style: preserve-3d;
}

.card-back {
  transform: rotateY(180deg);
}

.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {
  transform: rotateY(180deg);
}

.center-wrap {
  position: absolute;
  width: 100%;
  padding: 0 35px;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 35px) perspective(100px);
  z-index: 20;
  display: block;
}

.form-group {
  position: relative;
  display: block;
  margin: 0;
  padding: 0;
}

.form-style {
  padding: 13px;
  padding-left: 55px;
  height: 48px;
  width: 95%;
  font-weight: 500;
  border-radius: 4px;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.5px;
  outline: none;
  color: #000000;
  background-color: #c2c5c6;
  border: none;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}

.form-style:focus,
.form-style:active {
  border: none;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(21, 21, 21, 0.2);
}
.input-icon {
  position: absolute;
  top: 0;
  left: 18px;
  height: 48px;
  font-size: 24px;
  line-height: 48px;
  text-align: left;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
}

.btn {
  border-radius: 4px;
  height: 44px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  -webkit-transition: all 200ms linear;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  align-items: center;
  background-color: #004eaf;
  color: #fff;
}

.btn:hover {
  background-color: #000000;
  color: #71c4ef;
  box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
}
</style>
