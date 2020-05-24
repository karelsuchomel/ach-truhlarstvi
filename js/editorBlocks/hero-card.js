wp.blocks.registerBlockType( 'ach/hero-card', {
	title: 'Hero card',
	icon: 'smiley',
	category: 'common',
	attributes: {
		headerContent: {
			type: 'string'
		},
		textContent: {
			type: 'string'
		},
		buttonContent: {
			type: 'string',
		},
		mediaID: {
			type: 'number',
		},
		mediaURL: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
	},
	edit: (props) => {
		// Destructuring
		const {
			attributes: {
				mediaID,
				mediaURL,
			},
		} = props;

		const updateHeader = (newContent) => {
			props.setAttributes({
				headerContent: newContent
			});
		};

		const updateText = (newContent) => {
			props.setAttributes({
				textContent: newContent
			});
		};

		const updateButton = (newContent) => {
			props.setAttributes({
				buttonContent: newContent
			});
		};

		const onSelectImage = ( media ) => {
			props.setAttributes( {
				mediaURL: media.url,
				mediaID: media.id,
			} );
		};

		return (
			<div className={props.className}>
				<div className="image-wrapper">
					<wp.blockEditor.MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<wp.components.Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! mediaID ? 'Upload Image' : <img src={ mediaURL } alt='Upload Recipe Image' /> }
							</wp.components.Button>
						) }
					/>
				</div>
				<div className="text-card">
					<div className="text-wrapper">
						<wp.blockEditor.RichText
							tagName="h1"
							onChange={ updateHeader }
							value={ props.attributes.headerContent }
							placeholder="Headline"
						/>
						<wp.blockEditor.RichText
							tagName="p"
							onChange={ updateText }
							value={ props.attributes.textContent }
							placeholder="More details"
						/>
						<wp.blockEditor.RichText
							tagName="a"
							className="wp-block-button__link"
							onChange={ updateButton }
							value={ props.attributes.buttonContent }
							placeholder="Button text"
						/>
					</div>
				</div>
			</div>
		);
	},
	save: (props) => {
		return (
			<div>
				<div className="image-wrapper">
				{
					props.attributes.mediaURL && (
						<img className="recipe-image" src={ props.attributes.mediaURL } alt='Recipe Image' />
					)
				}
				</div>
				<div className="text-card">
					<div className="text-wrapper">
						<wp.blockEditor.RichText.Content
							tagName="h1"
							value={ props.attributes.headerContent }
						/>
						<wp.blockEditor.RichText.Content
							tagName="p"
							value={ props.attributes.textContent }
						/>
						<wp.blockEditor.RichText.Content
							tagName="div"
							value={ props.attributes.buttonContent }
						/>
					</div>
				</div>
			</div>
		);
	},
} );