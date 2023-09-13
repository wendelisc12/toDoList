import { useState } from 'react'
import './todoList.css'
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const TodoList = () => {
    
    const[date] = useState<Date>(new Date())
    const diaDaSemana = format(date, 'EEEE', { locale: ptBR });

    return (
        <div id='lista-box'>
            <div id='lista-container'>
                <div id='title'>
                    <h1>Minhas tarefas</h1>
                    <h2>{diaDaSemana},{date.getDate()}</h2>
                </div>
                <hr />
                <div id='insert-atividade'>
                    <input type="text" name="" placeholder='adicionar uma tarefa' id="inserirAtividade" />
                    <button id='add-button'> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
