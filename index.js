// adiciono o express
const express = require('express')
//const { Sequelize, DataTypes } = require('sequelize')
//const Task = require('./models/task')

const app = express()
//const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' })
//const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

//façemos a lista de tarefas
app.get('/tasks', (req, res) => {
  res.json({ action: 'Listando tarefas' })
})

// Crear uma tarefa
app.post('/tasks', (req, res) => {
  const body = req.body

  res.json(body)
})

//Mostrar uma tarefa
app.get('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Mostrando uma tarefa', taskId: taskId })
})

//Atualizar tarefas
app.put('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Atualizando tarefas', taskId: taskId })
})

//Apagar tarefas
app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Apagando tarefas', taskId: taskId })
})

app.listen(3000, () => {
  console.log('Iniciando o servidor ExpressJS na porta 3000')
})