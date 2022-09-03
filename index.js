// adiciono o express
const express = require('express')
//importamos o sequelize
const { Sequelize, DataTypes } = require('sequelize')
//importamos modelo da tarefa creado por sequelize
const Task = require('./models/task')

const app = express()
//façemos a conexao com o banco de dados
const sequelize = new Sequelize({ 
    dialect: 'sqlite', 
    storage: 'task-list.db' 
})

//pasamos a conexao e os tipos de dados
const tasks = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

//façemos a lista de tarefas
app.get('/tasks/', async (req, res) => {
    const allTasks = await tasks.findAll()
  res.json({ allTasks })
})

// Crear uma tarefa //para crear un nuevo registro dentro da tabela
app.post('/tasks', async (req, res) => {
    const newReg = await tasks.create({"name": "Geología"})
    res.json({ newReg })
    })

//Atualizar tarefas //para atualizar um registro, depois de encontrar a chave primaria
app.put('/tasks/:id', async (req, res) => {
    const upReg = await tasks.findByPk(9)
    upReg.update({"name": "Biología"})
    res.json({ upReg })
})

//Apagar tarefas //para deletar um item de nossa tabela
app.delete('/tasks/:id', async (req, res) => {
    const delReg = await tasks.destroy({where: {id:11,}})
    res.json({ delReg })
})
  
app.listen(3000, () => {
  console.log('Iniciando o servidor ExpressJS na porta 3000')
})