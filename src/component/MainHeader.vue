<template>
    <header>
        <nav>
            <RouterLink to="/">
                <picture>
                    <img src="../assets/img/logo.svg" />
                </picture>
            </RouterLink>

            <div class="link header-link">
                <div class="none">
                    <RouterLink to="/about">關於我們</RouterLink>
                    <RouterLink to="/news">最新消息</RouterLink>
                    <RouterLink to="/diary">健身日記</RouterLink>
                    <RouterLink to="/course">課程資訊</RouterLink>
                    <RouterLink to="/bento">美味食堂</RouterLink>
                    <RouterLink to="/coach">教練介紹</RouterLink>
                </div>
                <RouterLink to="/login">
                    <span class="material-symbols-outlined"> person </span>
                </RouterLink>
                <RouterLink to="/cart">
                    <span class="material-symbols-outlined"> shopping_cart </span>
                </RouterLink>
                <div class="hb" id="hb">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    </header>
</template>
