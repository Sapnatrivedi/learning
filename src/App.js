import './App.css';
import Cssstyling from './Component/Cssstyling';
import Inline from './Component/Inline';
import Form from './Component/Form';
import HigerOrderCom1 from './Component/HigerOrderCom1';
import HoverCounterTwo from './Component/HoverCounterTwo';
import CounterTwo from './Component/CounterTwo';

import User from './Component/User';
import Counter from './Component/Counter';
import ComponentC from './Component/ComponentC';
import { UserProvider } from './Component/ContextCom';
import ComA from './Component/ComA';
import React, { createContext, useReducer } from 'react';
import PostList from './Component/PostList';
import PostForm from './Component/PostForm';
import UseHook from './Component/UseHook';
import CounterHook from './Component/CounterHook';
import CounterHookPre from './Component/CounterHookPre';
import UseStateObj from './Component/UseStateObj';
import UseStateArray from './Component/UseStateArray';
import UseEffect1 from './Component/UseEffect1';
import HooksMouse from './Component/HooksMouse';
import CleanUpHook from './Component/CleanUpHook';
import DataFetchFun from './Component/DataFetchFun';
import UseReduce from './Component/UseReduce';
import UseReducerThapa from './Component/UseReducerThapa';
import AddInput from './Component/AddInput';
import AnotherAdd from './Component/AnotherAdd';
import Table from './Component/Table';

// import Inedxaskey from './Component/Inedxaskey';
const FirstName = createContext();
const LastName = createContext();
function App() {
	return (
		<>
			<div className='App'>
				{/* <Inedxaskey /> */}
				{/* <Cssstyling className={true} /> */}
				{/* <Inline /> */}

				{/* <Form /> */}
				{/* <HigerOrderCom1 name='sapna' />
				<HoverCounter /> */}
				{/* <CounterTwo /> */}
				{/* <HoverCounterTwo />
				<CounterTwo />
				<User name={(isLoggedIN) => (isLoggedIN ? 'vishwas' : 'guest')} /> */}

				{/* <Counter>{(count, incrementCount) => <CounterTwo count={count} incrementCount={incrementCount} />}</Counter>
				<Counter>{(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />}</Counter> */}
				{/* <UserProvider value='vishwas'>
					<ComponentC />
				</UserProvider> */}
				{/* <FirstName.Provider value={'vinod'}>
					<LastName.Provider value={'trivedi'}>
						<ComA />
					</LastName.Provider>
				</FirstName.Provider> */}
				{/* <PostList /> */}
				{/* <PostForm />
				<UseHook />
				<CounterHook />
				<CounterHookPre />
				<UseStateObj />
				<UseStateArray /> */}
				{/* <UseEffect1 />
				<HooksMouse /> */}
				{/* <CleanUpHook/> */}
				{/* <DataFetchFun /> */}
				{/* <UseReduce />
				<UseReducerThapa /> */}
				{/* <AddInput/> */}
				{/* <AnotherAdd /> */}
				<Table />
			</div>
		</>
	);
}

export default App;
export { FirstName, LastName };
