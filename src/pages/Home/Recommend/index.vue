<template>
  <div class="today-recommend">
    <div class="py-container">
      <ul class="recommend">
        <li class="banner">
         
          <img src="./images/4444.webp" alt="">
          <!-- <audio src="./music/半岛铁盒.mp3" autoplay="autoplay" controls="controls" loop="loop"></audio> -->
          
        </li>
        <li class="banner">
          <img src="./images/555.webp" />
        </li>
        <li class="banner">
          <img src="./images/666.webp" />
        </li>
        <li class="banner">
          <img src="./images/777.webp" />
        </li>
        <li class="banner">
          <img src="./images/888.webp" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style scoped lang="less">
//音乐模块




//其他
.today-recommend {
  .py-container {
    width: 1200px;
    margin: 0 auto;

    .recommend {
      height: 165px;
      background-color: #eaeaea;
      margin: 50px 0;
      display: flex;

      .clock {
        width: 16.67%;
        // background: url('./images/半岛铁盒.jpg');
        // color: #fff;
        // font-size: 18px;
        // text-align: center;

        .time {
          padding: 30px 0;
       
        }
        .time img {

        }
        h3 {
          margin: 9px 0;
          font-weight: 700;
          font-size: 18px;
          line-height: 30.06px;
        }
      }

      .banner {
        width: 20.83%;

        img {
          width: 100%;
          height: 100%;
          transition: all 400ms;

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
