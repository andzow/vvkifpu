<template>
  <div class="post">
    <div class="post__container">
      <div class="post__position">
        <div class="post__wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="#542fe6"
            class="bi bi-upload"
            viewBox="0 0 16 16"
          >
            <path
              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
            />
            <path
              d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"
            />
          </svg>
          <input
            class="post__file"
            type="file"
            @change="handleFileUpload"
            ref="fileInput"
          />
          <Transition>
            <img
              class="post__img"
              :src="imageUrl"
              alt=""
              v-if="imageUrl !== '' && useNews === 'Создать новость'"
            />
          </Transition>
          <Transition>
            <img
              class="post__img"
              :src="imageUrl"
              alt=""
              v-if="imageUrl !== '' && useNews === 'Редактировать новость'"
            />
          </Transition>
          <div class="post__circle" v-if="imageUrl !== ''" @click="clearFile">
            <svg
              width="20"
              height="20"
              viewBox="0 0 41 43"
              fill="#542fe6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="51.2508"
                height="7.32154"
                rx="3.66077"
                transform="matrix(0.699989 -0.714153 0.699989 0.714153 0 37.1289)"
                fill="#542fe6"
              />
              <rect
                width="51.2508"
                height="7.32154"
                rx="3.66077"
                transform="matrix(0.699989 0.714153 -0.699989 0.714153 5.125 0.739258)"
                fill="#542fe6"
              />
            </svg>
          </div>
        </div>
        <input
          class="post__input"
          type="text"
          placeholder="Название"
          v-model="isName"
        />
        <div class="post__block">
          <div
            class="post__input post__type"
            @click="isOtherActive = !isOtherActive"
          >
            <p>{{ isType }}</p>
            <svg
              width="30"
              height="14"
              viewBox="0 0 78 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="55.5528"
                height="7.93612"
                rx="3.96806"
                transform="matrix(0.699989 -0.714153 0.699989 0.714153 33.5625 39.6729)"
                fill="white"
              />
              <rect
                width="55.5528"
                height="7.93612"
                rx="3.96806"
                transform="matrix(0.699989 0.714153 -0.699989 0.714153 5.55469 0.228516)"
                fill="white"
              />
            </svg>
          </div>
          <div
            class="post__other"
            :class="{ post__active: isOtherActive === true }"
          >
            <p
              class="post__item"
              :class="{ post__item_active: type === isType }"
              v-for="(type, index) in isTypeArray"
              :key="index"
              @click="toType(type)"
            >
              {{ type }}
            </p>
          </div>
        </div>
      </div>
      <div class="post__description">
        <div class="post__array" v-for="(item, idx) in isInfo" :key="idx">
          <div class="post__delay">
            <input
              class="post__input_log"
              placeholder="Заголовок"
              type="text"
              v-model="item.title"
            />
            <svg
              class="post__delete"
              width="20"
              height="20"
              viewBox="0 0 41 43"
              fill="#542fe6"
              @click="removeInfo"
              v-if="idx !== 0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="51.2508"
                height="7.32154"
                rx="3.66077"
                transform="matrix(0.699989 -0.714153 0.699989 0.714153 0 37.1289)"
                fill="#fff"
              />
              <rect
                width="51.2508"
                height="7.32154"
                rx="3.66077"
                transform="matrix(0.699989 0.714153 -0.699989 0.714153 5.125 0.739258)"
                fill="#fff"
              />
            </svg>
          </div>
          <div class="post__delay" v-for="(area, i) in item.info" :key="i">
            <textarea
              class="post__textarea"
              placeholder="Содержание абзаца"
              v-model="item.info[i]"
            ></textarea>
            <svg
              class="post__delete_text"
              width="20"
              height="20"
              viewBox="0 0 41 43"
              fill="#542fe6"
              @click="removeParagraph(idx, i)"
              v-if="i !== 0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="51.2508"
                height="7.32154"
                rx="3.66077"
                transform="matrix(0.699989 -0.714153 0.699989 0.714153 0 37.1289)"
                fill="#542fe6"
              />
              <rect
                width="51.2508"
                height="7.32154"
                rx="3.66077"
                transform="matrix(0.699989 0.714153 -0.699989 0.714153 5.125 0.739258)"
                fill="#542fe6"
              />
            </svg>
          </div>
        </div>
        <div class="post__buttons">
          <button class="post__button" @click="addInfo">
            Добавить заголовок
          </button>
          <button class="post__button" @click="addParagraph">
            Добавить абзац
          </button>
        </div>
        <button
          class="post__button post__data"
          v-if="useNews === 'Создать новость'"
          @click="sendData"
        >
          Создать новость
        </button>
        <button
          class="post__button update__data"
          v-if="useNews === 'Редактировать новость'"
          @click="updateData"
        >
          Редактировать новость
        </button>
        <button
          class="post__button delete__data"
          v-if="useNews === 'Редактировать новость'"
          @click="deleteData"
        >
          Удалить новость
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import PostController from "@/http/controllers/PostController";
export default {
  data() {
    return {
      useStatus: useStatus(),
      useNews: useNews(),
      usePostData: usePostData(),
      isType: "Тип новости",
      isName: "",
      isFile: "",
      imageUrl: "",
      isOtherActive: false,
      isTypeArray: ["Новости колледжа", "Мероприятия"],
      isInfo: [
        {
          title: "",
          info: [""],
        },
      ],
    };
  },
  mounted() {
    if (this.useNews === "Редактировать новость") {
      this.isName = this.usePostData.name;
      this.isType = this.usePostData.type;
      this.isInfo = JSON.parse(this.usePostData.text);
      this.imageUrl = this.usePostData.imgSrc + this.usePostData.image;
    }
  },
  methods: {
    toType(type) {
      this.isType = type;
      this.isOtherActive = false;
    },
    handleFileUpload(event) {
      this.isFile = event.target.files[0];
      this.imageUrl = URL.createObjectURL(this.isFile);
    },
    clearFile() {
      this.isFile = "";
      this.imageUrl = "";
      this.$refs.fileInput.value = null;
    },
    addParagraph() {
      const lastIndex = this.isInfo.length - 1;
      this.isInfo[lastIndex].info.push("");
    },
    removeInfo(idx) {
      this.isInfo.splice(idx, 1);
    },
    removeParagraph(idx, i) {
      this.isInfo[idx].info.splice(i, 1);
    },
    addInfo() {
      const newInfo = {
        title: "",
        info: [""],
      };
      this.isInfo.push(newInfo);
    },
    async sendData() {
      if (this.isName === "") {
        this.useStatus = 400;
        return;
      }
      if (this.imageUrl === "") {
        this.useStatus = 400;
        return;
      }
      if (this.isType === "Тип новости") {
        this.useStatus = 400;
        return;
      }
      const formData = new FormData();
      formData.append("image", this.isFile);
      formData.append("name", this.isName);
      formData.append("type", this.isType);
      formData.append("text", JSON.stringify(this.isInfo));
      const status = await PostController.createPost(formData);
      this.useStatus = status;
      if (status !== 409) {
        this.clearData();
      }
    },
    async updateData() {
      if (this.isName === "") {
        this.useStatus = 400;
        return;
      }
      if (this.imageUrl === "") {
        this.useStatus = 400;
        return;
      }
      if (this.isType === "Тип новости") {
        this.useStatus = 400;
        return;
      }
      const formData = new FormData();
      formData.append("id", this.usePostData.id);
      formData.append("image", this.isFile);
      formData.append("name", this.isName);
      formData.append("type", this.isType);
      formData.append("text", JSON.stringify(this.isInfo));
      const status = await PostController.updatePost(formData);
      if (status === 200) {
        this.useStatus = 215;
        await this.$router.push({
          path: "/admin",
          query: { ...this.$route.query, news: "watch" },
        });
        this.useNews = "Просмотр новостей";
      } else if (status === 409) {
        this.useStatus = status;
      } else {
        this.useStatus = 500;
      }

      if (status !== 409) {
        this.clearData();
      }
    },
    clearData() {
      this.isName = "";
      this.isFile = "";
      this.isType = "Тип новости";
      this.imageUrl = "";
      this.isInfo = [{ title: "", info: [""] }];
      this.$refs.fileInput.value = null;
    },
    async deleteData() {
      const data = await PostController.deletePost(this.usePostData.id);
      if (data === 200) {
        this.useStatus = 214;
        await this.$router.push({
          path: "/admin",
          query: { ...this.$route.query, news: "watch" },
        });
        this.useNews = "Просмотр новостей";
      } else {
        this.useStatus = 500;
      }
    },
  },
};
</script>

