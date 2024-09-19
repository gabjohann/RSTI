const { select, input, checkbox } = require("@inquirer/prompts")

const goal = {
  value: "Tomar 3L de água por dia",
  checked: false,
}

const goals = [goal]

const registerGoal = async () => {
  const goal = await input({
    message: "Digite a sua meta: ",
  })

  if (goal.length == 0) {
    console.log("A meta não pode ser vazia!")
    return
  }

  goals.push({ value: goal, checked: false })
}

const listGoals = async () => {
  if (goals.length == 0) {
    console.log("Não existem metas cadastradas!")
    return
  }

  // armazena as metas marcadas como concluídas
  const checkedGoals = await checkbox({
    message:
      "Use as setas para mudar de meta, o espaço para marcar/desmarcar a meta e o enter para finalizar.",
    choices: [...goals],
    instructions: false, // remover as instruções em inglês
  })

  // garantir que as metas iniciem como desmarcadas
  goals.forEach((goal) => {
    goal.checked = false
  })

  if (checkedGoals == 0) {
    console.log("Nenhuma meta foi selecionada!")
    return
  }

  // para cada meta selecionada, marca como concluída
  checkedGoals.forEach((checkedGoal) => {
    const goal = goals.find((selectedGoal) => {
      return selectedGoal.value == checkedGoal
    })

    goal.checked = true
  })

  console.log("Meta(s) marcada(s) como concluída(s)!")
}

const listCompletedGoals = async () => {
  const completedGoals = goals.filter((goal) => {
    return goal.checked
  })

  if (completedGoals.length == 0) {
    console.log("Não existem metas concluídas.")
    return
  }

  completedGoals.forEach((completedGoal) => {
    console.log(completedGoal.value)
  })
}

const listIncompletedGoals = async () => {
  const incompletedGoals = goals.filter((goal) => {
    return !goal.checked
  })

  if (incompletedGoals.length == 0) {
    console.log("Todas as metas foram concluídas!")
    return
  }

  incompletedGoals.forEach((incompletedGoal) => {
    console.log(incompletedGoal.value)
  })
}

const start = async () => {
  while (true) {
    const option = await select({
      message: "Menu > ",
      choices: [
        {
          name: "Cadastrar meta",
          value: "register",
        },
        {
          name: "Listar meta(s)",
          value: "list",
        },
        {
          name: "Listar meta(s) realizada(s)",
          value: "completed",
        },
        {
          name: "Listar meta(s) não realizada(s)",
          value: "incompleted",
        },
        {
          name: "Sair",
          value: "out",
        },
      ],
    })

    switch (option) {
      case "register":
        await registerGoal()
        console.log(goals)
        break
      case "list":
        await listGoals()
        break
      case "completed":
        await listCompletedGoals()
        break
      case "incompleted":
        await listIncompletedGoals()
        break
      case "out":
        console.log("Até a próxima!")
        return
    }
  }
}

start()
