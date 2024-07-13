<template>
    <section>
        <h2>帳號管理</h2>
        <hr>
        <form @submit.prevent="saveinfo" class="main-part">
            <!-- <div class="content_prof">
                <h3>個人頭像</h3>
                <div class="person-pic">
                    <div class="pic">
                        <img :src="selfieUrl" alt="">
                    </div>
                    <input type="file" name="selfie" id="#" @change="handleFileChange">
                </div>
            </div>
            <hr> -->
            <div class="content_sec">
                <h3>基本資料</h3>
                <div class="account_detail">
                    <div class="name ks">
                        <h4>姓名</h4>
                        <div class="w100" v-if="isEditing"><input type="text" v-model="edit.namedata"></div>
                        <div class="w100" v-else><span class="span30">{{ memberName }}</span></div>
                    </div>
                    <div class="sex ks">
                        <h4>帳號</h4>
                        <div class="w100" v-if="isEditing"><input type="text" v-model="edit.accountdata"></div>
                        <div class="w100" v-else><span class="span30">{{ memberAcc }}</span></div>
                    </div>
                    <div class="phone ks">
                        <h4>電話號碼</h4>
                        <div class="w100" v-if="isEditing"><input type="tel" v-model="edit.phonedata" pattern="[0-9]{10}" maxlength="10" required></div>
                        <div class="w100" v-else><span class="span30">{{ memberPhone }}</span></div>
                    </div>
                    <div class="or-password ks">
                        <h4>原密碼</h4>
                        <input type="password" v-model="orgpsw" pattern="[a-zA-Z0-9]{6,16}" minlength="6" maxlength="16" style="border: 2px black solid;">
                    </div>
                    <div class="new1-password ks">
                        <h4>新密碼</h4>
                        <input type="password" v-model="edit.psw" pattern="[a-zA-Z0-9]{6,16}" minlength="6" maxlength="16" style="border: 2px black solid;">
                    </div>
                    <div class="new2-password ks">
                        <h4>驗證密碼</h4>
                        <input type="password" v-model="confirmpsw" pattern="[a-zA-Z0-9]{6,16}" minlength="6" maxlength="16" style="border: 2px black solid;">
                    </div>
                </div>
            </div>
            <hr>
            <div class="content_end">
                <div v-if="isEditing">
                    <button class="noneborder" type="submit">
                        <i class="fa-regular fa-floppy-disk"></i>儲存
                    </button>
                </div>
                <div v-else>
                    <button class="noneborder" @click.prevent="editinfo">
                        <i class="fa-regular fa-pen-to-square"></i>編輯
                    </button>
                </div><br>
                <span>點擊儲存即同意 GYM力 之會員條款 與客戶隱私權條款</span>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isEditing: false,
            reid: '',
            edit: {
                namedata: '',
                accountdata: '',
                phonedata: '',
                psw: ''
            },
            orgpsw: '',
            confirmpsw: '',
            memberinfo: [],
            selfieUrl: ''
        }
    },
    async mounted() {
        await this.getid()
        await this.confirm()
    },
    computed: {
        memberName() {
            return this.memberinfo.length > 0 ? this.memberinfo[0].mem_name : '';
        },
        memberAcc() {
            return this.memberinfo.length > 0 ? this.memberinfo[0].mem_acc : '';
        },
        memberPhone() {
            return this.memberinfo.length > 0 ? this.memberinfo[0].mem_phone : '';
        }
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
        async confirm() {
            let url = `${import.meta.env.VITE_PHP_URL}get_member_once.php`
            let body = {
                id: this.reid,
            }
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                const json = await res.json()
                if (json.code === 200) {
                    this.memberinfo = json.data.list
                    this.edit.namedata = this.memberName
                    this.edit.accountdata = this.memberAcc
                    this.edit.phonedata = this.memberPhone
                } else {
                    console.error('API returned error:', json.msg)
                }
            } catch (error) {
                console.error('Error fetching data:', error.message, error.stack)
            }
        },
        editinfo() {
            this.isEditing = true
        },
        async saveinfo() {
            if (this.isEditing) {
                // 驗證原密碼
                if (!await this.validateOriginalPassword()) {
                    alert('原密碼不正確')
                    return
                }

                // 驗證新密碼
                if (this.edit.psw && this.edit.psw !== this.confirmpsw) {
                    alert('新密碼與驗證密碼不相符')
                    return
                }

                const updatedData = {
                    mem_id: this.reid,
                    mem_name: this.edit.namedata,
                    mem_acc: this.edit.accountdata,
                    mem_phone: this.edit.phonedata,
                    mem_psw: this.edit.psw,
                }

                try {
                    const response = await fetch(`${import.meta.env.VITE_PHP_URL}update_member_info.php`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedData)
                    })
                    const data = await response.json()
                    if (data.code === 200) {
                        alert('會員資料更新成功')
                        this.isEditing = false
                        await this.confirm()
                        this.edit = {
            namedata: '',
            accountdata: '',
            phonedata: '',
            psw: ''
        }
        this.orgpsw = ''
        this.confirmpsw = ''
                    } else {
                        alert(data.msg || '更新失敗')
                    }
                } catch (error) {
                    console.error('Error:', error)
                    alert('更新過程中發生錯誤')
                }
            }
        },
        async validateOriginalPassword() {
            try {
                const response = await fetch(`${import.meta.env.VITE_PHP_URL}validate_password.php`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        mem_id: this.reid,
                        mem_psw: this.orgpsw
                    })
                })
                const data = await response.json()
                return data.isValid
            } catch (error) {
                console.error('Error validating password:', error)
                return false
            }
        },
    }
}
</script>



<style lang="scss" scoped>
.w100{
    width: 100%;
    border: 2px black solid;
    border-radius: 5px;
    background-color: white;
}
.span30{
    font-size: 16px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.75);
    }
input{
    border: none;
    width: 100%;
    }
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
