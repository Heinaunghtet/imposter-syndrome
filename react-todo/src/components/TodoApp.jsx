import { useEffect } from 'react';
import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from '@/components/Navbar';
import TestUseEffect from '@/components/TestUseEffect';


const TodoApp = () => {

    useEffect(() => {
        console.log('I am running');
    });

    return (


        <div>

            <Header></Header>
            <Navbar></Navbar>
            <TodosLogic></TodosLogic>
            <TestUseEffect></TestUseEffect>

        </div>
    )
}

export default TodoApp;