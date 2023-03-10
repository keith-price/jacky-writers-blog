<template>
    <div class="home">
        <BlogPost :post="welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
        <div class="blog-card-wrap">
            <div class="container">
                <h3>View more articles</h3>
                <div class="blog-cards">
                    <BlogCard :card="card" v-for="(card, index) in sampleBlogCards" :key="index" />
                </div>
            </div>
        </div>
        <div class="updates">
            <div class="container">
                <h2>Never miss a post. Register for your free account today!</h2>
                <router-link class="router-button" to="#">Register Today!
                    <Arrow class="arrow arrow-light" />
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from "../components/BlogCard.vue"
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
    name: "Home",
    components: { BlogPost, BlogCard, Arrow },
    data() {
        return {
            welcomeScreen: {
                title: "Welcome!",
                blogPost: "Unleash Your Creative Potential: Tips and Strategies for Mastering the Art of Writing.",
                welcomeScreen: true,
                photo: 'coding'

            },
            sampleBlogPost: [
                {
                    blogTitle: "Filler content",
                    blogHTML: "Nothing at the moment.",
                    blogCoverPhoto: "beautiful-stories"
                },
                {
                    blogTitle: "Filler content",
                    blogHTML: "Nothing at the moment.",
                    blogCoverPhoto: "designed-for-everyone"
                }
            ],
        }
    },
    // brings the sampleBlogCards data in from the store as it will be used in multiple places - DRY
    computed: {
       sampleBlogCards() {
        return this.$store.state.sampleBlogCards
       }
    }

};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
    h3 {
        font-weight: 300;
        font-size: 28px;
        margin-bottom: 32px;
    }
}

.updates {
    .container {
        padding: 100px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(min-width: 800px) {
            padding: 125px 25px;
            flex-direction: row;
        }

        .router-button {
            display: flex;
            font-size: 14px;

            @media(min-width: 800px) {
                margin-left: auto;
            }
        }

        h2 {
            font-weight: 300;
            font-size: 32px;
            max-width: 425px;
            width: 100%;
            text-align: center;
            text-transform: uppercase;

            @media(min-width: 800px) {
                text-align: initial;
                font-size: 40px;
            }
        }
    }
}
</style>