import Util from './../../libs/util'

const todo = {
    namespaced: true,
    state: {
        todoList: []
    },
    mutations: {
    },
    actions: {
        async getTodoList({ state }) {
            let rep = await Util.ajax.get('/todo');
            state.todoList = [];
            state.todoList.push(...rep.data);
        },
        async delete({ state }, payload) {
            let rep = await Util.ajax.delete('/todo/' + payload.data.id);
            if(rep.data === true) {
                state.todoList.splice(state.todoList.indexOf(payload.data), 1 );
            }
        },
        async create({ state, dispatch }, payload) {
            let rep = await Util.ajax.post('/todo', payload.data);
            state.todoList.push(rep.data);
        },
        async patchStatus({ state, dispatch }, payload) {
            let rep = await Util.ajax.patch('/todo/' + payload.data.id, payload.data);
        }
    }
};

export default todo;