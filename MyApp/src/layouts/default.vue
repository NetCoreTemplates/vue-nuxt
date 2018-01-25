<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
            <nuxt-link to="/">
                <div class="navbar-brand">
                    <i class="fa fa-code" aria-hidden="true"></i>
                    MyApp
                </div>
            </nuxt-link>
          
            <div class="navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/about">About</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/posts/1">Post 1</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/posts/2">Post 2</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div id="content" class="container">
        <nuxt/>
    </div>

    <div id="footer" style="text-align:center; position:absolute; bottom:50px; width:100%;">
        <h4>
            <img src="../static/img/logo.svg" style="width:32px;margin-right:10px" />
            <a href="https://servicestack.net/vs-templates/vue-nuxt">Learn about this Vue Nuxt.js VS.NET template</a>
        </h4>
        <div>Copyright &copy; 2018</div>
    </div>
    
</div>
</template>
