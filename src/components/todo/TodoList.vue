<template>
  <div style="text-align: center; padding-top: 20px;">
    <div class="todo-section">
      <el-row>
        <el-col :span="20">
          <el-input
            v-model="input"
            placeholder=""
          />
        </el-col>
        <el-col
          :span="4"
          class="pull-right"
        >
          <el-button
            type="primary"
            @click="addTodo"
          >
            Add
          </el-button>
        </el-col>
      </el-row>
      <span v-if="todoList && todoList.length > 0">
        <div
          v-for="(todo, index) in todoList"
          :key="index"
          @mouseover="mouseOver(index)"
          @mouseleave="mouseLeave(index)"
        >
          <el-row class="el-todo-row">
            <el-col
              :span="22"
              style="text-align: left;"
            >
              <el-checkbox
                v-model="todo.status"
                @change="todoStatusChange(todo)"
              >{{ todo.todo }}</el-checkbox>
            </el-col>
            <el-col
              v-show="index === activeTodoIndex"
              :span="2"
              class="pull-right"
            >
              <span @click="deleteTodo(todo)"><i class="el-icon-close" /></span>
            </el-col>
          </el-row>
        </div>
      </span>
      <span v-else>
        <el-row class="el-todo-row">
          <el-col
            :span="24"
            style="text-align: center;"
          >
            <span style="opacity: 0.5;">No items</span>
          </el-col>
        </el-row>
      </span>
    </div>
  </div>
</template>

<script src="./todoList.js"></script>

<style>
.todo-section {
    background-color: white;
    border-radius: 4px;
    border: solid 1px rgb(166, 201, 236);
    width: 80%;
    margin: auto;
}

.el-row {
    padding: 10px;
}

.el-todo-row {
    border-top: solid 1px rgb(166, 201, 236);
  }

  .el-todo-row:hover{
      background-color: #b9c8ea;
  }

  .pull-right{
      text-align: right; 
  }
</style>