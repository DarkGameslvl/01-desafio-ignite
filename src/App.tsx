import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ClipboardSvg from './assets/clipboard.svg'
import PlusSvg from './assets/plus.svg'
import RocketLogo from './assets/rocket.svg'
import { Task } from './task'

interface Tasks {
  id: string
  checked: boolean
  content: string
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([])
  const [content, setContent] = useState('')

  function handleCreateNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (content === '') return
    setTasks(oldTasks => [...oldTasks, { id: uuidv4(), checked: false, content }])
    setContent('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setContent(event.target.value)
  }

  function handleToggleTaskCheck(id: string) {
    const newTasksWithCheckChanged = tasks.map(task => {
      return task.id === id ? { ...task, checked: !task.checked } : task
    })
    setTasks(newTasksWithCheckChanged)
  }

  function handleDeleteTask(id: string) {
    const newTasksWithoutDeleted = tasks.filter(task => task.id !== id)
    setTasks(newTasksWithoutDeleted)
  }

  const hasTasks = tasks.length > 0
  const tasksDone = tasks.filter(task => task.checked)

  return (
    <>
      <header className="flex items-end justify-center gap-3 bg-gray-700 pt-[72px] pb-20">
        <img className="mb-0.5" src={RocketLogo} alt="Logótipo de um Foguete" />
        <div>
          <span className="text-[40px] font-black leading-[48px] text-blue">to</span>
          <span className="text-[40px] font-black leading-[48px] text-blue-dark">do</span>
        </div>
      </header>

      <div className="mx-auto w-[736px]">
        <form
          className="grid -translate-y-2/4 grid-cols-[1fr_auto] gap-2"
          onSubmit={handleCreateNewTask}
        >
          <input
            className="rounded-lg bg-gray-500 p-4 text-gray-100 outline-0 placeholder:leading-[1.4] placeholder:text-gray-300 focus:shadow-[0_0_0_1px] focus:shadow-purple-dark"
            type="text"
            value={content}
            onChange={handleNewTaskChange}
            placeholder="Adicione uma nova tarefa"
          />
          <button className="flex items-center gap-2 rounded-lg bg-blue-dark p-4 text-sm font-bold text-gray-100 hover:bg-blue">
            Criar <img src={PlusSvg} />
          </button>
        </form>

        <div className="mt-9 mb-6 flex justify-between">
          <div>
            <span className="text-[14px] font-bold leading-[17px] text-blue">
              Tarefas criadas
            </span>
            <span className="ml-2 rounded-full bg-gray-400 px-2 py-0.5 text-[12px] font-bold leading-[15px] text-gray-200">
              {tasks.length}
            </span>
          </div>

          <div>
            <span className="text-[14px] font-bold leading-[17px] text-purple">
              Concluídas
            </span>
            <span className="ml-2 rounded-full bg-gray-400 px-2 py-0.5 text-[12px] font-bold leading-[15px] text-gray-200">
              {hasTasks ? `${tasksDone.length} de ${tasks.length}` : 0}
            </span>
          </div>
        </div>

        {!hasTasks && (
          <div>
            <div className="h-px w-full bg-gray-400" />

            <img className="mx-auto mt-16" src={ClipboardSvg} alt="Prancheta" />
            <div className="mt-4 text-center text-[16px] leading-[22px] text-gray-300">
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              checked={task.checked}
              content={task.content}
              onDeleteTask={handleDeleteTask}
              onToggleTaskCheck={handleToggleTaskCheck}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
