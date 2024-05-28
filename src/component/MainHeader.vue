<template>
    <header>
        <nav>
            <RouterLink to="/HomeView">
                <picture>
                    <img src="https://picsum.photos/300/200/?random=10">
                </picture>
            </RouterLink>

            <div class="link header-link">
                <RouterLink to="/AboutusView">關於我們</RouterLink>
                <RouterLink to="/NewsView">最新活動</RouterLink>
                <RouterLink to="/DiaryView">健身日記</RouterLink>
                <RouterLink to="/CourseView">課程資訊</RouterLink>
                <RouterLink to="/BentoView">美味食堂</RouterLink>
                <RouterLink to="/CoachView">教練介紹</RouterLink>
                <RouterLink to="/LoginView">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                </RouterLink>
                <RouterLink to="/CartView">
                    <span class="material-symbols-outlined">
                        shopping_cart
                    </span>
                </RouterLink>
            </div>
        </nav>
    </header>
</template>