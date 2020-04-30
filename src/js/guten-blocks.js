wp.blocks.registerBlockType( 'ach/hero-card', {
	title: 'Hero card',
	icon: 'smiley',
	category: 'common',
	attributes: {
		content: {type: 'string'},
		color: {type: 'string'}
	},
	edit: (props) => {
		const updateContent = (event) => {
			props.setAttributes({
				content: event.target.value
			});
		};

		return (
			<div>
				<h3>
					{props.attributes.content}
				</h3>
				<input 
					type="text"
					value={props.attributes.content}
					onChange={()=>updateContent()}
				/>
			</div>
		);

		// return wp.element.createElement(
		// 	"div",
		// 	null,
		// 	wp.element.createElement(
		// 		"h3", 
		// 		null, 
		// 		props.attributes.content
		// 	),
		// 	wp.element.createElement(
		// 		"input", 
		// 		{
		// 			type: "text",
		// 			value: props.attributes.content,
		// 			onChange: updateContent
		// 		}
		// 	)
		// );
	},
	save: (props) => {
		return wp.element.createElement("h3", null, props.attributes.content);
	},
} );