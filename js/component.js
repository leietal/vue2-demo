// 定义一个分页组件
Vue.component('v-page', {
    template:
    `<div class="btn-group" role="group" v-if="page">
        <button type="button" class="btn btn-default" @click="first" :disabled="isFirst">首页</button>
        <button type="button" class="btn btn-default" @click="prev" :disabled="isFirst">上一页</button>
        <button type="button" class="btn btn-default" disabled>{{page.pageNo + ' / '+ page.pageCount}}</button>
        <button type="button" class="btn btn-default" @click="next" :disabled="isLast">下一页</button>
        <button type="button" class="btn btn-default" @click="last" :disabled="isLast">末页</button>
    </div>`,
    props: ['page'],
    computed: {
        isFirst: function(){
            return this.page.pageNo == 1;
        },
        isLast: function(){
            return this.page.pageNo == this.page.pageCount;
        }
    },
    data: function () {
        return {
        }
    },
    methods: {
        first: function () {
            this.query(1);
        },
        prev: function(){
            this.query(--this.page.pageNo);
        },
        next: function(){
            this.query(++this.page.pageNo);
        },
        last: function(){
            this.query(this.page.pageCount);
        },
        query: function(pageNo){
            if(pageNo == 0 || pageNo > this.page.pageCount){
                return;
            }
            this.page.pageNo = pageNo;
            this.$emit('query');
        }
    }
});