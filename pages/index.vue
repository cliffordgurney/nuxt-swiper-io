<template>
    <section class="container">,
        <div v-swiper:mySwiper="swiperOption">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="banner in banners" :key="banner">
                    <img :src="banner">
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            banners: [
                'http://placehold.it/300x300',
                'http://placehold.it/300x300',
                'http://placehold.it/300x300'
            ],
            swiperOption: {
                autoplay: 5000,
                initialSlide: 1,
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                paginationElement: 'li',
                onSlideChangeEnd: swiper => {
                    console.log('onSlideChangeEnd', swiper.realIndex)
                },
                onTap: swiper => {
                    console.log('onTap', swiper.realIndex)
                }
            }
        }
    },
    mounted () {
        console.log('app init', this)
        // setTimeout(() => {
        //     this.banners.push('/5.jpg')
        //     console.log('banners update')
        // }, 3000)
        console.log(
            'This is current swiper instance object', this.mySwiper,
            'I will slideTo banners 3')
        this.mySwiper.slideTo(3)
    }
}
</script>

<style>
.my-swiper {
    height: 300px;
    width: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
}

html,
body {
    position: relative;
    height: 100%;
}

body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
}

.swiper-container {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
</style>
