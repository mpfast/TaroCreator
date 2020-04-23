<style lang="scss">
@import '../style/components/calendar.scss';
</style>

<template>
  <div @contextmenu.prevent="rightClick" :class="classes" :style="customStyle">
    <div class="at-calendar__controller controller">
      <div class="controller__arrow controller__arrow--left"></div>
      <div>
        <div><span class="taro-text controller__info">2019年12月</span></div>
        <div
          class="weui-mask weui-animate-fade-in"
          style="display: none;"
        ></div>
        <div class="weui-picker weui-animate-slide-up" style="display: none;">
          <div class="weui-picker__hd">
            <div class="weui-picker__action">取消</div>
            <div class="weui-picker__action">确定</div>
          </div>
          <div class="weui-picker__bd">
            <div class="weui-picker__group">
              <div class="weui-picker__mask"></div>
              <div class="weui-picker__indicator"></div>
              <div
                class="weui-picker__content"
                style="transition: transform 0s ease 0s;"
              >
                <div
                  v-for="(year, index) in Array(2020 - 1970).keys()"
                  :key="index"
                  class="weui-picker__item"
                >
                  {{ year + 1970 }}年
                </div>
              </div>
            </div>
            <div class="weui-picker__group">
              <div class="weui-picker__mask"></div>
              <div class="weui-picker__indicator"></div>
              <div
                class="weui-picker__content"
                style="transition: transform 0s ease 0s;"
              >
                <div
                  v-for="(month, index) in 12"
                  :key="index"
                  class="weui-picker__item"
                >
                  {{ month }}月
                </div>
              </div>
            </div>
          </div>
          <input type="hidden" name="" value="2019,12,1" />
        </div>
      </div>
      <div class="controller__arrow controller__arrow--right"></div>
    </div>
    <div class="main at-calendar-slider__main at-calendar-slider__main--h5">
      <div class="at-calendar__header header">
        <div class="header__flex">
          <div
            v-for="(week, index) in ['日', '一', '二', '三', '四', '五', '六']"
            :key="index"
            class="header__flex-item"
          >
            {{ week }}
          </div>
        </div>
      </div>
      <div
        class="main__body body main__body--slider"
        style="transform: translateX(-100%) translate3d(0px, 0px, 0px);"
      >
        <div class="body__slider body__slider--pre">
          <div class="at-calendar__list flex">
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">27</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">28</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">29</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">30</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">31</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">1</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">2</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">3</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">4</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">5</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">6</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">7</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">8</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">9</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">10</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">11</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">12</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">13</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">14</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">15</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">16</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">17</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">18</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">19</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">20</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">21</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">22</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">23</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">24</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">25</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">26</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">27</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">28</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">29</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">30</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">1</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">2</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">3</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">4</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">5</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">6</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">7</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
          </div>
        </div>
        <div class="body__slider body__slider--now">
          <div class="at-calendar__list flex">
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">24</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">25</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">26</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">27</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">28</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">29</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">30</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">1</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">2</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">3</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">4</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">5</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">6</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">7</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">8</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">9</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div
              class="flex__item flex__item--now flex__item--today flex__item--selected flex__item--selected-head flex__item--selected-tail"
            >
              <div class="flex__item-container">
                <div class="container-text">10</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">11</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">12</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">13</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">14</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">15</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">16</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">17</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">18</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">19</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">20</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">21</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">22</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">23</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">24</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">25</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">26</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">27</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">28</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">29</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">30</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">31</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">1</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">2</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">3</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">4</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
          </div>
        </div>
        <div class="body__slider body__slider--next">
          <div class="at-calendar__list flex">
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">29</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">30</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--pre flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">31</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">1</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">2</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">3</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">4</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">5</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">6</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">7</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">8</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">9</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">10</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">11</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">12</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">13</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">14</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">15</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">16</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">17</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">18</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">19</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">20</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">21</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">22</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">23</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">24</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">25</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">26</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">27</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">28</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">29</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">30</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--now">
              <div class="flex__item-container">
                <div class="container-text">31</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">1</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">2</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">3</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">4</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">5</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">6</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">7</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
            <div class="flex__item flex__item--next flex__item--blur">
              <div class="flex__item-container">
                <div class="container-text">8</div>
              </div>
              <div class="flex__item-extra extra"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames'
import component from '@/components/mixins/component'

export default {
  mixins: [component],
  computed: {
    classes() {
      return classNames('at-calendar', this.className)
    }
  }
}
</script>
