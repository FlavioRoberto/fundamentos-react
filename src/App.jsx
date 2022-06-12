import React from 'react';
import './App.css';
import { getRandomInt } from './services/number.service';
import First from './components/basics/First';
import WithParameter from './components/basics/WithParameter';
import Fragment from './components/basics/Fragment';
import Random from './components/basics/Random';
import Card from './components/layouts/Card/Card';
import Family from './components/basics/Family';
import FamilyMember from './components/basics/FamilyMember';
import StudentsLists from './components/Loop/StudentsList';
import ProductsTable from './components/Loop/ProductsTable';
import EvenOrOdd from './components/conditionals/EvenOrOdd';
import UserInfo from './components/conditionals/UserInfo';
import ToChild from './components/comunication/ToChild';
import InputControled from './components/Forms/InputControlled';
import InputUncontroled from './components/Forms/InputUncontrolled';

const App = () => (
    <div id='app'>
        <h1>React essentials</h1>
        <div className='content'>
            <Card title="Uncontrolled components - Input" color="#fe9c8f">
                <InputUncontroled />
            </Card>

            <Card title="Controlled components - Input" color="#fe9c8f">
                <InputControled />
            </Card>

            <Card title='User conditional else' color='#fe4a49'>
                <ToChild />
            </Card>

            <Card title='User conditional else' color='#451e3e'>
                <UserInfo
                    user={{
                        name: '',
                    }}
                />
            </Card>

            <Card title='User conditional if' color='#b3cde0'>
                <UserInfo
                    user={{
                        name: 'Flávio',
                    }}
                />
            </Card>

            <Card title='Even Or Odd' color='#2AB12A'>
                <EvenOrOdd number={getRandomInt(1, 10)} />
            </Card>

            <Card title='Products table' color='#2AB7FA'>
                <ProductsTable />
            </Card>

            <Card title='List components' color='#2AB7CA'>
                <StudentsLists />
            </Card>

            <Card title='Components with children' color='#2AB29A'>
                <Family lastName='Son'>
                    <FamilyMember name='Goku' />
                    <FamilyMember name='Gohan' />
                    <FamilyMember name='Goten' />
                </Family>
            </Card>

            <Card title='Random numbers' color='#FA6900'>
                <Random min={1} max={5} />
            </Card>

            <Card title='Fragment'>
                <Fragment />
            </Card>

            <Card title='With parameter'>
                <WithParameter title='second component' subtitle='Very nice!' />
            </Card>

            <Card title='First component'>
                <First />
            </Card>
        </div>
    </div>
);

export default App;
