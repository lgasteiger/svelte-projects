<script>
  import Styling from './Styling.svelte';
  import NestedComponents from './NestedComponents.svelte';
	import HtmlTags from './HtmlTags.svelte';
	import Assignments from './Assignments.svelte';
	import Declarations from './Declarations.svelte';
	import Statements from './Statements.svelte';
	import UpdatingArrays from './UpdatingArrays.svelte';
	import NestedDeclaringProps from './NestedDeclaringProps.svelte';
	import NestedDefaultValues from './NestedDefaultValues.svelte';
	import SpreadPropsInfo from './SpreadPropsInfo.svelte';
	import IfBlocks from './IfBlocks.svelte';
	import ElseIf from './ElseIf.svelte';
	import EachBlocks from './EachBlocks.svelte';
	import KeyedEachBlocks from './KeyedEachBlocks.svelte';
	import AwaitBlocks from './AwaitBlocks.svelte';
	import DomElements from './DomElements.svelte';
	import EventModifiers from './EventModifiers.svelte';
	import ComponentEvents from './ComponentEvents.svelte';
	import DomEventForwarding from './DomEventForwarding.svelte';
	import TextInput from './TextInput.svelte';
	import NumericInputs from './NumericInputs.svelte';
	import CheckboxInputs from './CheckboxInputs.svelte';
	import GroupInputs from './GroupInputs.svelte';
	import TextareaInputs from './TextareaInputs.svelte';
	import SelectBindings from './SelectBindings.svelte';
	import SelectMultiple from './SelectMultiple.svelte';
	import ContentEditableBindings from './ContentEditableBindings.svelte';
	import EachBlockBindings from './EachBlockBindings.svelte';
	import MediaElements from './MediaElements.svelte';
	import Dimensions from './Dimensions.svelte';
	
	export let name;
	const src = 'images/myGlock.png';
  const pkg = {
		name: 'svelte'
		,version: 3
		,speed: 'blazing'
		,website: 'https://svelte.dev'
	};
</script>

<main>
	<table>
	  <caption>Svelte Tutorial</caption>
		<thead>
		  <tr>
			  <td>Svelte Section</td>
				<td>Svelte Topic</td>
				<td>Svelte Example</td>
			</tr>
		</thead>
		<tbody>
		  <tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Adding Data</h4></td>
			  <td>
				  <h1>Hello {name}!</h1>
	        <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
				</td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Dynamic Attributes</h4></td>
				<td>
				  <img src={src} alt="My Glock Image.">
				</td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Styling</h4></td>
				<td><Styling /></td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
			  <td><h4>Nested Components</h4></td>
				<td><NestedComponents /></td>
			</tr>
			<tr>
			  <td><h3>Introduction</h3></td>
				<td><h4>HTML Tags</h4></td>
				<td><HtmlTags /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
				<td><h4>Assignments</h4></td>
				<td><Assignments /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
			  <td><h4>Declarations</h4></td>
        <td><Declarations /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
				<td><h4>Statements</h4></td>
				<td><Statements /></td>
			</tr>
			<tr>
			  <td><h3>Reactivity</h3></td>
				<td><h4>Updating Arrays</h4></td>
				<td><UpdatingArrays /></td>
			</tr>
			<tr>
			  <td><h3>Props</h3></td>
				<td><h4>Declaring Props</h4></td>
				<td><NestedDeclaringProps answer={42} /></td>
			</tr>
			<tr>
			  <td><h3>Props</h3></td>
				<td><h4>Default Values</h4></td>
				<td><NestedDefaultValues answer={45} />
				    <NestedDefaultValues />
				</td>
			</tr>
			<tr>
			  <td><h3>Props</h3></td>
				<td><h4>Spreading Props</h4></td>
				<td>
				  <SpreadPropsInfo 
					  name={pkg.name}
						version={pkg.version}
						speed={pkg.speed}
						website={pkg.website}
					/>
					<u>Using the Spread Operator</u> ==> <SpreadPropsInfo {...pkg} />
				</td>
			</tr>
			<tr>
			  <td><h3>Logic</h3></td>
				<td><h4>If Blocks</h4></td>
				<td><IfBlocks /></td>
			</tr>
			<tr>
			  <td><h3>Logic</h3></td>
				<td><h4>Else If Blocks</h4></td>
				<td><ElseIf /></td>
			</tr>
			<tr>
			  <td><h3>Logic</h3></td>
				<td><h4>Each Blocks</h4></td>
				<td><EachBlocks /></td>
			</tr>
			<tr>
			  <td><h3>Logic</h3></td>
				<td><h4>Keyed Each Blocks</h4></td>
        <td><KeyedEachBlocks /></td>
			</tr>
			<tr>
			  <td><h3>Logic</h3></td>
				<td><h4>Await Blocks</h4></td>
				<td><AwaitBlocks /></td>
			</tr>
			<tr>
			  <td><h3>Events</h3></td>
				<td><h4>DOM Elements</h4></td>
				<td><DomElements /></td>
			</tr>
			<tr>
			  <td><h3>Events</h3></td>
				<td><h4>Event Modifiers</h4></td>
				<td><EventModifiers /></td>
			</tr>
			<tr>
			  <td><h3>Events</h3></td>
				<td><h4>Component Events and Event Forwarding</h4></td>
				<td><ComponentEvents /></td>
			</tr>
			<tr>
			  <td><h3>Events</h3></td>
				<td><h4>DOM Event Forwarding</h4></td>
				<td><DomEventForwarding /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Text Input</h4></td>
				<td><TextInput /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Text Input</h4></td>
				<td><NumericInputs /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td>Checkbox Inputs</td>
				<td><CheckboxInputs /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Group Inputs</h4></td>
				<td><GroupInputs /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Textarea Inputs</h4></td>
				<td><TextareaInputs /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Select Bindings</h4></td>
				<td><SelectBindings /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td>Select Multiple</td>
				<td><SelectMultiple /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Contenteditable Bindings</h4></td>
				<td><ContentEditableBindings /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Each Block Bindings</h4></td>
				<td><EachBlockBindings /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Media Elements</h4></td>
				<td><MediaElements /></td>
			</tr>
			<tr>
			  <td><h3>Bindings</h3></td>
				<td><h4>Dimensions</h4></td>
				<td><Dimensions /></td>
			</tr>
		</tbody>
	</table>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	table caption {
		padding: 0 0 0.5em, 0;
		font-size: 1.25em; 
	}

	table thead {
		background-color: #06c;
		font-weight: bold;
	}

	td {
		border: 1px solid #000;
		padding: 0.5em 1em 0.5em 1em;
		text-align: center;
	}
</style>