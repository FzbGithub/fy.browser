<template>
<div>
    <el-row type="flex" justify="end">
      <el-col :span="6" :offset="18" class="opt-box">
        <label>{{$t("message.language")}}：</label>
        <el-dropdown trigger="click" @command="selectLanguage">
          <span class="el-dropdown-link">
            {{language}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="1">中文</el-dropdown-item>
            <el-dropdown-item command="2">English</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="6" :offset="18" >
        <el-form :label-position="labelPosition" :rules="loginRules"   ref="formLogin" label-width="80px" :model="formLogin">
          <el-form-item :label="$t('message.userName')" prop="name">
            <el-input v-model="formLogin.name"></el-input>
          </el-form-item>
          <el-form-item :label="$t('message.password')" prop="password">
            <el-input v-model="formLogin.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register('formLogin')">{{$t('message.btnRegister')}}</el-button>
            <el-button type="primary" @click="login('formLogin')">{{$t('message.btnLogin')}}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      language: localStorage.getItem('defaultLang') === 'zh' ? '中文' : 'English',
      labelPosition: 'right',
      formLogin: {
        name: '',
        password: ''
      },
      loginRules: {
        name: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    selectLanguage: function (command) {
      if (command === '1') {
        this.$i18n.locale = 'zh'
        this.$message({
          message: this.$t('message.selectedLanguageSuccess'),
          type: 'success'
        })
        this.language = '中文'
      } else if (command === '2') {
        this.$i18n.locale = 'en'
        this.$message({
          message: this.$t('message.selectedLanguageSuccess'),
          type: 'success'
        })
        this.language = 'English'
      }
      localStorage.setItem('defaultLang', unescape(this.$i18n.locale))
    },
    register: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    login: function (formName) {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .opt-box {
    text-align: right;
    color: #606266;
    font-size: 14px;
  }
</style>
