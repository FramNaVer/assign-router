<template>
    <main>
        <div class="card">
            <div class="content-card">
                <div class="shop">
                    <h2>Furniture style-one</h2>
                    <div class="content-img">
                        <img src="https://images.unsplash.com/photo-1650013361594-5ea7f37a7378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                            alt="Shop-1">
                    </div>
                    <router-link to="/shop1" ><a href="#">Learn more</a></router-link>
                </div>
                <div class="shop">
                    <h2>Furniture style-two</h2>
                    <div class="content-img">
                        <img src="https://images.unsplash.com/photo-1602700113559-c7b80feaa9bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Shop-2">
                    </div>
                    <router-link to="/shop2" ><a href="#">Learn more</a></router-link>
                </div>
                <div class="shop">
                    <h2>Furniture style-three</h2>
                    <div class="content-img">
                        <img src="https://images.unsplash.com/photo-1633505412556-82c0921e8f4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1858&q=80"
                            alt="Shop-3">
                    </div>
                    <router-link to="/shop3" ><a href="#">Learn more</a></router-link>
                </div>
                <div class="shop">
                    <h2>Furniture style-four</h2>
                    <div class="content-img">
                        <img src="https://images.unsplash.com/photo-1634547476021-c1155c01616c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                            alt="Shop-4">
                    </div>
                    <router-link to="/shop4" ><a href="#">Learn more</a></router-link>
                </div>
                <div class="shop">
                    <h2>Furniture style-five</h2>
                    <div class="content-img">
                        <img src="https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                            alt="Shop-5">
                    </div>
                    <router-link to="/shop5" ><a href="#">Learn more</a></router-link>
                </div>
                <div class="shop">
                    <h2>Furniture style-six</h2>
                    <div class="content-img">
                        <img src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80"
                            alt="Shop-6">
                    </div>
                    <router-link to="/shop6" ><a href="#">Learn more</a></router-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
    import MenuBar from './MenuBar.vue';

</script>
<style scoped>
    .content-card{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        grid-gap: 1rem;
        padding: 3rem;
    }

    .shop img{
        widows: 300px;
        height: 300px;
        width: 100%;
    }

    .shop h2{
        text-align: center;
        margin-bottom: .2rem;
    }

    .shop a{
        text-align: center;
        text-decoration: none;
        color: #fff;
        background-color:#333;
        padding: .2rem .5rem;
    }
    
    .shop a:hover{
        padding: .3rem .6rem;
        transition: .4s;
        background-color: black;
    }

</style>