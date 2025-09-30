import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import router from "../routes/router";
import axios from "axios";
export const authStore = defineStore('auth',({
    state : ()=>{
        return {
            email : '',
            password : '',
            refreshToken : '',
            firstName : '',
            user : null,
            loggedin : false,
        }
    },
    actions :{
       async handleLogin(email,username,password){
        try {
            console.log(email,username,password)
            let response =await axios.post('https://dummyjson.com/auth/login',{email,username ,password});
            console.log(response.data);
            let {accessToken, refreshToken, ...userdata} = response.data;
                toast.success("Login Successfull")
                router.push({name: 'cart'})
                this.user = userdata
                console.log(user)
                this.loggedin=true;
            }
        catch (error) {
            console.log(error);
        }
    },
        handleLogout(){
            toast.error("Logout Successful")
            this.email ='';
            this.password = '';
            this.loggedin = false;
            this.refreshToken = null
        
        }
    },
    persist : true
}));