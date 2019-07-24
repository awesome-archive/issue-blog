const state = {
  username: 'ttop5', // GitHub 用户名
  repository: 'blog', // 记录 issue 的仓库名
  accessToken: 'MGNhMTQ3YTRlMGQ0NGFkM2JjZTdmMTI5MTQzYWFkY2ZjMWQ0NmMyNg==', // 经过 base64 加密后的 GitHub Token https://github.com/settings/tokens/new
};

const getters = {
  username(s) {
    return s.username;
  },
  repository(s) {
    return `${s.username}/${s.repository}`;
  },
  accessToken(s) {
    return s.accessToken;
  },
};

const mutations = {};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};