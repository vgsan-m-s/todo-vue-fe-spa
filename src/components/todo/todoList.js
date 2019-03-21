export default {
  name: 'TodoList',
  data() {
    return {
      input: '',
      activeTodoIndex: null,
      todoList: []
    }
  },
  methods: {
    async addTodo() {
      let vm = this;
      await vm.$store.dispatch({
          type: "todo/create",
          data: { todo: vm.input, status:false}
      });
      vm.input = '';
    },
    async todoStatusChange(task){
      let vm = this;
      await vm.$store.dispatch({
          type: "todo/patchStatus",
          data: { id: task.id, status:task.status}
      });
    },
      async deleteTodo(task) {
        let vm = this;
        await vm.$store.dispatch({
            type: "todo/delete",
            data: task
        });
        vm.activeTodoIndex = null;
      },
      mouseOver(index) {
          this.activeTodoIndex = index;
      },
      mouseLeave(index) {
        if(this.activeTodoIndex === index) {
            this.activeTodoIndex = null;
        }
    }
  },
  async created() {

        let vm = this;
        await vm.$store.dispatch({
            type: "todo/getTodoList"
        });

        vm.todoList = vm.$store.state.todo.todoList;
  }
}