<template>
    <div class="news">
        <div class="news__sort" ref="modalNews">
            <div class="news__serch" v-if="isNews === 'Просмотр новостей'">
                <input @keyup.enter="meaning" class="news__other" type="text" placeholder="Название" v-model="isName">
                <svg class="news__loop" width="16" height="16" viewBox="0 0 16 16" fill="none"
                    xmlns="http://www.w3.org/2000/svg" @click="meaning">
                    <path
                        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                        stroke="#83859C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.9996 14.0001L11.0996 11.1001" stroke="#83859C" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <h3 class="news__create" v-if="isNews === 'Создать новость'">Создание <span>новости</span></h3>
            <h3 class="news__create" v-if="isNews === 'Редактировать новость'">Редактирование <span>новости</span></h3>
            <div class="news__block">
                <div>
                    <p class="news__name">Сортировка: <span class="news__special"
                            @click="isNewsActive = true">{{ isNews }}</span></p>
                    <div class="news__list" :class="{ news__list_active: isNewsActive }">
                        <p class="news__item" :class="{ news__item_active: isNews === item.value }"
                            v-for="(item, idx) in isNewsArray" :key="idx"
                            @click="goToNews(item.name, item.value)">{{ item.value }}</p>
                    </div>
                </div>
            </div>
        </div>
        <p class="news__empty" v-if="usePostAll.length === 0 && isNews === 'Просмотр новостей'">Пусто</p>
        <AdminViPostSearch v-if="isNews === 'Просмотр новостей'"></AdminViPostSearch>
        <AdminViPost v-if="isNews === 'Создать новость' || isNews === 'Редактировать новость'"></AdminViPost>
        <UIViPagination v-if="usePostAll.length !== 0 && isNews === 'Просмотр новостей'"></UIViPagination>
    </div>
</template>

<script>
import PostController from '@/http/controllers/PostController'
export default {
    data() {
        return {
            isName: '',
            isNewsActive: false,
            usePage: usePage(),
            usePostAll: usePostAll(),
            usePageActive: usePageActive(),
            isNews: useNews(),
            isNewsArray: [
                {
                    name: "watch",
                    value: "Просмотр новостей"
                },
                {
                    name: "create",
                    value: "Создать новость"
                }
            ],
        }
    },
    async mounted() {
        if (this.$route.query.news === "create") {
            this.isNews = "Создать новость"
        } else {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, news: "watch" } })
            this.isNews = "Просмотр новостей"
        }
        this.isName = this.$route.query.name
        document.addEventListener('click', this.closeOnClick);
    },
    methods: {
        async goToNews(name, value) {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, news: name, page: 1 } })
            this.usePage = 1
            this.usePageActive = 1
            this.isNews = value
            this.isNewsActive = false
        },
        closeOnClick(event) {
            if (this.$refs.modalNews && !this.$refs.modalNews.contains(event.target)) {
                this.closeModal();
            }
        },
        closeModal() {
            this.isNewsActive = false
        },
        async meaning() {
            await this.$router.push({ path: "/admin", query: { ...this.$route.query, name: this.isName, page: 1 } })
            const useData = await PostController.getPostAll(this.$route.query)
            this.usePostAll = useData.posts
            this.usePage = useData.totalPages
            this.usePageActive = 1
        }
    },
}
</script>

<style scoped>
.news {
    width: 100%;
}
.news__sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-bottom: 20px;
}
.news__name {
    font-size: 18px;
    font-family: "Inter", sans-serif;
}
.news__special {
    color: var(--violo);
    cursor: pointer;
}
.news__list {
    position: absolute;
    bottom: -90px;
    right: 0;
    z-index: 100;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateX(40px);
    transition: all .3s ease;
    box-shadow: 0 5px 10px #0000004d;
}
.news__item {
    text-align: center;
    padding: 10px 15px;
    color: #000;
    cursor: pointer;
    transition: all .3s ease;
    font-family: "Inter", sans-serif;
}
.news__item:hover {
    background: var(--violo);
    color: #fff;
}
.news__list_active {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
}
.news__item_active {
    color: var(--violo);
}
.news__pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.news__page {
    width: 35px;
    height: 35px;
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all .3s ease;
}
.news__page:not(:last-child) {
    margin-right: 5px;
}
.news__page_active {
    background-color: #23AABC;
    border-color: #23AABC;
}
.news__serch {
    width: 300px;
    position: relative;
}
.news__other {
    font-family: "Inter", sans-serif;
    background: transparent;
    border: 1px solid #000;
    border-radius: 18px;
    width: 100%;
    padding: 10px 15px
}
.news__loop {
    position: absolute;
    top:50%;
    transform: translateY(-45%);
    right: 15px;
    z-index: 2;
    cursor: pointer;
}
.news__empty {
    font-family: "Inter", sans-serif;
    font-size: 76px;
    font-weight: 600;
    color: #6B7280;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
}
.news__block {
    display: flex;
    align-items: center;
}
.news__create {
    font-family: "Inter", sans-serif;
    font-size: 32px;
    line-height: 30px;
    font-weight: 600;
}
.news__create span {
    color: var(--violo);
}
.news__btn {
    font-family: "Inter", sans-serif;
    margin-right: 20px;
    background: #2b0ca8;
    color: #fff;
    padding: 10px 25px;
    font-size: 16px;
    border-radius: 10px;
    transition: all .3s ease;
}
.news__btn:hover {
    transform: scale(1.03);
}
@media (max-width: 880px) {
    .news__serch {
        display: none;
    }
    .news__create {
        display: none;
    }
}
@media (max-width: 500px) {
    .news__serch {
        display: block;
        margin-top: 30px;
    }
    .news__sort {
        flex-direction: column;
        align-items: flex-end;
    }
    .news__block {
        margin-top: 20px;
    }
}
</style>