<style scoped>
.post__container {
  display: flex;
}
.post__position {
  display: flex;
  flex-direction: column;
  max-width: 350px;
  flex-grow: 2;
  margin: 15px 20px 0 0;
}
.post__description {
  max-width: 550px;
  flex-grow: 2;
  margin: 15px 0 0 0;
  padding-left: 20px;
  border-left: 1px solid var(--violo);
}
.post__input {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  padding: 15px 20px;
  border: 1px solid var(--violo);
  border-radius: 10px;
  width: 100%;
}
.post__input:not(:last-child) {
  margin-bottom: 15px;
}
.post__type {
  background: var(--violo);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.post__other {
  border: 0px solid var(--violo);
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  border-radius: 10px;
  max-height: 0px;
  overflow: hidden;
  transition: all 0.5s ease;
}
.post__active {
  max-height: 100px;
  border: 1px solid var(--violo);
}
.post__item {
  text-align: center;
  padding: 10px 0;
  transition: all 0.3s ease;
  font-weight: 500;
}
.post__item:hover {
  background: var(--violo);
  cursor: pointer;
  color: #fff;
}
.post__wrapper {
  border: 2px dashed var(--violo);
  border-radius: 10px;
  height: 270px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.post__file {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 4;
}
.post__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
}
.post__circle {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 6;
  cursor: pointer;
}
.post__item_active {
  background: var(--violo);
  color: #fff;
}
.post__input_log {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  padding: 15px 20px;
  border: 1px solid var(--violo);
  border-radius: 10px;
  width: 100%;
  background: var(--violo);
  color: #fff;
}
.post__input_log::-webkit-input-placeholder {
  color: #fff;
}
.post__textarea {
  padding: 15px 35px 15px 20px;
  border: 1px solid var(--violo);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  border-radius: 10px;
  width: 100% !important;
  height: 200px !important;
  margin-top: 15px;
  margin-bottom: 0;
}
.post__buttons {
  display: flex;
  align-items: center;
  margin-top: 15px;
}
.post__button:nth-child(1) {
  margin-right: 20px;
}
.post__button {
  padding: 15px 20px;
  border: 1px solid var(--violo);
  font-family: "Inter", sans-serif;
  font-size: 18px;
  border-radius: 10px;
  width: 100%;
  transition: all 0.3s ease;
}
.post__button:hover {
  background: var(--violo);
  color: #fff;
}
.post__array:not(:last-child) {
  margin-bottom: 15px;
}
.post__data {
  background: #0dbe33;
  margin-top: 15px;
  color: #fff;
  font-weight: 600;
  border: 0;
  padding: 15px 20px;
}
.post__data:hover {
  transform: scale(1.03);
  background: #0dbe33;
}
.update__data {
  background: #df9637;
  margin-top: 15px;
  color: #fff;
  font-weight: 600;
  border: 0;
  padding: 15px 20px;
}
.update__data:hover {
  transform: scale(1.03);
  background: #df9637;
}
.delete__data {
  background: #df5037;
  margin-top: 15px;
  color: #fff;
  font-weight: 600;
  border: 0;
  padding: 15px 20px;
}
.delete__data:hover {
  transform: scale(1.03);
  background: #df5037;
}
.post__delay {
  position: relative;
}
.post__delete {
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  cursor: pointer;
}
.post__delete_text {
  position: absolute;
  top: 30px;
  right: 15px;
  cursor: pointer;
}
.post__border_error {
  border-color: #e02020;
}
</style>
