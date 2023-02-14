import CheckMarkedSvg from './assets/check-marked.svg'
import CheckSvg from './assets/check.svg'
import Trash from './assets/trash.svg'
import { cn } from './utils'

interface TaskProps {
  id: string
  checked: boolean
  content: string
  onDeleteTask: (id: string) => void
  onToggleTaskCheck: (id: string) => void
}

export function Task({
  id,
  checked,
  content,
  onDeleteTask,
  onToggleTaskCheck,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id)
  }

  function handleToggleTaskCheck() {
    onToggleTaskCheck(id)
  }

  return (
    <div className="flex items-start gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
      <div onClick={handleToggleTaskCheck}>
        {checked ? <img src={CheckMarkedSvg} alt="" /> : <img src={CheckSvg} alt="" />}
      </div>
      <div
        className={cn(
          'flex-1 text-[14px] leading-[20px] text-gray-100',
          checked && 'text-gray-300 line-through'
        )}
      >
        {content}
      </div>
      <button onClick={handleDeleteTask} title="Deletar task">
        <img className="max-w-none" src={Trash} alt="" />
      </button>
    </div>
  )
}
