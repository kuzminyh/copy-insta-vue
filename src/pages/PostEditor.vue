<template>
   <div class="container" v-if = "post">
       huli
       {{postId}}
		<div class="post">

			<div class="post__header">

				<div class="post__user">
					<div class="user">
						<a href="#" class="user__avatar">
							<img src="img/avatars/01.png" alt="">
						</a>
						<a href="#" class="user__name">
							Alexander Alexandrov
						</a>
					</div>

				</div>

				<div class="post__links">
				</div>
			</div>

			<div class="post__img">
				<img src="img/posts/man-in-forest.jpg" alt="Photo">
			</div>

			<div class="post__edit">
				<div class="post__edit-name">Описание:</div>
				<div class="post__edit-textarea-wrapper">
					<textarea
						class="post__edit-textarea">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus fugiat, aliquam! In fugit id sint, nam repellendus possimus sit itaque aspernatur modi facere earum mollitia veritatis officia quo iste nisi.</textarea>
				</div>
			</div>

			<div class="post__edit">
				<div class="post__edit-name">Хэштеги:</div>
				<div class="post__edit-textarea-wrapper">
					<textarea class="post__edit-textarea">#forest #travel #journey #holiday</textarea>
				</div>
			</div>

			<div class="post__buttons">
				<button class="btn btn--save">Сохранить</button>
				<button class="btn btn--cancel">Отмена</button>
			</div>
		</div>

	</div>
</template>
<script>
export default {
    created() {
        const posts = require('./../fakedata.json').posts
        for(const post of posts) {
            if (post === this.postId) {
                return this.post = post
            }
        }
    },  //хук жизненного компонента
    data() {
        return {
            post: null
        }
    },
    computed: {
      postId()   {     //чтобы получить страничку по id выделяем id
         return parseInt(this.$route.params.id)
      }
    }
}
</script>