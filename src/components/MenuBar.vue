<template>
    <header>
        <div class="nav-bar">
            <div class="content-bar">
                <div class="logo">
                    <h2>Logo Demo-Travel</h2>
                </div>
                <div class="menu">
                    <ul>
                        <li><router-link to="/"><a href="#">Home</a></router-link></li>
                        <li><router-link to="/about"><a href="#">About</a></router-link></li>
                        <li><router-link to="/contact"><a href="#">Contact</a></router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {

}
</script>
<style scoped>
.nav-bar {
    box-shadow: 1px 2px 8px #333;
}

a {
    text-decoration: none;
    text-align: center;
    font-size: 1.1rem;
    color: #fff;
}

a:hover{
    color: #333;
    transition: .3s;
}

.content-bar {
    padding: 1rem;
    display: flex;
    justify-content: space-around;
}

.menu ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
}

ul li {
    margin-left: 2rem;
    font-size: 1rem;

}

li {
    color: #333;
}
</style>