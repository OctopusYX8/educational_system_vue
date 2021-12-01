<template>
    <div>Login
        <button @click="test" ></button>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{

            }
        },
        methods:{
            test(){
                this.$axios.post('/login')
                    .then(res=>{
                        console.log("测试")
                        console.log(res.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>