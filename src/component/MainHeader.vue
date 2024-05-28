<template>
    <header>
        <nav>
            <RouterLink to="/">
                <picture>
                    <img src="https://picsum.photos/300/200/?random=10" />
                </picture>
            </RouterLink>

            <div class="link header-link">
                <RouterLink to="/about">關於我們</RouterLink>
                <RouterLink to="/news">最新活動</RouterLink>
                <RouterLink to="/diary">健身日記</RouterLink>
                <RouterLink to="/course">課程資訊</RouterLink>
                <RouterLink to="/bento">美味食堂</RouterLink>
                <RouterLink to="/coach">教練介紹</RouterLink>
                <RouterLink to="/login">
                    <span class="material-symbols-outlined"> person </span>
                </RouterLink>
                <RouterLink to="/cart">
                    <span class="material-symbols-outlined"> shopping_cart </span>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>
