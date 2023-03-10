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
    </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from "../components/BlogCard.vue"
export default {
    name: "Home",
    components: { BlogPost, BlogCard },
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
            sampleBlogCards: [
                {
                    blogTitle: "Blog Card #1",
                    blogCoverPhoto: "stock-1",
                    blogDate: "10/03/2023",
                },
                {
                    blogTitle: "Blog Card #2",
                    blogCoverPhoto: "stock-2",
                    blogDate: "10/03/2023",
                },
                {
                    blogTitle: "Blog Card #3",
                    blogCoverPhoto: "stock-3",
                    blogDate: "10/03/2023",
                },
                {
                    blogTitle: "Blog Card #4",
                    blogCoverPhoto: "stock-4",
                    blogDate: "10/03/2023",
                }
            ]
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
</style>