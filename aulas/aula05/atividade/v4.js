const { select, input, checkbox } = require('@inquirer/prompts')

let goal = {
  value: 'Tomar 3L de água por dia',
  checked: false
}

let goals = [goal]

const registerGoal = async () => {
  const goal = await input({ message: 'Digite a sua meta:' })

  if (goal.length == 0) {
    console.log('A meta não pode ser vazia!')
    return
  }

  goals.push({ value: goal, checked: false }) // inicia falsa, pois está sendo somente cadastrada
}

const listGoals = async () => {
  if (goals.length == 0) {
    console.log('Não existem metas cadastradas!')
    return
  }

  // armazena as metas marcadas como concluídas
  const checkedGoals = await checkbox({
    message:
      'Use as setas para mudar de meta e o espaço para marcar/desmarcar a meta e o enter para finalizar.',
    choices: [...goals],
    instructions: false // remove as instruções em inglês
  })

  // garante que todas as metas iniciem como desmarcadas
  goals.forEach((goal) => {
    goal.checked = false
  })

  if (checkedGoals == 0) {
    console.log('Nenhuma meta foi selecionada!')
    return
  }

  // para cada meta selecionada, ele marca como concluída
  checkedGoals.forEach((checkedGoal) => {
    const goal = goals.find((selectedGoal) => {
      return selectedGoal.value == checkedGoal
    })

    goal.checked = true
  })

  console.log('Meta(s) marcada(s) como concluída(s)')
}

const start = async () => {
  while (true) {
    const option = await select({
      message: 'Menu > ',
      choices: [
        {
          name: 'Cadastrar meta',
          value: 'register'
        }, // adicionar ao menu
        {
          name: 'Listar meta(s)',
          value: 'list'
        },
        {
          name: 'Sair',
          value: 'out'
        }
      ]
    })

    switch (option) {
      case 'register':
        await registerGoal()
        console.log(goals)
        break
      case 'list':
        await listGoals()
        break
      case 'out':
        console.log('Até a próxima!')
        return
    }
  }
}

start()
