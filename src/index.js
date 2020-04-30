import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

/* 定义组件有两个要求： */
/* 组件名称必须以大写字母开头 */
/* 组件的返回值只能有一个根元素 */

/* 无论是使用函数或是类来声明一个组件，它决不能修改它自己的 props */
/* 所有 React 组件都必须是纯函数，并禁止修改其自身 props */
/* React是单项数据流，父组件改变了属性，那么子组件视图会更新 */
/* 属性 props 是外界传递过来的，状态 state 是组件本身的，状态可以在组件中任意修改 */
/* 组件的属性和状态改变都会更新视图 */

/* 区别 */
/* 函数组件和类组件是有区别的，而且函数组件的性能比类组件要高 */
/* 因为类组件使用的时间要实例化，而函数组件直接执行函数取返回结果即可 */
/* 为了提高性能，尽量使用函数组件 */
/* 函数组件没有 this，没有生命周期，没有状态 state，不过19年底推出了 React hooks 新特性,这种新特性允许你在不写类组件的情况下，操作 state 和 react 的其他特性 */
/* React hooks 新特性学习地址 https://segmentfault.com/a/1190000019513907 */
/* 类组件有 this，有生命周期，有状态 state */

class Square extends React.Component {
	// constructor(props) {
	// 	// 在 JavaScript 中，每次你定义其子类的构造函数是，都需要调用 super 方法，因此，在所有含有构造函数的 React 组件中，构造函数必须以 super(props) 开头。
	// 	super(props);
	// 	this.state = {
	// 		value: null,
	// 	};
	// }

	render() {
		return (
			<button
				className="square"
				onClick={() => {
					this.props.onClick();
				}}>
				{this.props.value}
			</button>
		);
	}
}

/* 每一个 Square 被点击时，Board 提供的 onClick 函数就会触发。实现流程 */
/* 1.向 DOM 内置元素 <button> 添加 onClick prop ，让 React 开启对点击事件的监听 */
/* 2.当 button 被点击时，React 会调用 Square 组件中的 render() 方法中的 onClick 事件处理函数 */
/* 3.事件处理函数触发了传入其中的 this.props.onClick() 方法。这个方法是由 Board 传递给 Square 的。 */
/* 4.由于 Board 把 onCLick={ () => this.handleClick(i) } 传递给了 Square，所以当 Square
中的事件处理函数触发时，其实就是触发的 Board 当中的 this.handleClick(i) 方法。
 */

class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}

	renderSquare(i) {
		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => {
					this.handleClick(i); 
				}}
			/>
		);
	}

	render() {
		const status = "Next player: X";

		return (
			<div>
				<div className="status">{status}</div>
				<div className="board-row">
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className="board-row">
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className="board-row">
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
