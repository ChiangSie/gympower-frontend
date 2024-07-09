
<template>
    <section>
        <h2>帳號管理</h2>
        <hr>
        <form @submit.prevent="updateMemberInfo" class="main-part">
            <div class="content_prof">
                <h3>個人頭像</h3>
                <div class="person-pic">
                    <div class="pic">
                        <img :src="selfieUrl" alt="">
                    </div>
                    <input type="file" name="selfie" id="#" @change="handleFileChange">
                </div>
            </div>
            <hr>
            <div class="content_sec">
                <h3>基本資料</h3>
                <div class="account_detail">
                    <div class="name ks">
                        <h4>姓名</h4>
                        <input type="text" v-model="edit.namedata"  >
                    </div>
                    <div class="sex ks">
                        <h4>帳號</h4>
                        <input type="text" v-model="edit.accdata" >
                    </div>
                    <div class="phone ks">
                        <h4>電話號碼</h4>
                        <input type="tel" v-model="edit.phonedata"  pattern="[0-9]{10}" maxlength="10" required>
                    </div>
                    <div class="or-password ks">
                        <h4>原密碼</h4>
                        <input type="password" v-model="orgpsw" pattern="[a-zA-Z0-9]{6,16}" minlength="6" maxlength="16"  >
                    </div>
                    <div class="new1-password ks">
                        <h4>新密碼</h4>
                        <input type="password" v-model="edit.psw" pattern="[a-zA-Z0-9]{6,16}" minlength="6" maxlength="16">
                    </div>
                    <div class="new2-password ks">
                        <h4>驗證密碼</h4>
                        <input type="password"  v-model="confirmpsw" pattern="[a-zA-Z0-9]{6,16}" minlength="6" maxlength="16">
                    </div>
                </div>
            </div>
            <hr>
            <div class="content_end">
                <button type="submit">儲存變更</button><br>
                <span>點擊儲存即同意 GYM力 之會員條款 與客戶隱私權條款</span>
            </div>
        </form>

        
    </section>
</template>

<script>
export default {
    data() {
        return {
            person: [],
            reid: '',
            edit: {
                namedata: '',
                accdata: '',
                phonedata: '',
                psw:''
            },
            memberinfo: []
        }
    },
    async mounted() {
        await this.getid()
        this.confirm()
    },
    computed:{
        // memberName() {
        //     return this.memberinfo.length > 0 ? this.memberinfo[0].mem_name : '';
        // },
        // memberAcc() {
        //     return this.memberinfo.length > 0 ? this.memberinfo[0].mem_acc : '';
        // },
        // memberPhone() {
        //     return this.memberinfo.length > 0 ? this.memberinfo[0].mem_phone : '';
        // }
    },
    methods: {
        getid() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'))
            if (currentUser && currentUser.id) {
                this.reid = currentUser.id
                console.log(this.reid)
            } else {
                console.error('No user ID found in localStorage')
            }
        },
        confirm() {
            let url = 'http://localhost/api/get_member_once.php'
            let body = {
                id: this.reid,
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json()
            })
            .then((json) => {
                if (json.code === 200) {
                    this.memberinfo = json.data.list
                } else {
                    console.error('API returned error:', json.msg)
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error.message, error.stack)
            })
        },
    },
}
</script>

<style lang="scss" scoped>
hr {
    width: 100%;
    border-width: 1px;
    border-color: #000000;
    margin: 10px 0;
}

section {
    width: 100%;

    .main-part {
        width: 95%;
        margin: 0 auto;

        .content_prof {
            width: 100%;
            margin: 10px auto 30px;

            .person-pic {
                width: 80%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                margin: 10px auto;
                gap: 20px;

                .pic {
                    width: 100px;
                    aspect-ratio: 1/1;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 0.5px solid black;

                    img {
                        width: 100%;
                        aspect-ratio: 1/1;
                        object-fit: cover;
                    }
                }
            }

            input {
                border-radius: 5px;
                border: 1px black solid;
                background-color: transparent;
            }

            select {
                border-radius: 5px;
                border: 1px black solid;
                background-color: transparent;
                height: 30px;
            }
        }

        .content_sec {
            .account_detail {
                width: 60%;
                margin: 20px auto 40px;

                .ks {
                    display: flex;
                    flex-direction: column;
                    margin: 10px 20px;

                    input, select {
                        border-radius: 5px;
                        height: 30px;
                    }
                }
            }
        }
    }

    .content_end {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        button {
            width: 150px;
            height: 35px;
            background-color: #71C4EF;
            border-radius: 10px;
            &:hover{
            background-color: #b7e7ff;
            }
        }
    }
}

@media (max-width: 768px) {
    section {
        .main-part {
            .content_prof {
                .person-pic {
                    width: 90%;
                    flex-direction: column;
                    gap: 10px;
                }
            }
            .content_sec {
                .account_detail {
                    width: 80%;
                }
            }
        }
    }
}

@media (max-width: 480px) {
    section {
        .main-part {
            .content_prof {
                .person-pic {
                    width: 100%;
                    flex-direction: column;
                    gap: 10px;
                }
            }
            .content_sec {
                .account_detail {
                    width: 100%;
                }
            }
        }
    }
}
</style>
