<script>
import { onMount , afterUpdate } from 'svelte';

	// initialize the variables keeping track of the application's list
	let todos;
	let completed;

	// variable bound to the input of type text
	let value;

	// function adding an item to the todos list
	function addTodo() {
		// ! only if value contains something
		if(value) {
			todos = todos ? [...todos, value] : [value];
			value = '';
		}
	}
	// function adding an item to the completed list, and removing it from the todos list
	function completeTodo(index) {
		completed = completed ? [...completed, todos[index]] : [todos[index]];
		todos = [...todos.slice(0, index), ...todos.slice(index + 1)]
	}
	// function removing an item from the completed list
	function removeTodo(index) {
		completed = [...completed.slice(0, index), ...completed.slice(index + 1)]
	}

	// function retrieving the todos and completed lists from local storage
	// ! if such lists are available
	// ! they are available as strings of comma separated values
	function initializeFromLocalStorage() {
		todos = window.localStorage.getItem('todos') ? window.localStorage.getItem('todos').split(',') : [];
		completed = window.localStorage.getItem('completed') ? window.localStorage.getItem('completed').split(',') : [];
	}

	// function saving the lists to local storage
	// save the lists as string of comma separated values
	function updateLocalStorage() {
		window.localStorage.setItem('todos', todos.join(','));
		window.localStorage.setItem('completed', completed.join(','));
	}

	// retrieve the values from local storage as the application is rendered
	onMount(() => {
		initializeFromLocalStorage();
	})
	// update local storage as the application changes its state
	afterUpdate(() => {
		updateLocalStorage();
	});
</script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

	* {
		padding: 0;
		margin: 0;
	}

	.app {
		max-width: 280px;
		width: 90vw;
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
		font-family: 'Lato', sans-serif;
		color: #333;

	}
	header {
		padding: 0 1rem;
	}
	header h1 {
		font-weight: 400;
	}
	ul {
		list-style: none;
	}
	ul li + li {
		border-top: 1px solid #c5c5c5;
	}
	ul li button {
		padding: 0.75rem 0;
		width: 100%;
		display: flex;
		align-items: center;
		background: none;
		border: none;
		font-family: inherit;
		font-size: 0.85rem;
		transition: all 0.2s ease-out;
	}
	ul li button:hover {
		background: #f3f3f3;
	}
	ul li button svg {
		margin-right: 0.5rem;
		width: 18px;
		height: auto;
		display: block;
		color: #c5c5c5;
	}
	main, details {
		margin: 0.75rem 0;
	}
	details {
		line-height: 2;
	}
	form {
		margin-top: auto;
		display: flex;
		align-items: center;
	}
	form input,
	form button {
		font-family: inherit;
		border: none;
		background: none;
		padding: 0.5rem;
		font-size: 0.9rem;
	}
	form input {
		flex-grow: 1;
	}
	form button {
		font-weight: 700;
	}
</style>

<!-- icons used in the project -->
<svg viewBox="0 0 110 110" style="display: none;">
	<symbol id="complete">
		<g
			transform="translate(55 55)">
			<circle
				r="50"
				cx="0"
				cy="0"
				fill="none"
				stroke="currentColor"
				stroke-width="10">
			</circle>
		</g>
	</symbol>
	<symbol id="delete">
		<g
			transform="translate(5 5)"
			stroke-width="10"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
			fill="none">
			<path
					d="M 0 10 h 20 l 10 -10 h 40 l 10 10 h 20 v 20 h -10 l -10 70 h -60 l -10 -70 h 80 h -90 z">
			</path>
			<g transform="translate(50 65) rotate(45)">
					<path
							d="M -20 0 h 40 M 0 -20 v 40">
					</path>
			</g>
		</g>
	</symbol>
</svg>

<!-- markup structure
.app, wrapping container
	header, introducing the list
	main, displaying the todos list
	details, displaying (optionally) the completed list
	form, adding a new item to the todos list

! include the lists conditional to the list describing items
-->
<div class="app">
	<header>
		<h1>Today</h1>
	</header>

	<main>
		{#if todos && todos.length > 0}
		<ul>
			{#each todos as todo, i}
				<li>
					<button on:click={() => completeTodo(i)}>
						<svg viewBox="0 0 110 110" width="18" height="18">
							<use href="#complete"></use>
						</svg>
						<span>
							{todo}
						</span>
					</button>
				</li>
			{/each}
		</ul>
		{/if}
	</main>


	{#if completed && completed.length > 0}
		<details>
			<summary>Completed</summary>
				<ul>
					{#each completed as complete, i}
						<li>
							<button on:click={() => removeTodo(i)}>
								<svg viewBox="0 0 110 110" width="18" height="18">
									<use href="#delete"></use>
								</svg>
								<span>
									{complete}
								</span>
							</button>
						</li>
					{/each}
				</ul>
		</details>
	{/if}

	<form on:submit|preventDefault={addTodo}>
		<input type="text" placeholder="New task" bind:value>
		<button>Save</button>
	</form>
</div>