<!--Created by Weiun on 2017/1/17.-->
<template>
    <Row type="flex" justify="space-between" align="middle">
        <Col span="1" style="padding: 20px;">
              <Avatar style="background-color: #87d068"  size="large" icon="person" />
        </Col>
        <Col span="2" style="padding-left: 5px;">
             <span class="userName">系统管理员</span>
        </Col>
        <Col span="20" style="padding: 20px;">
              
        </Col>
        <Col span="1" style="padding: 20px;">
              <Button type="info" size='large' shape="circle" icon="log-out"></Button>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {}
        },
        mounted: function () {
            this.$nextTick(function () {
                // 代码保证 this. 在 document 中
            })
        },
        beforeDestroy () {

        },
        methods: {}
    }
</script>
<style scoped>
    /*@import '../styles/common.css';*/
    .userName{
        color: #fff;
    }
</style>