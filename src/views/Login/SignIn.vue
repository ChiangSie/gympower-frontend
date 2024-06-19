<template>
    <section class="login_page">
        <div class="login" id="login">
            <div class="form-login sign-up">
                <form action="#">
                    <h2>會員註冊</h2>
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <input type="text" placeholder="Phone">
                    <input type="password" placeholder="Password">
                    <button>註冊</button>
                </form>
            </div>
            <div class="form-login sign-in">
                <form action="#">
                    <h2>會員登入</h2>
                    <input type="email" placeholder="Email">
                    <input type="password" placeholder="Password">
                    <span>忘記密碼?</span>
                    <RouterLink to='/AccountMangerView'><button>登入</button></RouterLink>
                    <a href="#"><i class="fa-brands fa-google"></i> Google登入</a>
                </form>
            </div>
            <div class="toggle-login">
                <div class="toggle">
                    <div class="toggle-panel toggle-left">
                        <h2>Welcome Back!</h2>
                        <p>Enter your personal details to use all of site features</p>
                        <button class="hidden" id="signin">Sign In</button>
                    </div>
                    <div class="toggle-panel toggle-right">
                        <h2>Hello Friend!</h2>
                        <p>Register with your personal details to use all of site features</p>
                        <button class="hidden" id="signup">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Sign />

</template>

<script>
export default {
    mounted() {
        const login = document.getElementById('login');
        const registerBtn = document.getElementById('signup');
        const loginBtn = document.getElementById('signin');
        registerBtn.addEventListener('click', () => {
            login.classList.add("active");
        });
        loginBtn.addEventListener('click', () => {
            login.classList.remove("active");
        });
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.login_page {
    width: 100%;
    padding: 3% 12%;
    margin-top: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.login {
    background-color: #fff;
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 450px;
    border: 3px solid black;
}

.login p {
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}

.login span {
    font-size: 13px;
}

.login a {
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

.login button {
    background-color: #002451;
    color: #fff;
    font-size: 12px;
    padding: 5px 20px;
    border: 1px solid transparent;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}

.login form {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.login input {
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-login {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in {
    left: 0;
    width: 50%;
    z-index: 2;
}

.login.active .sign-in {
    transform: translateX(100%);
}

.sign-up {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.login.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move {

    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.toggle-login {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 100;
}

.login.active .toggle-login {
    transform: translateX(-100%);
    border-radius: 0 150px 100px 0;
}

.toggle {
    background-color: #F0EEE9;
    height: 100%;
    background: linear-gradient(to right, #EB9340, #71C4EF);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.login.active .toggle {
    transform: translateX(50%);
}

.login button.hidden {
    background-color: transparent;
    border-color: #fff;
}

.toggle-panel {
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left {
    transform: translateX(-200%);
}

.login.active .toggle-left {
    transform: translateX(0);
}

.toggle-right {
    right: 0;
    transform: translateX(0);
}

.login.active .toggle-right {
    transform: translateX(200%);
}
</style>