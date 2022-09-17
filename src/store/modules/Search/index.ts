import { state } from '@/store/modules/Search/state';
import { actions } from '@/store/modules/Search/actions';
import { mutations } from '@/store/modules/Search/mutations';
import { getters } from '@/store/modules/Search/getters';

export const searchStore = {
  namespaced: true,
  state: {
    ...state,
  },
  actions: {
    ...actions,
  },
  mutations: {
    ...mutations,
  },
  getters: {
    ...getters,
  },
};
