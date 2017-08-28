import httpService from '../../libs/httpService'

const state = {
    scrollTop: 0,
    // 菜单
    'menus': [{
        'id': '1',
        'name': '用户管理',
        'subMenus': [{
            'id': '11',
            'name': '用户列表'
        }, {
            'id': '12',
            'name': '充值记录'
        }, {
            'id': '13',
            'name': '分享记录'
        }, {
            'id': '14',
            'name': '免费赠送记录'
        }]
    }, {
        'id': '2',
        'name': '短信管理',
        'subMenus': [{
            'id': '21',
            'name': '会话记录'
        }, {
            'id': '22',
            'name': '短信记录'
        }]
    }],
    // 当前活动菜单
    'activeMenuName': ''
}

// getters
const getters = {
    // scrollTop: state => state.scrollTop,
    menus: state => state.menus,
    tabs: state => state.tabs
}

// actions
const actions = {
    setScrollTop({commit, state}, param) {
        return new Promise((resolve, reject) => {
            commit('setScrollTop', param);
            resolve();
        })
    }
}

// mutations
const mutations = {
    tabsAdd(state, tab) {
        console.log('mutations-tabsAdd:' + tab);
        state.tabs.push(tab);
    },
    tabsRemove(state, id) {
        console.log('mutations-tabsRemove:' + id);
        let index = -1
        for (let i = 0; i < state.tabs.length; i++) {
            let tab = state.tabs[i];
            if (tab.id === id) {
                state.tabs.splice(i, 1);
                break;
            }
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}