<template>
    <header>
        <MenuBar></MenuBar>
    </header>
    <main>
        <div class="text-head">
            Furniture style-six
        </div><hr>
        <div class="content-img">
            <div class="container-img">
            <img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                alt="">
        </div>
        </div>
        <div class="detial">
            <p>It is furniture that is designed in a minimalist style. For the living room or kitchen and decorated to match modern luxury.</p>
        </div>
        <div class="back-home">
            <router-link to="/"><a href="#">Back Home Page</a></router-link>
        </div>
    </main>
</template>
<script setup>
    import MenuBar from '../components/MenuBar.vue';
    
</script>
<style scoped>
    .text-head{
        text-align: center;
        font-size: 1.5rem;
        margin-top: 2rem;
        font-weight: 500;
    }

    hr {
        margin-bottom: 2rem;
        width: 300px;
        margin-left: 40%;
    }
    .container-img img{
        width: 600px;
        height: 500px;
        padding: 2rem;
    }

    img{
        display: block;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    .detial {
        text-align: center;
        font-size: 1rem;
    }

    .back-home {
        margin-top: 2rem;
        text-align: center;
    }

    .back-home a{
        color: #fff;
        text-decoration: none;
        background-color: #333;
        padding: 1rem .5rem;
    }

    .back-home a:hover {
        background-color: black;
        transition: .5s;
        
    }


</style>