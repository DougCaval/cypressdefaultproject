/// <reference types="cypress" />

import TodoListWebComponents from "../../PageObjects/gettingStarted.cy"
import TodoListRoute from "../../routes/todolist"


describe('Todo List do Cypress Exemplo', () => {
  //estou invocando todas as propriedades das minhas classes dentro de const que vou usar aqui nos testes 
  const todoListRoute = new TodoListRoute()
  const todoListWebComponents = new TodoListWebComponents()

  beforeEach(() => {
    //estou consumindo meu método criado em Routes aqui para visitar o site da TODO List
    todoListRoute.VisitTodoList()
  })

  it('Mostrar dois intens na minha TODO List como padrão', () => {
    //note que eu criei meus métodos lá na pageObjects e estou consumindo aqui com o parâmetro que eu desejar
    todoListWebComponents.TodoDoListLenght(2)
    todoListWebComponents.TakeEvidence('Tamanho da Todo List')
    //aqui estou conferindo o nome do primeiro item da lista, note que passei como parâmetro do método
    todoListWebComponents.FirstItemAtTodoList('Pay electric bill')
    todoListWebComponents.TakeEvidence('Primeiro Item da Todo List')
    //aqui estou conferindo o nome do último item da lista, note que passei como parâmetro do método
    todoListWebComponents.LastItemAtTodoList('Walk the dog')
    todoListWebComponents.TakeEvidence('Último Item da Todo List')
  })

  it('Adicionando novos itens na Todo List', () => {
    // Aqui estamos armazenando o item, que quero adicionar na todo list, em uma const
    const newItem = 'Novo item adicionado'
    const newItem2 = 'Mais um item adicionado'
    todoListWebComponents.AddNewItemAtTodoList(newItem)
    todoListWebComponents.TakeEvidence('Novo item adicionado')
    //deste modo podemos reutilizar nosso método quantas vezes for preciso mudando apenas os parâmetros
    todoListWebComponents.AddNewItemAtTodoList(newItem2)
    todoListWebComponents.LoadInterface(4000)
    todoListWebComponents.TakeEvidence('Mais um item adicionado na todo List')
    //Aqui faço um check na todo list, atenção: osparâmetros que você passar deve respeitar a sequência lógica do seu método , neste caso primeiro lenght e depois item
    todoListWebComponents.CheckTodoList(4, newItem2)
    todoListWebComponents.TakeEvidence('Check no Todo List')
  })

  it('Checar que um item está completo na Todo List', () => {

    todoListWebComponents.CheckDoneAnItem('Pay electric bill')
    todoListWebComponents.TakeEvidence('Item foi afirmado como cloncluído')


    todoListWebComponents.CheckDoneConfirmAnItem('Pay electric bill')
    todoListWebComponents.TakeEvidence('confirmar que o item foi marcado como concluído')
  })

  context('Qual task foi realizada o check de done?', () => {
    beforeEach(() => {

      todoListWebComponents.CheckStatusAnItem('Pay electric bill')
      todoListWebComponents.TakeEvidence('Checar o status do item')
    })

    it('Filtrar por tasks Imcompletas', () => {

      todoListWebComponents.FilterIncompletTasks()
      todoListWebComponents.TakeEvidence('Filtro por tasks imcompletas')


      todoListWebComponents.CheckVisibleTaskOnList('Pay electric bill')
      todoListWebComponents.TakeEvidence('Checar que a task que concluí não está mais visível')
    })

    it('Fitrar por tasks Completas', () => {
      todoListWebComponents.FilterCompletTasks()

        .should('have.text', nameItemDid)
      todoListWebComponents.ConfirmItemHasBeenDid(1,'Pay electric bill')
      
      
      
    })

    it('Fitrar por tasks Completas e confirmar que não tem itens imcompletos na listad e completos', () => {
      
      
      todoListWebComponents.ConfirmNoHaveItemIncomplet('Walk the dog')
      
    })

    it('Deletar todas as Task ', () => {
     
      //Deletar todos os itens da Lista de Todo
      todoListWebComponents.DeleteAllTasks()

      //Checando que não existem mais itens na Lista de Todo
      todoListWebComponents.CheckNoItemOnList('Pay electric bill')

      // Confirmando que o botão de deletar todas as tasks não está mais visível
      todoListWebComponents.DeleteNoMoreOption()
    })
  })
})
