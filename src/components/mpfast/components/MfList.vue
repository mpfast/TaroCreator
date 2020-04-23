<style lang="scss">
@import './../../taro-ui/style/components/flex.scss';

.card {
  width: auto;
  margin: 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.image {
  display: block;
  width: inherit;
  border-radius: 6px 0 0 6px;
}
.title {
  font-size: 12px;
  overflow: hidden; /*超出隐藏*/
  white-space: nowrap; /*文本不会换行*/
  text-overflow: ellipsis; /*省略符号来代表被修剪的文本。*/
}
.subtitle {
  color: darkgray;
  font-size: 10px;
}
</style>

<template>
  <OtView @contextmenu.native="rightClick" className="mf-list">
    <OtView
      v-for="(item, index) in list"
      :key="index"
      className="card at-row at-row__align--center at-row__justify--between"
    >
      <OtView className="at-col at-col-4">
        <OtImage
          mode="aspectFill"
          className="image"
          style="height: 128px;"
          :src="item.image"
          lazyLoad
        />
      </OtView>
      <OtView className="at-col at-col-8 at-col--wrap" style="padding: 0 8px;">
        <OtView className="title">{{ item.title }}</OtView>
        <OtView className="subtitle">{{ item.subtitle }}</OtView>
        <OtView className="at-row">
          <OtView
            v-for="(tag, index) in item.tags"
            :key="index"
            className="at-col"
          >
            <AtTag type="primary" active size="small" circle :slots="tag.name">
            </AtTag>
          </OtView>
        </OtView>
      </OtView>
    </OtView>
  </OtView>
</template>

<script>
import OtView from '@/components/taro/components/View'
import OtImage from '@/components/taro/components/Image'
import AtTag from '@/components/taro-ui/components/AtTag'
import component from '@/components/mixins/component'

export default {
  components: {
    OtView,
    OtImage,
    AtTag
  },
  mixins: [component],
  props: {
    list: {
      type: Array,
      default: () => [
        {
          id: 1,
          image: 'https://jdc.jd.com/img/400',
          title:
            'Deserunt irure consectetur culpa irure culpa sit incididunt ad.',
          subtitle:
            'Tempor tempor occaecat aliquip culpa sit occaecat velit culpa Lorem et mollit.',
          tags: [
            { name: 'Tag1' },
            { name: 'Tag2' },
            { name: 'Tag3' },
            { name: 'Tag4' }
          ]
        },
        {
          id: 2,
          image: 'https://jdc.jd.com/img/400',
          title:
            'Ut sunt consectetur id aute nostrud anim proident deserunt occaecat anim sit dolor.',
          subtitle:
            'Non ipsum ut non proident magna anim in nostrud aute excepteur pariatur.',
          tags: [
            { name: 'Tag1' },
            { name: 'Tag2' },
            { name: 'Tag3' },
            { name: 'Tag4' }
          ]
        }
      ]
    }
  },
  computed: {
    attrs() {
      return {
        list: {
          type: 'array'
        }
      }
    },
    code() {
      return `
        {/***************请手动复制样式代码***************
        .card {
          width: auto;
          margin: 16px;
          border-radius: 8px;
          background: #fff;
          box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
            0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        }
        .image {
          display: block;
          width: inherit;
          border-radius: 6px 0 0 6px;
        }
        .title {
          font-size: 12px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .subtitle {
          color: darkgray;
          font-size: 10px;
        }
        ***************请手动复制list数据***************/}
        // const list = ${JSON.stringify(this.list)}
        (
          <View>
            {list.map((item, index) => {
              return (
                <View
                  key={index}
                  className="card at-row at-row__align--center at-row__justify--between"
                >
                  <View className="at-col at-col-4">
                    <Image
                      mode="aspectFill"
                      className="image"
                      style="height: 128px;"
                      src={item.image}
                      lazyLoad
                    />
                  </View>
                  <View
                    className="at-col at-col-8 at-col--wrap"
                    style="padding: 0 8px;"
                  >
                    <View className="title">{item.title}</View>
                    <View className="subtitle">{item.subtitle}</View>
                    <View className="at-row">
                      {item.tags.map((tag, index) => {
                        return (
                          <View key={index} className="at-col">
                            <AtTag type="primary" size="small" active circle>
                              {tag.name}
                            </AtTag>
                          </View>
                        )
                      })}
                    </View>
                  </View>
                </View>
              )
            })}
          </View>          
        )
      `
    }
  }
}
</script>
